import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CallIcon, LocationIcon } from '@lib/icons'

const hospitals = [
  {
    name: 'Dhaka Medical College Hospital',
    distance: '2.3 km',
    address: 'Ramna, Dhaka 1000'
  },
  {
    name: 'Square Hospital',
    distance: '3.1 km',
    address: 'West Panthapath, Dhaka 1205'
  },
  {
    name: 'United Hospital',
    distance: '4.2 km',
    address: 'Gulshan-2, Dhaka 1212'
  }
]

export const NearbyHospitals = () => (
  <View className="my-6 rounded-2xl border-2 border-gray-100 bg-[#FFF7F9] px-5 py-4">
    <View className="mb-2 flex-row items-center">
      <LocationIcon size={21} strokeColor="black" />
      <Text className="ml-2 text-lg font-semibold text-gray-900">
        Nearby Hospitals
      </Text>
    </View>
    <Text className="mb-4 text-gray-600">
      Emergency-ready hospitals near you
    </Text>

    {hospitals.map((hospital, index) => (
      <View
        key={index}
        className="mb-3 rounded-xl border-2 border-gray-100 bg-white p-4 shadow-sm"
      >
        <View className="mb-1 flex-row items-start justify-between">
          <Text className="flex-1 pr-2 text-base font-medium text-gray-900">
            {hospital.name}
          </Text>
          <View className="rounded-md bg-red-50 px-2.5 py-1">
            <Text className="text-xs font-semibold text-[#F51448]">24/7</Text>
          </View>
        </View>
        <View className="mb-4 flex-row items-center">
          <LocationIcon size={16} strokeColor="black" />
          <Text className="ml-1.5 text-gray-600">{hospital.distance}</Text>
          <Text className="mx-2 text-gray-400">•</Text>
          <Text className="flex-1 text-gray-600">{hospital.address}</Text>
        </View>
        <TouchableOpacity className="border-primary flex-row items-center justify-center rounded-2xl border-2 bg-[#FFF7F9] py-3">
          <CallIcon size={16} strokeColor="#A41845" />
          <Text className="text-primary ml-2 font-semibold">Call</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
)
