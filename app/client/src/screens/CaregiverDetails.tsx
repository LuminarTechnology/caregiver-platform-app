import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@lib/ui/Button'
import {
  CalendarIcon,
  ClockIcon,
  LocationIcon,
  SheildCheckIcon,
  StarFilledIcon,
  ThreeDotIcon
} from '@lib/icons'
import CaregiverActionModal from '../components/caregiverDetails/CaregiverActionModal'
import PageHeader from '@lib/ui/PageHeader'

export const CaregiverDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => setIsModalVisible(true)
  const closeModal = () => setIsModalVisible(false)

  const handleReport = () => {
    console.log('Report clicked')
    closeModal()
  }

  const handleRate = () => {
    console.log('Rate clicked')
    closeModal()
  }

  const handleMessage = () => {
    console.log('Message clicked')
    closeModal()
  }
  const languages = ['Bangla', 'English']
  const certificates = [
    {
      title: 'Basic Caregiving Certificate',
      subtitle: 'Level: Basic',
      verified: true
    },
    {
      title: 'Child Safety & First Aid',
      subtitle: 'Level: Advanced',
      verified: true
    }
  ]

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageHeader
          title="Daniela C."
          variant="secondary"
          titlePosition="center"
          back
          rightIcon={{
            icon: <ThreeDotIcon width={16} height={16} fill="#292A27" />,
            onPress: openModal
          }}
        />

        {/* Banner Image */}
        <View className="h-56 w-full bg-gray-200">
          <Image
            source={require('../../assets/images/caregiver_details_cover_image.png')}
            className="h-full w-full"
            resizeMode="cover"
          />
        </View>

        {/* Caregiver Info Card */}
        <View className="border-b border-gray-100 p-4">
          <View className="flex-row items-start justify-between">
            <View>
              <Text className="text-2xl font-semibold text-gray-900">
                Daniela C.
              </Text>
              <View className="mt-1 flex-row items-center">
                <LocationIcon width={20} height={20} stroke="#111827" />
                <Text className="text-text-gray-900 ml-1">Gulshan, Dhaka</Text>
                <View className="ml-2 rounded-full bg-green-100 px-3 py-0.5">
                  <Text className="text-sm font-medium text-green-600">
                    Available
                  </Text>
                </View>
              </View>
            </View>

            <Text className="text-lg font-semibold text-gray-900">
              ৳180–৳250
              <Text className="text-sm text-gray-500">/hr</Text>
            </Text>
          </View>

          {/* Ratings & Stats */}
          <View className="mt-4 flex-row justify-around border-t border-gray-100 pt-3">
            <View className="items-center">
              <View className="flex-row items-center">
                <StarFilledIcon width={20} height={20} stroke="#FCBE1D" />
                <Text className="ml-2 text-[20px] font-semibold text-gray-900">
                  5.0
                </Text>
              </View>
              <Text className="text-xs text-gray-500">22 reviews</Text>
            </View>
            <View className="items-center">
              <View className="flex-row items-center">
                <SheildCheckIcon width={22} height={22} stroke="#A41845" />
                <Text className="ml-2 text-[20px] font-semibold text-gray-900">
                  4.8
                </Text>
              </View>
              <Text className="text-xs text-gray-500">Trust Score</Text>
            </View>
            <View className="items-center">
              <View className="flex-row items-center">
                <ClockIcon width={20} height={20} stroke="#111827" />
                <Text className="ml-2 text-[20px] font-semibold text-gray-900">
                  5
                </Text>
              </View>
              <Text className="text-xs text-gray-500">Years Experience</Text>
            </View>
          </View>
        </View>

        {/* About Section */}
        <View className="p-4">
          <Text className="mb-2 text-lg font-semibold text-gray-900">
            About
          </Text>
          <Text className="leading-6 text-gray-600">
            Hi! I'm a mom of two boys who are in elementary school and have been
            a stepmom to a tween and a teenager. I enjoy staying and keeping the
            little ones active and helping them reach their milestones. I have
            my own transportation, can cook, and help around the house if need
            be.
          </Text>
        </View>

        {/* Services Section */}
        <View className="border-t border-gray-100 p-4">
          <Text className="mb-2 text-lg font-semibold text-gray-900">
            Services
          </Text>
          <View className="bg-secondary rounded-xl p-3">
            <View className="flex-row justify-between py-1">
              <Text className="font-bold text-gray-700">Rates</Text>
            </View>
            <View className="flex-row justify-between py-1">
              <Text className="text-gray-700">Recurring jobs</Text>
              <Text className="font-medium text-gray-800">$20–$50/hour</Text>
            </View>
            <View className="flex-row justify-between py-1">
              <Text className="font-bold text-gray-700">One time jobs</Text>
            </View>
            <View className="flex-row justify-between py-1">
              <Text className="text-gray-700">Elderly Companion care</Text>
              <Text className="font-medium text-gray-800">$27/hour</Text>
            </View>
            <View className="flex-row justify-between py-1">
              <Text className="text-gray-700">Child Care & Supervision</Text>
              <Text className="font-medium text-gray-800">$30/hour</Text>
            </View>
          </View>
        </View>

        {/* Certifications Section */}
        <View className="border-t border-gray-100 p-4">
          <Text className="mb-2 text-lg font-semibold text-gray-900">
            Certifications
          </Text>
          {certificates.map((item, index) => (
            <View
              key={index}
              className="bg-secondary mb-3 flex-row items-center justify-between rounded-2xl p-4"
            >
              <View>
                <Text className="text-base font-semibold text-gray-900">
                  {item.title}
                </Text>
                <Text className="text-sm text-gray-500">{item.subtitle}</Text>
              </View>

              {item.verified && (
                <View className="bg-primary flex-row items-center rounded-full px-3 py-1">
                  <Text className="font-sm text-white">Verified</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Languages Section */}
        <View className="border-t border-gray-100 p-4">
          <Text className="mb-2 text-lg font-semibold text-gray-900">
            Languages
          </Text>
          <View className="mt-2 flex-row flex-wrap gap-2">
            {languages.map((lang, index) => (
              <View key={index} className="bg-secondary rounded-full px-4 py-2">
                <Text className="text-primary font-medium">{lang}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Book Button */}
        <View className="p-4">
          <Button
            title="Book Now"
            buttonPrimary
            onPress={() => console.log('pressed')}
          >
            <CalendarIcon width={20} height={20} stroke="#ffffff" />
          </Button>
        </View>

        {/* Modal */}
        <CaregiverActionModal
          visible={isModalVisible}
          onClose={closeModal}
          caregiverName="Daniela C."
          onReport={handleReport}
          onRate={handleRate}
          onMessage={handleMessage}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
