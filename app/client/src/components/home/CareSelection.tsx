import {
  CheckedRadioIcon,
  ChildCareIcon,
  ElderlyCareIcon,
  UncheckedRadioIcon
} from '@lib/icons'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

interface CareSelectionProps {
  selectedCare: 'child' | 'elderly'
  onSelectCare: (care: 'child' | 'elderly') => void
}

export const CareSelection: React.FC<CareSelectionProps> = ({
  selectedCare,
  onSelectCare
}) => {
  return (
    <View className="mb-6 px-4">
      <Text className="mb-3 text-base font-semibold text-[#292A27]">
        Select your best Care
      </Text>
      <View className="flex-row gap-3">
        <TouchableOpacity
          onPress={() => onSelectCare('child')}
          className={`flex-1 flex-row items-center justify-between rounded-2xl px-4 py-3 ${
            selectedCare === 'child'
              ? 'border-2 border-[#A41845] bg-[#FFF7F9]'
              : 'border border-gray-200 bg-white'
          }`}
        >
          <View className="flex-row items-center gap-2">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-[#FFF7F9]">
              <ChildCareIcon />
            </View>
            <Text
              className={`text-sm font-medium ${
                selectedCare === 'child' ? 'text-[#A41845]' : 'text-[#292A27]'
              }`}
            >
              Child Care
            </Text>
          </View>
          <View>
            {selectedCare === 'child' ? (
              <CheckedRadioIcon />
            ) : (
              <UncheckedRadioIcon />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onSelectCare('elderly')}
          className={`flex-1 flex-row items-center justify-between rounded-xl px-4 py-3 ${
            selectedCare === 'elderly'
              ? 'border-2 border-[#A41845] bg-[#FFF7F9]'
              : 'border border-gray-200 bg-white'
          }`}
        >
          <View className="flex-row items-center gap-2">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-[#FFF7F9]">
              <ElderlyCareIcon />
            </View>
            <Text
              className={`text-sm font-medium ${
                selectedCare === 'elderly' ? 'text-[#A41845]' : 'text-[#292A27]'
              }`}
            >
              Elderly care
            </Text>
          </View>
          <View>
            {selectedCare === 'elderly' ? (
              <CheckedRadioIcon />
            ) : (
              <UncheckedRadioIcon />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
