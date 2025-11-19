import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ServiceCard from '../components/onboarding/ServiceCard'

export default function ServicesScreen() {
  const navigation = useNavigation()

  const handleSelect = () => {
    navigation.navigate('Onboarding' as never)
    // navigation.navigate('ChildCare' as never)
    // navigation.navigate('Main' as never)
  }

  return (
    <ScrollView className="flex-1 bg-white px-4 pb-10 pt-20">
      {/* Header */}
      <View className="mb-8">
        <View className="flex-row items-center">
          <View className="flex h-16 w-16 items-center justify-center rounded-full bg-[#A41845]">
            <Ionicons name="pulse" size={28} color="white" />
          </View>
          <View className="ml-4">
            <Text className="text-xl font-bold text-[#A41845]">
              HealthTech Solutions
            </Text>
            <Text className="text-base text-gray-500">
              Comprehensive healthcare services
            </Text>
          </View>
        </View>

        {/* Divider Line */}
        <View className="mt-4 h-[1px] w-full bg-gray-200" />
      </View>

      {/* Subtitle */}
      <Text className="mb-4 text-lg font-semibold text-gray-700">
        Get started for free
      </Text>
      <Text className="mb-6 text-base text-gray-500">
        Select a service to continue
      </Text>

      {/* Services */}
      <View className="space-y-6">
        <ServiceCard
          icon="heart-outline"
          title="Caregiver.com"
          description="On-demand certified caregivers for elderly, children, and post-operative care."
          users="5,432+ Users"
          status="Active"
          onPress={handleSelect}
          className="mb-4"
        />

        <ServiceCard
          icon="water-outline"
          title="Blood Donation Network"
          description="Connect blood donors with patients and hospitals across Bangladesh."
          users="0 Users"
          status="Coming Soon"
          verifiedText="In Development"
          disabled
        />
      </View>
    </ScrollView>
  )
}
