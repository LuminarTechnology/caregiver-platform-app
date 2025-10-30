import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import InputField from '@lib/ui/InputField'
import { useNavigation } from '@react-navigation/native'
import PageHeader from '@lib/ui/PageHeader'

const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(1, 'Full name is required')
      .min(2, 'Full name must be at least 2 characters'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Please enter a valid email address'),
    phone: z
      .string()
      .min(1, 'Phone number is required')
      .regex(/^\+?[\d\s-()]{10,}$/, 'Please enter a valid phone number'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter and one number'
      ),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    agreed: z.boolean().refine((val) => val === true, {
      message: 'You must agree to the terms and conditions'
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })

type SignUpFormData = z.infer<typeof signUpSchema>

const SignUp = () => {
  const navigation = useNavigation()
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreed: false
    }
  })

  const agreed = watch('agreed')

  const onSubmit = async (data: SignUpFormData) => {
    console.log('Form data:', data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Registration successful!')
  }

  return (
    <View className='flex-1'>
      <PageHeader title="CareGiver.com" />
      <ScrollView className="flex-1 bg-white p-4">
        <Text className="mb-6 text-2xl font-bold text-gray-800">
          Create Account
        </Text>

        <InputField
          control={control}
          name="fullName"
          placeholder="Enter your full name"
          autoCapitalize="words"
          error={errors.fullName}
          className="mb-4"
        />

        <InputField
          control={control}
          name="email"
          placeholder="Enter your email"
          keyboardType="email-address"
          error={errors.email}
          className="mb-4"
        />

        <InputField
          control={control}
          name="phone"
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          error={errors.phone}
          className="mb-4"
        />

        <InputField
          control={control}
          name="password"
          placeholder="Create password"
          isPassword={true}
          isPasswordVisible={isPasswordVisible}
          onTogglePasswordVisibility={() =>
            setIsPasswordVisible(!isPasswordVisible)
          }
          error={errors.password}
          className="mb-4"
        />

        <InputField
          control={control}
          name="confirmPassword"
          placeholder="Confirm password"
          isPassword={true}
          isPasswordVisible={isConfirmPasswordVisible}
          onTogglePasswordVisibility={() =>
            setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
          }
          error={errors.confirmPassword}
          className="mb-6"
        />

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
                  />
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
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        <View className="mb-8 flex-row justify-center">
          <Text className="mr-1 text-base text-gray-700">
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() =>
              (navigation as any).navigate('AuthStack', { screen: 'SignIn' })
            }
          >
            <Text className="text-primary text-base font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View className="items-center">
          <Text className="text-center text-base leading-5 text-gray-600">
            By signing up, you agree to our{' '}
            <Text className="text-primary underline">Terms of Use</Text>.{'\n'}
            See our{' '}
            <Text className="text-primary underline">Privacy Policy</Text>.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUp
