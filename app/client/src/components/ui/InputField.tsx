import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Control, Controller, FieldError } from 'react-hook-form'
import EyeIcon from '@lib/icons/EyeIcon'
import EyeOffIcon from '@lib/icons/EyeOffIcon'
import { useState } from 'react'

interface InputFieldProps {
  control: Control<any>
  name: string
  label?: string
  placeholder: string
  secureTextEntry?: boolean
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  error?: FieldError
  isPassword?: boolean
  isPasswordVisible?: boolean
  onTogglePasswordVisibility?: () => void
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const InputField: React.FC<InputFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  error,
  isPassword = false,
  isPasswordVisible = false,
  onTogglePasswordVisibility,
  className = '',
  leftIcon,
  rightIcon
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View className={`mb-2 ${className}`}>
      {label && (
        <Text className="mb-2 text-base font-medium text-gray-700">
          {label}
        </Text>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            className={`flex-row items-center rounded-2xl border ${
              error
                ? 'border-red-500'
                : isFocused
                ? 'border-primary'
                : 'border-gray-300'
            }`}
          >
            {leftIcon && <View className="pl-3">{leftIcon}</View>}

            <TextInput
              className={`flex-1 px-4 py-5 text-base ${
                leftIcon ? 'pl-2' : ''
              } ${isPassword || rightIcon ? 'pr-2' : ''}`}
              placeholder={placeholder}
              secureTextEntry={
                isPassword ? !isPasswordVisible : secureTextEntry
              }
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              value={value}
              onChangeText={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false)
                onBlur()
              }}
            />

            {isPassword && onTogglePasswordVisibility ? (
              <TouchableOpacity
                className="px-3"
                onPress={onTogglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <EyeOffIcon width="24" height="24" fill="#666" />
                ) : (
                  <EyeIcon width="24" height="24" fill="#666" />
                )}
              </TouchableOpacity>
            ) : rightIcon ? (
              <View className="px-3">{rightIcon}</View>
            ) : null}
          </View>
        )}
      />

      {error && (
        <Text className="mt-1 text-sm text-red-500">{error.message}</Text>
      )}
    </View>
  )
}

export default InputField
