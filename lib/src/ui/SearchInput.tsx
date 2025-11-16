import { View, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'

interface SearchInputProps {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'
  onClear?: () => void
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  [key: string]: any
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  keyboardType = 'default',
  onClear,
  className = '',
  leftIcon,
  rightIcon
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const error = false
  const inputRef = useRef<TextInput>(null)

  return (
    <View className={`mb-2 ${className}`}>
      <View
        className={` flex-row items-center rounded-2xl border ${
          error
            ? 'border-red-500'
            : isFocused
            ? 'border-primary'
            : 'border-gray-300'
        }`}
      >
        {leftIcon && <View className="pl-5">{leftIcon}</View>}
        <TextInput
          ref={inputRef}
          className={`flex-1 px-4 py-3 pl-2 text-base`}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false)
          }}
        />
      </View>
    </View>
  )
}

export default SearchInput
