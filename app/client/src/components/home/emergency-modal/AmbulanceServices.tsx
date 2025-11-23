import React from 'react'
import { View, Text } from 'react-native'
import { AmbulanceIcon } from '@lib/icons'

const ambulances = [
  { name: 'Medinova Ambulance' },
  { name: 'Popular Ambulance' }
]

export const AmbulanceServices = () => (
  <View className="rounded-2xl border-2 border-gray-100 bg-[#FFF7F9] px-5 py-4">
    <View className="mb-2 flex-row items-center">
      <AmbulanceIcon />
      <Text className="ml-2 text-lg font-semibold text-gray-900">
        Ambulance Services
      </Text>
    </View>
    <Text className="mb-4 text-gray-600">Private ambulance services</Text>

    {ambulances.map((ambulance, index) => (
      <View
        key={index}
        className="mb-3 flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-4"
      >
        <View className="flex-1 flex-row items-center">
          <AmbulanceIcon />
          <Text className="ml-3 text-lg text-gray-900">{ambulance.name}</Text>
        </View>
        <View className="rounded-md bg-red-50 px-2.5 py-1">
          <Text className="text-xs font-semibold text-[#F51448]">24/7</Text>
        </View>
      </View>
    ))}
  </View>
)
