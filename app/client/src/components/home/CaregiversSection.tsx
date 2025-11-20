import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { CaregiverCard, Caregiver } from './CaregiverCard'
import { ChildCareIcon, ForwardCircleIcon } from '@lib/icons'

interface CaregiversSectionProps {
  caregivers: Caregiver[]
  onCaregiverPress: (caregiver: Caregiver) => void
}

export const CaregiversSection: React.FC<CaregiversSectionProps> = ({
  caregivers,
  onCaregiverPress
}) => {
  return (
    <View className="mb-6 ">
      <TouchableOpacity
        onPress={() => {
          /* Navigate to all caregivers screen */
        }}
        className="mb-3 flex-row items-center justify-between px-4"
      >
        <View className="flex-1">
          <Text className="text-lg font-bold text-[#292A27]">
            Browse Background Checked Caregivers
          </Text>
          <Text className="text-[#292A27] opacity-60">near Gulshan, Dhaka</Text>
        </View>
        <ForwardCircleIcon />
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {caregivers.map((caregiver) => (
          <CaregiverCard
            key={caregiver.id}
            caregiver={caregiver}
            onPress={() => onCaregiverPress(caregiver)}
          />
        ))}
      </ScrollView>
    </View>
  )
}
