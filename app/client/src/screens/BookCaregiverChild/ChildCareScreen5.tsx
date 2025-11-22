import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PageHeader from '@lib/ui/PageHeader'
import Button from '@lib/ui/Button'
import PaymentSuccessModal from './PaymentSuccessModal'

const ChildCareScreen5 = () => {
  const navigation = useNavigation()
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleConfirm = () => {
    setShowSuccessModal(true)
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <PageHeader title="Book Caregiver" back />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Description */}
        <Text className="text-md mb-4">
          Complete your booking with Experienced caregiver with 5+ years in
          elderly and child care
        </Text>

        {/* Section Title */}
        <Text className="mb-3 text-xl font-semibold">Review Your Booking</Text>

        {/* Service Info Card */}
        <View className="bg-foreground mb-5 rounded-xl border border-gray-200 p-4">
          <Text className="mb-3 text-base font-semibold">Service</Text>

          <View className="mb-2 flex-row justify-between">
            <Text className="text-gray-500">Date & Time</Text>
            <Text className="font-medium">31/12/2025; 22:32</Text>
          </View>

          <View className="mb-2 flex-row justify-between">
            <Text className="text-gray-500">Duration</Text>
            <Text className="font-medium">4 Hours</Text>
          </View>

          <View className="mb-2 flex-row justify-between">
            <Text className="text-gray-500">Location</Text>
            <Text className="font-medium">Gulshan, Dhaka</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Payment Method</Text>
            <Text className="font-medium">Bkash</Text>
          </View>
        </View>

        {/* Cost Summary Card */}
        <View className="bg-foreground mb-5 rounded-xl border border-gray-200 p-4">
          <View className="mb-2 flex-row justify-between">
            <Text className="text-gray-700">Service Cost</Text>
            <Text className="font-medium">৳350.00</Text>
          </View>

          <View className="mb-3 flex-row justify-between">
            <Text className="text-gray-700">Platform Fee (15%)</Text>
            <Text className="font-medium">৳50.00</Text>
          </View>

          <View className="mt-2 flex-row justify-between border-t border-gray-200 pt-3">
            <Text className="text-lg font-semibold">Total</Text>
            <Text className="text-primary text-lg font-semibold">৳400.00</Text>
          </View>
        </View>

        {/* Buttons */}
        <View className="mt-8 flex-row justify-between">
          <Button
            title="Back"
            className="border-primary mr-3 flex-1"
            onPress={() => navigation.goBack()}
          />

          <Button
            title="Confirm Payment"
            buttonPrimary
            className="flex-1"
            onPress={handleConfirm}
          />
        </View>
      </ScrollView>

      {/* Modal Popup */}
      {showSuccessModal && (
        <PaymentSuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </SafeAreaView>
  )
}

export default ChildCareScreen5
