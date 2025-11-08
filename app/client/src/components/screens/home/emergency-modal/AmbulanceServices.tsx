import React from 'react';
import { View, Text } from 'react-native';
import { AmbulanceIcon } from '@lib/icons';

const ambulances = [
  { name: 'Medinova Ambulance' },
  { name: 'Popular Ambulance' }
];

export const AmbulanceServices = () => (
  <View className="px-5 py-4 bg-secondary rounded-2xl border-2 border-gray-100">
    <View className="flex-row items-center mb-2">
      <AmbulanceIcon/>
      <Text className="ml-2 font-semibold text-gray-900 text-lg">Ambulance Services</Text>
    </View>
    <Text className="text-gray-600 mb-4">Private ambulance services</Text>
    
    {ambulances.map((ambulance, index) => (
      <View key={index} className="bg-white border border-gray-200 rounded-2xl p-4 mb-3 flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <AmbulanceIcon/>
          <Text className="ml-3 text-lg text-gray-900">{ambulance.name}</Text>
        </View>
        <View className="bg-red-50 px-2.5 py-1 rounded-md">
          <Text className="text-xs text-[#F51448] font-semibold">24/7</Text>
        </View>
      </View>
    ))}
  </View>
);