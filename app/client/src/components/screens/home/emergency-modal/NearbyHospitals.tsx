import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CallIcon, LocationIcon } from '@lib/icons';

const hospitals = [
  { name: 'Dhaka Medical College Hospital', distance: '2.3 km', address: 'Ramna, Dhaka 1000' },
  { name: 'Square Hospital', distance: '3.1 km', address: 'West Panthapath, Dhaka 1205' },
  { name: 'United Hospital', distance: '4.2 km', address: 'Gulshan-2, Dhaka 1212' }
];

export const NearbyHospitals = () => (
  <View className="px-5 py-4 my-6 border-2 border-gray-100 rounded-2xl bg-secondary">
    <View className="flex-row items-center mb-2">
      <LocationIcon size={21} strokeColor='black'/>
      <Text className="ml-2 text-lg font-semibold text-gray-900">Nearby Hospitals</Text>
    </View>
    <Text className="text-gray-600 mb-4">Emergency-ready hospitals near you</Text>
    
    {hospitals.map((hospital, index) => (
      <View key={index} className="bg-white rounded-xl border border-gray-100 p-4 mb-3 shadow-sm">
        <View className="flex-row justify-between items-start mb-1">
          <Text className="text-base font-medium text-gray-900 flex-1 pr-2">{hospital.name}</Text>
          <View className="bg-red-50 px-2.5 py-1 rounded-md">
            <Text className="text-xs text-[#F51448] font-semibold">24/7</Text>
          </View>
        </View>
        <View className="flex-row items-center mb-4">
          <LocationIcon size={16} strokeColor='black'/>
          <Text className="ml-1.5 text-gray-600">{hospital.distance}</Text>
          <Text className="mx-2 text-gray-400">•</Text>
          <Text className="text-gray-600 flex-1">{hospital.address}</Text>
        </View>
        <TouchableOpacity className="border-2 border-primary rounded-2xl py-3 flex-row items-center justify-center">
          <CallIcon size={16} strokeColor='#A41845'/>
          <Text className="ml-2 text-primary font-semibold">Call</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
);