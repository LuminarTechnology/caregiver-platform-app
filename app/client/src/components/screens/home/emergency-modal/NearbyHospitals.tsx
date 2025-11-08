import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CallIcon, LocationIcon } from '@lib/icons';

const hospitals = [
  { name: 'Dhaka Medical College Hospital', distance: '2.3 km', address: 'Ramna, Dhaka 1000' },
  { name: 'Square Hospital', distance: '3.1 km', address: 'West Panthapath, Dhaka 1205' },
  { name: 'United Hospital', distance: '4.2 km', address: 'Gulshan-2, Dhaka 1212' }
];

export const NearbyHospitals = () => (
  <View className="px-5 py-4 bg-gray-50">
    <View className="flex-row items-center mb-3">
      <LocationIcon/>
      <Text className="ml-2 font-semibold text-gray-900">Nearby Hospitals</Text>
    </View>
    <Text className="text-sm text-gray-600 mb-4">Emergency-ready hospitals near you</Text>
    
    {hospitals.map((hospital, index) => (
      <View key={index} className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
        <View className="flex-row justify-between items-start mb-3">
          <Text className="text-base font-medium text-gray-900 flex-1 pr-2">{hospital.name}</Text>
          <View className="bg-red-50 px-2.5 py-1 rounded-md">
            <Text className="text-xs text-[#F51448] font-semibold">24/7</Text>
          </View>
        </View>
        <View className="flex-row items-center mb-3">
          <LocationIcon/>
          <Text className="ml-1.5 text-sm text-gray-600">{hospital.distance}</Text>
          <Text className="mx-2 text-gray-400">•</Text>
          <Text className="text-sm text-gray-600 flex-1">{hospital.address}</Text>
        </View>
        <TouchableOpacity className="border-2 border-[#F51448] rounded-xl py-3 flex-row items-center justify-center">
          <CallIcon/>
          <Text className="ml-2 text-[#F51448] font-semibold">Call</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
);