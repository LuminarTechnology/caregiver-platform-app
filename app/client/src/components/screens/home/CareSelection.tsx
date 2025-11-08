import { CheckedRadioIcon, ChildCareIcon, ElderlyCareIcon, UncheckedRadioIcon } from '@lib/icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CareSelectionProps {
  selectedCare: 'child' | 'elderly';
  onSelectCare: (care: 'child' | 'elderly') => void;
}

export const CareSelection: React.FC<CareSelectionProps> = ({ selectedCare, onSelectCare }) => {
  return (
    <View className="px-4 mb-6">
      <Text className="text-base font-semibold text-[#292A27] mb-3">
        Select your best Care
      </Text>
      <View className="flex-row gap-3">
        <TouchableOpacity
          onPress={() => onSelectCare('child')}
          className={`flex-1 flex-row items-center justify-between px-4 py-3 rounded-2xl ${
            selectedCare === 'child' ? 'bg-[#FFF7F9] border-2 border-[#A41845]' : 'bg-white border border-gray-200'
          }`}
        >
          <View className="flex-row items-center gap-2">
            <View className="w-8 h-8 rounded-full bg-[#FFF7F9] items-center justify-center">
              <ChildCareIcon/>
            </View>
            <Text className={`text-sm font-medium ${selectedCare === 'child' ? 'text-[#A41845]' : 'text-[#292A27]'}`}>
              Child Care
            </Text>
          </View>
          <View>
            {selectedCare === 'child' ? <CheckedRadioIcon/> : <UncheckedRadioIcon/>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onSelectCare('elderly')}
          className={`flex-1 flex-row items-center justify-between px-4 py-3 rounded-xl ${
            selectedCare === 'elderly' ? 'bg-[#FFF7F9] border-2 border-[#A41845]' : 'bg-white border border-gray-200'
          }`}
        >
          <View className="flex-row items-center gap-2">
            <View className="w-8 h-8 rounded-full bg-[#FFF7F9] items-center justify-center">
              <ElderlyCareIcon/>
            </View>
            <Text className={`text-sm font-medium ${selectedCare === 'elderly' ? 'text-[#A41845]' : 'text-[#292A27]'}`}>
              Elderly care
            </Text>
          </View>
          <View>
            {selectedCare === 'elderly' ? <CheckedRadioIcon/> : <UncheckedRadioIcon/>}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};