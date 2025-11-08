import { CallIcon } from '@lib/icons';
import UserIcon from '@lib/icons/UserIcon';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const EmergencyContacts = () => (
  <View className="px-5 py-4 bg-secondary mt-4 rounded-2xl border-2 border-gray-100">
    <View className="flex-row items-center mb-2">
      <UserIcon/>
      <Text className="ml-2 font-semibold text-gray-900 text-lg">Emergency Contacts</Text>
    </View>
    <Text className="text-gray-600 mb-4">Your personal emergency contacts</Text>
    
    <View className="bg-white rounded-2xl p-4 shadow-sm">
      <View className="flex-row justify-between items-start mb-3">
        <View>
          <Text className="text-base font-medium text-gray-900">Sarah Ahmed</Text>
          <Text className="text-sm text-gray-600 mt-1">+880171234567</Text>
        </View>
        <View className="bg-secondary px-2.5 py-1 rounded-md">
          <Text className="text-xs text-gray-900 font-semibold">Sister</Text>
        </View>
      </View>
      <TouchableOpacity className={`border-2 border-primary rounded-2xl py-3 flex-row items-center justify-center`}>
        <CallIcon size={16} strokeColor='#A41845'/>
        <Text className="ml-2 text-primary font-semibold">Call</Text>
      </TouchableOpacity>
    </View>
  </View>
);