import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CrossIcon, WarningIcon } from '@lib/icons'

export const ModalHeader = ({ onClose }) => (
  <View className="flex-row items-center justify-between border-b border-gray-100 px-5 py-4">
    <View className="flex-1 flex-row items-center">
      <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-red-50">
        <WarningIcon />
      </View>
      <View className="flex-1">
        <Text className="text-primary text-xl font-semibold">
          Emergency Support
        </Text>
        <Text className="mt-1 leading-6 text-gray-800">
          Client emergency assistance - Choose your contact option
        </Text>
      </View>
    </View>
    <TouchableOpacity
      onPress={onClose}
      className="h-8 w-8 items-center justify-center"
    >
      <CrossIcon />
    </TouchableOpacity>
  </View>
)
