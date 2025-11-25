import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import AuthLayout from '../../components/common/layouts/AuthLayout'
import { authService } from '@lib/api'
import { tokenManager } from '@lib/config/axios'
import { useAuth } from '../../navigation/AuthContext'

type OTPVerificationRouteProp = RouteProp<
  {
    OTPVerification: {
      email: string
      phone: string
    }
  },
  'OTPVerification'
>

const OTPVerification = () => {
  const navigation = useNavigation()
  const { setAuthenticated } = useAuth()
  const { mutate: verifyPhone } = authService.verifyOtp()
  const { mutate: resendOtpMutation, isPending: isResending } =
    authService.resendOtp()
  const route = useRoute<OTPVerificationRouteProp>()
  const { phone } = route.params

  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [timer, setTimer] = useState(5)
  const [canResend, setCanResend] = useState(false)

  const inputRefs = useRef<(TextInput | null)[]>([])

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setCanResend(true)
    }
  }, [timer])

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return // Only allow numbers

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError('')

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = async () => {
    const otpCode = otp.join('')

    setError('')
    setIsSubmitting(true)

    verifyPhone(
      { phone, otp: otpCode },
      {
        onSuccess: async () => {
          // Update verification status
          const userData = await tokenManager.getUserData()
          if (userData) {
            await tokenManager.setUserData({
              ...userData,
              needsVerification: false
            })
          }
          setAuthenticated(true)
        },
        onError: (err) => {
          setError(err.message || 'Invalid OTP. Try again.')
        },
        onSettled: () => {
          setIsSubmitting(false)
        }
      }
    )
  }

  const handleResend = async () => {
    if (!canResend) return

    setCanResend(false)
    setTimer(5)
    setOtp(['', '', '', '', '', ''])
    setError('')

    resendOtpMutation(
      { phone },
      {
        onSuccess: (res) => {
          console.warn('OTP resent:', res.message)
        },
        onError: (err) => {
          setError(err.message || 'Failed to resend OTP')
        }
      }
    )
  }

  const isOtpComplete = otp.every((digit) => digit !== '')

  return (
    <AuthLayout pageTitle="CareGiver.com">
      <View className="flex-1">
        <ScrollView className="flex-1 bg-white p-4">
          <View className="mb-8">
            <Text className="mb-2 text-2xl font-bold text-gray-800">
              Verify Your Account
            </Text>
            <Text className="text-base leading-5 text-gray-600">
              We've sent a 6-digit verification code to{'\n'}
              <Text className="font-semibold text-gray-800">{phone}</Text>
            </Text>
          </View>

          <View className="mb-6">
            <Text className="mb-4 text-center text-base text-gray-700">
              Enter OTP Code
            </Text>

            <View className="mb-4 flex-row justify-between">
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    inputRefs.current[index] = ref
                  }}
                  className="h-14 w-12 rounded-lg border-2 border-gray-300 bg-white text-center text-xl font-bold text-gray-800"
                  value={digit}
                  onChangeText={(value) => handleOtpChange(value, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                />
              ))}
            </View>

            {error && (
              <Text className="mb-2 text-center text-sm text-red-500">
                {error}
              </Text>
            )}
          </View>

          <TouchableOpacity
            className={`mb-4 items-center justify-center rounded-2xl p-5 ${
              isOtpComplete ? 'bg-primary' : 'bg-gray-400'
            }`}
            onPress={handleVerify}
            disabled={!isOtpComplete || isSubmitting}
          >
            <Text className="text-lg font-bold text-white">
              {isSubmitting ? 'Verifying...' : 'Verify OTP'}
            </Text>
          </TouchableOpacity>

          <View className="mb-6 items-center">
            {!canResend ? (
              <Text className="text-base text-gray-600">
                Resend code in{' '}
                <Text className="font-semibold text-gray-800">{timer}s</Text>
              </Text>
            ) : (
              <TouchableOpacity onPress={handleResend}>
                <Text className="text-primary text-base font-semibold">
                  Resend OTP
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View className="mb-4 flex-row justify-center">
            <Text className="mr-1 text-base text-gray-700">
              Wrong email or phone?
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text className="text-primary text-base font-semibold">
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </AuthLayout>
  )
}

export default OTPVerification
