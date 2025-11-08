import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CrossIcon, WarningIcon } from '@lib/icons';

export const ModalHeader = ({ onClose }) => (
  <View className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100">
    <View className="flex-row items-center flex-1">
      <View className="w-10 h-10 bg-red-50 rounded-full items-center justify-center mr-3">
        <WarningIcon/>
      </View>
      <View className="flex-1">
        <Text className="text-xl font-semibold text-primary">Emergency Support</Text>
        <Text className="text-gray-800 mt-1 leading-6">Client emergency assistance - Choose your contact option</Text>
      </View>
    </View>
    <TouchableOpacity onPress={onClose} className="w-8 h-8 items-center justify-center">
      <CrossIcon/>
    </TouchableOpacity>
  </View>
);