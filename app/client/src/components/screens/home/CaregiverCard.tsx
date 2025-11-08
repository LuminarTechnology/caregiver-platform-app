import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export interface Caregiver {
  id: number
  name: string
  location: string
  rate: string
  experience: string
}

interface CaregiverCardProps {
  caregiver: Caregiver
  onPress: () => void
}

export const CaregiverCard: React.FC<CaregiverCardProps> = ({
  caregiver,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} className="mr-4 w-32">
      <View className="mb-2 h-56 w-32 justify-center overflow-hidden rounded-2xl bg-[#FFF7F9]">
        <View className="mb-2 h-28 w-28 mx-auto items-center justify-center overflow-hidden rounded-2xl bg-white">
          <Image
            source={require('../../../../assets/images/caregiver.png')}
            className="h-full w-full"
            resizeMode="cover"
          />
        </View>
        <View className='px-2'>
          <Text className="mb-1 font-semibold text-[#292A27]">
            {caregiver.name}
          </Text>
          <Text className="mb-1 text-xs text-[#292A27] opacity-60">
            {caregiver.location}
          </Text>
          <Text className="mb-1 text-xs font-medium text-[#292A27]">
            From ৳{caregiver.rate}
          </Text>
          <Text className="text-xs text-[#292A27] opacity-60">
            {caregiver.experience}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
