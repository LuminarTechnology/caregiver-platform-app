import { CrossCircleIcon } from '@lib/icons'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const PaymentSuccessModal = ({ onClose }) => {
  return (
    <View className="absolute inset-0 z-50 items-center justify-center bg-black/40 px-6">
      <View className="relative w-full items-center rounded-2xl bg-white p-6">
        <TouchableOpacity onPress={onClose} className="absolute right-4 top-4">
          <CrossCircleIcon width={24} height={24} />
        </TouchableOpacity>

        <Image
          source={require('../../../assets/images/fireworks.gif')}
          style={{ width: 110, height: 110, marginBottom: 10 }}
        />

        <Text className="mt-2 text-xl font-bold">Congratulations!</Text>

        <Text className="mb-4 mt-2 px-2 text-center text-gray-600">
          Your payment has been successfully processed!
        </Text>
      </View>
    </View>
  )
}

export default PaymentSuccessModal
