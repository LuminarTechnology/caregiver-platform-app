import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface ServiceCardProps {
  icon: keyof typeof Ionicons.glyphMap
  iconColor?: string
  title: string
  description: string
  users: string
  status: 'Active' | 'Coming Soon'
  verifiedText?: string
  onPress?: () => void
  disabled?: boolean
  className?: string
}

export default function ServiceCard({
  icon,
  iconColor = '#FF3B5C',
  title,
  description,
  users,
  status,
  verifiedText = 'All Verified',
  onPress,
  disabled = false,
  className
}: ServiceCardProps) {
  const isActive = status === 'Active'

  return (
    <View
      className={`rounded-xl border border-gray-100 bg-white p-8 ${
        !isActive ? 'opacity-70' : ''
      } ${className}`}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6
      }}
    >
      {/* Icon + Status */}
      <View className="mb-3 flex-row items-center justify-between">
        <View className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
          <Ionicons name={icon} size={22} color={iconColor} />
        </View>
        <View
          className={`rounded-full px-3 py-1 ${
            isActive ? 'bg-green-100' : 'bg-gray-100'
          }`}
        >
          <Text
            className={`text-xs font-semibold ${
              isActive ? 'text-green-600' : 'text-gray-400'
            }`}
          >
            {status}
          </Text>
        </View>
      </View>

      {/* Title */}
      <Text
        className={`mb-2 text-lg font-bold ${
          isActive ? 'text-gray-800' : 'text-gray-400'
        }`}
      >
        {title}
      </Text>

      {/* Description */}
      <Text
        className={`mb-3 text-sm ${
          isActive ? 'text-gray-500' : 'text-gray-400'
        }`}
      >
        {description}
      </Text>

      {/* Meta Info */}
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-xs text-gray-400">{users}</Text>
        <View className="flex-row items-center space-x-1">
          <Ionicons name="shield-outline" size={12} color="#9CA3AF" />
          <Text className="text-xs text-gray-400">{verifiedText}</Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        className={`items-center rounded-lg py-3 ${
          isActive ? 'bg-[#A41845]' : 'bg-gray-200'
        }`}
        disabled={disabled || !isActive}
        onPress={onPress}
      >
        <Text
          className={`text-base font-semibold ${
            isActive ? 'text-white' : 'text-gray-400'
          }`}
        >
          {isActive ? 'Continue' : 'Coming Soon'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
