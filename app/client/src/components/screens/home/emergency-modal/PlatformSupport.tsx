import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CallIcon, LocationIcon, ShieldIcon } from '@lib/icons';

export const PlatformSupport = () => (
  <View className="px-5 py-4 pb-8">
    <View className="flex-row items-center mb-3">
      <ShieldIcon/>
      <Text className="ml-2 font-semibold text-gray-900">Platform Support</Text>
    </View>
    <Text className="text-sm text-gray-600 mb-4">CareConnect emergency support team</Text>
    
    <TouchableOpacity className="border-2 border-[#F51448] rounded-xl py-3 flex-row items-center justify-center mb-3">
      <CallIcon/>
      <Text className="ml-2 text-[#F51448] font-semibold">Call Support</Text>
    </TouchableOpacity>
    
    <TouchableOpacity className="border-2 border-[#F51448] rounded-xl py-3 flex-row items-center justify-center">
      <LocationIcon/>
      <Text className="ml-2 text-[#F51448] font-semibold">Share Location</Text>
    </TouchableOpacity>
  </View>
);