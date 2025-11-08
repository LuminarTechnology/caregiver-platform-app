import { AmbulanceIcon, CallIcon } from '@lib/icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const primaryColor="#F51448";
export const ImmediateEmergency = ({ onCall }) => (
  <View className="p-4 bg-secondary rounded-2xl">
    <View className="flex-row items-center mb-2">
      <CallIcon size={16} strokeColor={primaryColor}/>
      <Text className="ml-2 font-semibold text-[#F51448] text-lg">Immediate Emergency</Text>
    </View>
    <Text className="text-gray-900 mb-3">Critical emergency services</Text>
    <View className="flex-row gap-3">
      <TouchableOpacity 
        onPress={() => onCall('999')}
        className={`flex-1 bg-[${primaryColor}] rounded-xl py-3.5 flex-row items-center justify-center`}
      >
        <CallIcon size={16} strokeColor='white'/>
        <Text className="ml-2 text-white font-semibold">Call 999</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => onCall('199')}
        className={`flex-1 bg-[${primaryColor}] rounded-xl py-3.5 flex-row items-center justify-center`}
      >
        <AmbulanceIcon strokeColor='white'/>
        <Text className="text-white font-semibold ml-2">Fire 199</Text>
      </TouchableOpacity>
    </View>
  </View>
);