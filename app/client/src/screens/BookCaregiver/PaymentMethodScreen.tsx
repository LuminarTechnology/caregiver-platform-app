import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PaymentMethodCard from '@lib/ui/PaymentMethodCard'
import Button from '@lib/ui/Button'
import { useForm } from 'react-hook-form'
import PageHeader from '@lib/ui/PageHeader'

const BkashImage = require('../../../assets/images/bkash.png')
const NagadImage = require('../../../assets/images/nagad.png')
const CardImage = require('../../../assets/images/card.png')

type PaymentMethod = 'bkash' | 'nagad' | 'card'

type PaymentOption = {
  key: PaymentMethod
  image: any
  borderColor: string
  bgColor: string
  details: string[]
}

const paymentOptions: PaymentOption[] = [
  {
    key: 'bkash',
    image: BkashImage,
    borderColor: 'border-pink-200',
    bgColor: 'bg-pink-50',
    details: [
      "You'll be redirected to bKash app or USSD",
      'Enter your bKash PIN to complete payment',
      'Transaction fee: ৳5 (included in total)'
    ]
  },
  {
    key: 'nagad',
    image: NagadImage,
    borderColor: 'border-yellow-200',
    bgColor: 'bg-yellow-50',
    details: [
      "You'll be redirected to Nogod app or USSD",
      'Enter your Nogod PIN to complete payment',
      'Transaction fee: ৳5 (included in total)'
    ]
  },
  {
    key: 'card',
    image: CardImage,
    borderColor: 'border-gray-200',
    bgColor: 'bg-gray-50',
    details: [
      'Enter your card details to complete payment',
      'Transaction fee: ৳5 (included in total)'
    ]
  }
]

const PaymentMethodScreen = () => {
  const navigation = useNavigation()
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('bkash')
  const { control, handleSubmit } = useForm()
  const handleNext = (data: any) => {
    navigation.navigate('CareReview' as never)
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <PageHeader title="Book Caregiver" back />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Title */}
        <Text className="text-md mb-2">
          Complete your booking with Experienced caregiver with 5+ years in
          elderly and child care
        </Text>

        {/* Section Title */}
        <Text className="mb-3 mt-6 text-xl font-semibold">
          Choose Payment Method
        </Text>

        <View className="mb-5 flex-row justify-between">
          {paymentOptions.map((option, index) => {
            const isSelected = selectedMethod === option.key
            return (
              <View
                key={option.key}
                className={index !== paymentOptions.length - 1 ? 'mr-3' : ''}
              >
                <PaymentMethodCard
                  selected={isSelected}
                  onPress={() => setSelectedMethod(option.key)}
                  borderColor={option.borderColor}
                  bgColor={option.bgColor}
                >
                  <Image
                    source={option.image}
                    className="h-12 w-12 self-center"
                    resizeMode="contain"
                  />
                </PaymentMethodCard>
              </View>
            )
          })}
        </View>

        {/* Payment Details Box */}
        {paymentOptions
          .filter((option) => option.key === selectedMethod)
          .map((option) => (
            <View
              key={option.key}
              className={`mb-5 rounded-lg border p-4 ${
                option.key === 'bkash'
                  ? 'border-pink-200 bg-pink-50'
                  : option.key === 'nagad'
                  ? 'border-yellow-200 bg-yellow-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <Text className="mb-1 font-medium">
                {option.key === 'bkash'
                  ? 'bKash Payment'
                  : option.key === 'nagad'
                  ? 'Nagad Payment'
                  : 'Card Payment'}
              </Text>
              {option.details.map((text, idx) => (
                <Text key={idx} className="mb-1 text-gray-700">
                  • {text}
                </Text>
              ))}
            </View>
          ))}

        {/* Navigation Buttons */}
        <View className="mt-8 flex-row justify-between">
          <Button
            title="Back"
            className="border-primary mr-3 flex-1"
            onPress={() => navigation.goBack()}
          />
          <Button
            title="Next"
            buttonPrimary
            className="flex-1"
            onPress={handleSubmit(handleNext)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PaymentMethodScreen
