import { CallIcon } from '@lib/icons';
import UserIcon from '@lib/icons/UserIcon';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const EmergencyContacts = () => (
  <View className="px-5 py-4 bg-gray-50">
    <View className="flex-row items-center mb-3">
      <UserIcon/>
      <Text className="ml-2 font-semibold text-gray-900">Emergency Contacts</Text>
    </View>
    <Text className="text-sm text-gray-600 mb-4">Your personal emergency contacts</Text>
    
    <View className="bg-white rounded-2xl p-4 shadow-sm">
      <View className="flex-row justify-between items-start mb-3">
        <View>
          <Text className="text-base font-medium text-gray-900">Sarah Ahmed</Text>
          <Text className="text-sm text-gray-600 mt-1">+880171234567</Text>
        </View>
        <View className="bg-blue-50 px-2.5 py-1 rounded-md">
          <Text className="text-xs text-blue-600 font-semibold">Sister</Text>
        </View>
      </View>
      <TouchableOpacity className="border-2 border-[#F51448] rounded-xl py-3 flex-row items-center justify-center">
        <CallIcon/>
        <Text className="ml-2 text-[#F51448] font-semibold">Call</Text>
      </TouchableOpacity>
    </View>
  </View>
);