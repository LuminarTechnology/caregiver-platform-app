import BellIcon from '@lib/icons/BellIcon'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Header: React.FC = () => {
  return (
    <View className="flex-row items-center justify-between border-b border-gray-100 bg-white p-4">
      <Text className="text-3xl font-bold text-gray-900">Messages</Text>
      <TouchableOpacity
        onPress={() => console.log('Notification pressed')}
        className="p-2"
      >
        <BellIcon width={24} height={24} />
        <View className="absolute -top-1 right-0 h-6 w-6 items-center justify-center rounded-full bg-[#FDC700] text-xs">
          <Text className="text-defaultBlack text-sm">3</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Header
