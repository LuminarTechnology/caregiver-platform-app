import { CallIcon } from '@lib/icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const ImmediateEmergency = ({ onCall }) => (
  <View className="px-5 py-4">
    <View className="flex-row items-center mb-3">
      <CallIcon/>
      <Text className="ml-2 font-semibold text-gray-900">Immediate Emergency</Text>
    </View>
    <Text className="text-sm text-gray-600 mb-3">Critical emergency services</Text>
    <View className="flex-row gap-3">
      <TouchableOpacity 
        onPress={() => onCall('999')}
        className="flex-1 bg-[#F51448] rounded-xl py-3.5 flex-row items-center justify-center"
      >
        <CallIcon/>
        <Text className="ml-2 text-white font-semibold">Call 999</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => onCall('199')}
        className="flex-1 bg-[#F51448] rounded-xl py-3.5 flex-row items-center justify-center"
      >
        <Text className="mr-2 text-white text-lg">🚒</Text>
        <Text className="text-white font-semibold">Fire 199</Text>
      </TouchableOpacity>
    </View>
  </View>
);