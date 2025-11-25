import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import FacebookIcon from '@lib/icons/FacebookIcon'
import GoogleIcon from '@lib/icons/GoogleIcon'
import AppleIcon from '@lib/icons/AppleIcon'
import InputField from 'lib/src/ui/InputField'
import { useNavigation } from '@react-navigation/native'
import { CheckMarkIcon } from '@lib/icons/CheckMarkIcon'
import AuthLayout from '../../components/common/layouts/AuthLayout'
import { authService } from '@lib/api'
import { useAuth } from '../../navigation/AuthContext'
import { tokenManager } from '@lib/config/axios'

const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'Email or phone number is required')
    .refine((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const phoneRegex = /^\+?[\d\s-()]{10,}$/
      return emailRegex.test(value) || phoneRegex.test(value.replace(/\s/g, ''))
    }, 'Please enter a valid email or phone number'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter and one number'
    ),
  agreed: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions'
  })
})

type SignInFormData = z.infer<typeof signInSchema>

const SignIn = () => {
  const { mutate: login, isPending, error } = authService.login()
  const navigation = useNavigation()
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      agreed: false
    }
  })

  const agreed = watch('agreed')
  const { setAuthenticated } = useAuth()
  const onSubmit = async (data: SignInFormData) => {
    login(
      {
        email: data.email,
        password: data.password
      },
      {
        onSuccess: async (data) => {
          setAuthenticated(true)
          const result = data.data

          // Store tokens
          await tokenManager.setTokens(result.accessToken, result.refreshToken)

          // Store user data
          await tokenManager.setUserData({
            userId: result.userId,
            email: result.email,
            roles: result.roles
          })
        },
        onError: (err) => {
          Alert.alert('Error', err.message)
        }
      }
    )
  }

  const handleSocialLogin = (platform: 'Facebook' | 'Google' | 'Apple') => {
    console.log(`Signing in with ${platform}...`)
  }

  const handleForgetPassword = () => {
    console.log('Go to Forget Password...')
  }

  return (
    <AuthLayout pageTitle="CareGiver.com">
      <View className="flex-1">
        <ScrollView className="flex-1 bg-white p-4">
          <Text className="mb-6 text-2xl font-bold text-gray-800">Log In</Text>

          <InputField
            control={control}
            name="email"
            placeholder="Enter your email or phone"
            keyboardType="email-address"
            error={errors.email}
            className="mb-4"
          />

          <InputField
            control={control}
            name="password"
            placeholder="Password"
            isPassword={true}
            isPasswordVisible={isPasswordVisible}
            onTogglePasswordVisibility={() =>
              setIsPasswordVisible(!isPasswordVisible)
            }
            error={errors.password}
            className="mb-4"
          />

          <TouchableOpacity
            onPress={handleForgetPassword}
            className="mb-6 self-end"
          >
            <Text className="text-dark text-base">Forgot Password?</Text>
          </TouchableOpacity>

          <View className="mb-4">
            <Controller
              control={control}
              name="agreed"
              render={({ field: { onChange, value } }) => (
                <View className="flex-row items-center">
                  <TouchableOpacity
                    onPress={() => onChange(!value)}
                    className="mr-3 mt-0.5"
                  >
                    <View
                      className={`h-5 w-5 rounded border-2 ${
                        value ? 'bg-primary border-primary' : 'border-gray-400'
                      }`}
                    >
                      {value && <CheckMarkIcon />}
                    </View>
                  </TouchableOpacity>
                  <Text className="text-dark flex-1 text-base leading-5">
                    I agree to the <Text>Terms of Service</Text> and{' '}
                    <Text>Privacy Policy</Text>
                  </Text>
                </View>
              )}
            />
            {errors.agreed && (
              <Text className="mt-1 text-sm text-red-500">
                {errors.agreed.message}
              </Text>
            )}
          </View>

          <TouchableOpacity
            className={`mb-6 items-center justify-center rounded-2xl p-5 ${
              agreed && isValid ? 'bg-primary' : 'bg-gray-400'
            }`}
            onPress={handleSubmit(onSubmit)}
            disabled={!agreed || !isValid || isSubmitting}
          >
            <Text className="text-lg font-bold text-white">
              {isSubmitting ? 'Logging in...' : 'Log In'}
            </Text>
          </TouchableOpacity>

          <View className="mb-8 flex-row justify-center">
            <Text className="mr-1 text-base text-gray-700">
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() =>
                (navigation as any).navigate('SignUp', { screen: 'SignUp' })
              }
            >
              <Text className="text-primary text-base font-semibold">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mb-8 flex-row items-center">
            <View className="h-[1px] flex-1 bg-gray-300" />
            <Text className="mx-4 text-base text-gray-500">Or</Text>
            <View className="h-[1px] flex-1 bg-gray-300" />
          </View>

          <TouchableOpacity
            className="border-primary mb-4 h-16 flex-row items-center justify-center rounded-2xl border bg-white"
            onPress={() => handleSocialLogin('Facebook')}
          >
            <FacebookIcon height={20} width={20} />
            <Text className="ml-3 text-base text-gray-700">
              Sign in with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border-primary mb-4 h-16 flex-row items-center justify-center rounded-2xl border bg-white"
            onPress={() => handleSocialLogin('Google')}
          >
            <GoogleIcon width={20} height={20} />
            <Text className="ml-3 text-base text-gray-700">
              Sign in with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border-primary mb-6 h-16 flex-row items-center justify-center rounded-2xl border bg-white"
            onPress={() => handleSocialLogin('Apple')}
          >
            <AppleIcon width="20" height="20" />
            <Text className="ml-3 text-base text-gray-700">
              Sign in with Apple
            </Text>
          </TouchableOpacity>

          <View className="items-center">
            <Text className="text-center text-base leading-5 text-gray-600">
              By logging in, you agree to our{' '}
              <Text className="text-primary underline">Terms of Use</Text>.
              {'\n'}
              See our{' '}
              <Text className="text-primary underline">Privacy Policy</Text>.
            </Text>
          </View>
        </ScrollView>
      </View>
    </AuthLayout>
  )
}

export default SignIn
