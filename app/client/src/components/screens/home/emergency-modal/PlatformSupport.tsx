import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CallIcon, LocationIcon, ShieldIcon } from '@lib/icons'

export const PlatformSupport = () => (
  <View className="mt-4 rounded-2xl border-2 border-gray-100 bg-[#FFF7F9] px-5 py-4 pb-8">
    <View className="mb-2 flex-row items-center">
      <ShieldIcon />
      <Text className="ml-2 text-lg font-semibold text-gray-900">
        Platform Support
      </Text>
    </View>
    <Text className="mb-4 text-gray-600">
      CareConnect emergency support team
    </Text>

    <TouchableOpacity className="border-primary mb-3 flex-row items-center justify-center rounded-2xl border-2 py-3">
      <CallIcon size={16} strokeColor="#A41845" />
      <Text className="text-primary ml-2 font-semibold">Call Support</Text>
    </TouchableOpacity>

    <TouchableOpacity className="border-primary flex-row items-center justify-center rounded-2xl border-2 py-3">
      <LocationIcon size={24} stroke="#A41845" />
      <Text className="text-primary ml-2 font-semibold">Share Location</Text>
    </TouchableOpacity>
  </View>
)
