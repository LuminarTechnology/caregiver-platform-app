import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CrossIcon } from '@lib/icons';

export const ModalHeader = ({ onClose }) => (
  <View className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
    <View className="flex-row items-center flex-1">
      <View className="w-10 h-10 bg-red-50 rounded-full items-center justify-center mr-3">
        <Text className="text-xl">⚠️</Text>
      </View>
      <View className="flex-1">
        <Text className="text-lg font-semibold text-gray-900">Emergency Support</Text>
        <Text className="text-xs text-gray-500 mt-1">Client emergency assistance - Choose your contact option</Text>
      </View>
    </View>
    <TouchableOpacity onPress={onClose} className="w-8 h-8 items-center justify-center">
      <CrossIcon/>
    </TouchableOpacity>
  </View>
);