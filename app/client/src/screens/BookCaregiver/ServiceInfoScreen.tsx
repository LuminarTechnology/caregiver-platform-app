import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import PageHeader from '../../../../../lib/src/ui/PageHeader'
import Button from '../../../../../lib/src/ui/Button'
import InputField from '../../../../../lib/src/ui/InputField'
import DatePickerField from '../../../../../lib/src/ui/DateField'
import TimeField from '../../../../../lib/src/ui/TimeField'
import { DownArrowIcon, MailIcon, LocationIcon } from '@lib/icons'
import { useNavigation } from '@react-navigation/native'
import DropdownField from '@lib/ui/DropdownField'

type FormValues = {
  date: Date
  startTime: Date
  duration: string
  location: string
  email: string
  instructions: string
}

const ServiceInfoScreen = () => {
  const navigation = useNavigation()
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      date: new Date(),
      startTime: new Date(),
      duration: '4 Hours',
      location: '',
      email: '',
      instructions: ''
    }
  })

  const handleNext = (data: FormValues) => {
    navigation.navigate('CareDetails' as never)
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <PageHeader title="Book Caregiver" back />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        <Text className="mt-2 text-gray-600">
          Complete your booking with an experienced caregiver with 5+ years in
          elderly and child care
        </Text>

        <Text className="text-defaultBlack mb-2 mt-6 text-lg font-semibold">
          Service Details
        </Text>

        <View className="bg-foreground space-y-3 rounded-2xl p-4">
          {/* Date & Time */}
          <View className="flex-row justify-between">
            <View className="mr-3 flex-1">
              <DatePickerField
                control={control}
                name="date"
                label="Date"
                labelStyle={{ color: '#292A27' }}
              />
            </View>
            <View className="flex-1">
              <TimeField
                control={control}
                name="startTime"
                label="Start Time"
                labelStyle={{ color: '#292A27' }}
              />
            </View>
          </View>

          {/* Duration */}
          <DropdownField
            control={control}
            name="duration"
            label="Duration (hours)"
            placeholder="Select duration"
            options={[
              { label: '1 Hour', value: 1 },
              { label: '2 Hours', value: 2 },
              { label: '3 Hours', value: 3 },
              { label: '4 Hours', value: 4 }
            ]}
            rightIcon={<DownArrowIcon stroke="#90928B" />}
            className="mt-4"
          />

          {/* Location */}
          <InputField
            control={control}
            name="location"
            label="Location"
            placeholder="Enter your area or post code"
            rightIcon={<LocationIcon width={18} height={18} stroke="#90928B" />}
            className="bg-white"
            labelStyle={{ color: '#292A27' }}
          />

          {/* Email */}
          <InputField
            control={control}
            name="email"
            label="Your Email"
            placeholder="example@gmail.com"
            keyboardType="email-address"
            rightIcon={<MailIcon width={18} height={18} />}
            className="bg-white"
            labelStyle={{ color: '#292A27' }}
          />

          {/* Special Instructions */}
          <InputField
            control={control}
            name="instructions"
            label="Special Instructions"
            placeholder="Write here..."
            className="bg-white"
            style={{ height: 130, textAlignVertical: 'top' }}
            labelStyle={{ color: '#292A27' }}
          />
        </View>

        {/* Buttons */}
        <View className="mt-8 flex-row justify-between">
          <Button
            title="Cancel"
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

export default ServiceInfoScreen
