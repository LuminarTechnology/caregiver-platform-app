import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageHeader from '../../components/common/PageHeader'
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import {
  ClockIcon,
  LocationIcon,
  MessageRoseIcon,
  PhoneIcon,
  PlusIcon
} from '@lib/icons'
import Button from '@lib/ui/Button'

const TrackBooking = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <PageHeader
        title="Booking"
        back={true}
        className="text-defaultBlack bg-none text-base"
      />
      {/* Status Header */}
      <View className="mb-3 flex-row items-center justify-between bg-white px-4">
        <Text className="text-lg font-semibold">Status</Text>
        <View className="rounded-full bg-yellow-100 px-3 py-1">
          <Text className="text-xs font-medium text-yellow-700">
            IN-PROGRESS
          </Text>
        </View>
      </View>

      <ScrollView
        className="bg-secondary flex-1"
        contentContainerStyle={{
          paddingTop: 16,
          paddingHorizontal: 16,
          paddingBottom: 40
        }}
      >
        {/* Live Location Card */}
        <View className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
          {/* Title */}
          <View className="mb-2 flex-row items-center gap-2">
            <LocationIcon width={20} height={20} />
            <Text className="text-base font-normal">Live Location</Text>
          </View>

          {/* Map View */}
          <View className="h-48 w-full overflow-hidden rounded-xl"></View>

          <Text className="mt-1 text-xs text-gray-500">
            Last updated: 12:40:16 AM
          </Text>

          {/* Distance Row */}
          <View className="mt-2 flex-row justify-between">
            <Text className="text-sm text-gray-500">Distance from you:</Text>
            <Text className="text-sm font-medium text-gray-700">~0.2 km</Text>
          </View>
        </View>

        {/* Caregiver Card */}
        <View className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
          <Text className="text-defaultBlack mb-3 text-base font-medium">
            Your Caregiver
          </Text>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-start">
              <Image
                source={{ uri: 'https://i.pravatar.cc/300?img=5' }}
                className="mr-3 h-14 w-14 rounded-full"
              />
              <View>
                <Text className="text-defaultBlack text-base font-semibold">
                  Savannah Nguyen
                </Text>
                <Text className="pt-1.5 text-sm text-gray-600">
                  Child Care • 10/19/2025
                </Text>
              </View>
            </View>

            {/* Call + Chat icons */}
            <View className="flex-row gap-4">
              <PhoneIcon width={24} height={24} stroke="#A41845" />
              <MessageRoseIcon width={24} height={24} />
            </View>
          </View>
        </View>

        {/* Service Progress Card */}
        <View className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
          <Text className="text-defaultBlack text-base font-medium">
            Service Progress
          </Text>

          <View className="bg-secondary mb-2 mt-4 flex-row items-center gap-3 rounded-2xl p-4">
            <View className="h-20 w-20 rounded-full bg-white p-4">
              <ClockIcon width={24} height={24} stroke={'#000'} />
            </View>
            <View>
              <Text className="text-defaultBlack text-base font-medium">
                Service in progress
              </Text>
              <Text className="text-xs text-gray-500">
                Last updated: 12:40:16 AM
              </Text>
            </View>
          </View>

          {/* Progress */}
          <View className="mb-2 mt-4 flex-row items-center justify-between">
            <Text className="mb-1 text-gray-600">Progress</Text>
            <Text className="mt text-right text-sm">25%</Text>
          </View>

          <ProgressBar
            progress={0.25}
            color={'#A41845'}
            style={{ height: 6, backgroundColor: '#E5E7EB', borderRadius: 6 }}
          />

          {/* Labels */}
          <View className="mt-2 flex-row justify-between">
            <Text className="text-xs text-[#666]">Started</Text>
            <Text className="text-xs text-[#666]">In Progress</Text>
            <Text className="text-xs text-[#666]">Completed</Text>
          </View>

          {/* Extend Service Button */}
          <Button
            className="bg-foreground mt-4 w-full"
            title="Extend Service"
            buttonSecondary
            // eslint-disable-next-line no-console
            onPress={() => console.log('hello')}
            leftIcon={<PlusIcon />}
          />
        </View>

        <View className="flex-1 flex-col gap-4 bg-[#F6F6F6]">
          {/* Payment & Escrow Card */}
          <View className="mb-5 rounded-2xl bg-white p-5 shadow-sm">
            <Text className="mb-4 text-lg font-semibold">
              Payment & Escrow Details
            </Text>

            {/* Two Amount Boxes */}
            <View className="mb-4 flex-row justify-between">
              {/* Total Amount */}
              <View className="w-[48%] rounded-xl bg-gray-100 p-4">
                <Text className="text-sm text-gray-600">Total Amount</Text>
                <Text className="mt-1 text-xl font-semibold">৳720</Text>
                <Text className="mt-1 text-xs text-gray-500">
                  Held in Escrow
                </Text>
              </View>

              {/* Caregiver Receives */}
              <View className="w-[48%] rounded-xl bg-gray-100 p-4">
                <Text className="text-sm text-gray-600">
                  Caregiver Receives
                </Text>
                <Text className="mt-1 text-xl font-semibold">৳612</Text>
                <Text className="mt-1 text-xs text-gray-500">85% of total</Text>
              </View>
            </View>

            {/* Platform Fee */}
            <View className="mb-3 flex-row items-center justify-between rounded-xl bg-gray-100 p-4">
              <Text className="text-sm text-gray-600">Platform Fee (15%)</Text>
              <Text className="font-medium text-gray-800">৳108</Text>
            </View>

            {/* Bullet Points */}
            <View className="mt-3 space-y-1">
              <Text className="text-sm text-gray-600">
                • Payment is held securely until service completion
              </Text>
              <Text className="text-sm text-gray-600">
                • Automatic release to caregiver after successful service
              </Text>
              <Text className="text-sm text-gray-600">
                • Full refund available for cancellations before service starts
              </Text>
              <Text className="text-sm text-gray-600">
                • Dispute resolution available through admin arbitration
              </Text>
            </View>
          </View>

          {/* Booking Details Card */}
          <View className="mb-5 rounded-2xl bg-white p-5 shadow-sm">
            <Text className="mb-4 text-lg font-semibold">Booking Details</Text>

            <View className="mb-3">
              <View className="mb-2 flex-row justify-between">
                <Text className="text-gray-600">Service</Text>
                <Text className="font-medium text-gray-900">
                  Elderly Companion Care
                </Text>
              </View>

              <View className="mb-2 flex-row justify-between">
                <Text className="text-gray-600">Duration</Text>
                <Text className="font-medium text-gray-900">4 hours</Text>
              </View>

              <View className="mb-2 flex-row justify-between">
                <Text className="text-gray-600">Date</Text>
                <Text className="font-medium text-gray-900">10/19/2025</Text>
              </View>

              <View className="mb-2 flex-row justify-between">
                <Text className="text-gray-600">Start Time</Text>
                <Text className="font-medium text-gray-900">09:00 AM</Text>
              </View>

              <View className="mt-3 flex-row justify-between">
                <Text className="font-semibold text-gray-900">
                  Total Amount
                </Text>
                <Text className="font-semibold text-pink-600">৳720</Text>
              </View>
            </View>
          </View>

          {/* Bottom Buttons */}
          <View className="flex flex-row items-center justify-center gap-4">
            <Button
              className="flex-1"
              title="Emergency SOS"
              buttonSecondary
              // eslint-disable-next-line no-console
              onPress={() => console.log('Help Pressed')}
            />
            <Button
              className="flex-1"
              title="Mark as Complete"
              buttonPrimary
              // eslint-disable-next-line no-console
              onPress={() => console.log('Help Pressed')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TrackBooking
