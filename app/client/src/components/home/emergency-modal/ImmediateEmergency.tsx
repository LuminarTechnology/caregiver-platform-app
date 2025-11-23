import { AmbulanceIcon, CallIcon } from '@lib/icons'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const primaryColor = '#F51448'
export const ImmediateEmergency = ({ onCall }) => (
  <View className="rounded-2xl border-2 border-gray-100 bg-[#FFF7F9] p-4">
    <View className="mb-2 flex-row items-center">
      <CallIcon size={16} strokeColor={primaryColor} />
      <Text className="ml-2 text-lg font-semibold text-[#F51448]">
        Immediate Emergency
      </Text>
    </View>
    <Text className="mb-3 text-gray-900">Critical emergency services</Text>
    <View className="flex-row gap-3">
      <TouchableOpacity
        onPress={() => onCall('999')}
        className={`flex-1 flex-row items-center justify-center rounded-xl bg-[#F51448] py-3.5`}
      >
        <CallIcon size={16} strokeColor="white" />
        <Text className="ml-2 font-semibold text-white">Call 999</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onCall('199')}
        className={`flex-1 bg-[${primaryColor}] flex-row items-center justify-center rounded-xl py-3.5`}
      >
        <AmbulanceIcon strokeColor="white" />
        <Text className="ml-2 font-semibold text-white">Fire 199</Text>
      </TouchableOpacity>
    </View>
  </View>
)
