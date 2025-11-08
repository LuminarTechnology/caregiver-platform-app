import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CallIcon, LocationIcon, ShieldIcon } from '@lib/icons';

export const PlatformSupport = () => (
  <View className="px-5 py-4 pb-8 bg-secondary rounded-2xl mt-4 border-2 border-gray-100">
    <View className="flex-row items-center mb-2">
      <ShieldIcon/>
      <Text className="ml-2 font-semibold text-gray-900 text-lg">Platform Support</Text>
    </View>
    <Text className="text-gray-600 mb-4">CareConnect emergency support team</Text>
    
    <TouchableOpacity className="border-2 border-primary rounded-2xl py-3 flex-row items-center justify-center mb-3">
      <CallIcon size={16} strokeColor='#A41845'/>
      <Text className="ml-2 text-primary font-semibold">Call Support</Text>
    </TouchableOpacity>
    
    <TouchableOpacity className="border-2 border-primary rounded-2xl py-3 flex-row items-center justify-center">
      <LocationIcon size={24} strokeColor='#A41845'/>
      <Text className="ml-2 text-primary font-semibold">Share Location</Text>
    </TouchableOpacity>
  </View>
);