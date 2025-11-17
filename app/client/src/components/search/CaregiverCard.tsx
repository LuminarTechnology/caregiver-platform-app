import { View, Text } from 'react-native'
import React from 'react'
import { LocationIcon, StarFilled, VerifiedIcon } from '@lib/icons'

type CaregiverCardProps = {
  caregiver: {
    id: number
    name: string
    location: string
    rating: number
    reviews: number
    pricePerHour: number
    yearsOfExperience: number
    isVerified: boolean
    isAvailable: boolean
  }
}

const CaregiverCard = ({ caregiver }: CaregiverCardProps) => {
  return (
    <View className="flex-1 flex-row items-start gap-4 rounded-xl bg-white p-4 shadow-md">
      {/* Left: Avatar */}
      <View className="border-muted h-20 w-20 rounded-2xl border-[0.5px]"></View>

      {/* Middle: Info */}
      <View className="flex-1">
        <View className="flex-row items-start justify-between">
          <View>
            <Text className="text-defaultBlack truncate text-lg font-medium">
              {caregiver.name}
            </Text>
            <View className="flex-row items-center">
              <View className="scale-75">
                <LocationIcon />
              </View>
              <Text className="text-subBlack text-sm">
                {caregiver.location}
              </Text>
            </View>
            <View className="mt-1 flex-row items-center gap-2">
              <StarFilled />
              <Text className="text-subBlack text-sm">
                {caregiver.rating} ({caregiver.reviews} reviews)
              </Text>
            </View>
          </View>
          {caregiver.isVerified ? (
            <View className="bg-primary/10 flex-row items-center gap-2 rounded-lg px-3 py-1">
              <VerifiedIcon />
              <Text className="text-primary text-sm font-medium">Verified</Text>
            </View>
          ) : (
            ''
          )}
        </View>
        <View className="mt-2 flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Text className="text-primary text-lg font-semibold">৳35/hr</Text>
            <Text className="text-subBlack text-sm">• 10 yrs exp</Text>
          </View>
          {caregiver.isAvailable ? (
            <View className="rounded-md bg-green-100 px-3 py-1">
              <Text className="font-medium text-green-700">Available</Text>
            </View>
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  )
}

export default CaregiverCard
