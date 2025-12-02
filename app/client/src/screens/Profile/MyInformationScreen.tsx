import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { useForm } from 'react-hook-form'
import InputField from '../../../../../lib/src/ui/InputField'
import PageHeader from '../../../../../lib/src/ui/PageHeader'

const MyInformationScreen = () => {
  const { control } = useForm({
    defaultValues: {
      firstName: 'Safiul',
      lastName: 'Alam',
      phone: '+880 17847 74530',
      email: 'example@gmail.com',
      dob: '31/12/1999',
      gender: 'Male',
      address1: 'House 23, Road 7',
      address2: 'Dhanmondi',
      city: 'Dhaka',
      state: 'Dhaka Division',
      zip: '1205'
    }
  })

  const [isEditing, setIsEditing] = useState(false)

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <PageHeader
        title="My Information"
        variant="secondary"
        back
        rightIcon={{
          icon: (
            <Text className="text-primary font-semibold">
              {isEditing ? 'Save' : 'Edit'}
            </Text>
          ),
          onPress: () => setIsEditing(!isEditing)
        }}
      />

      <ScrollView
        className="px-4"
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {/* Name */}
        <View className="flex-row justify-between">
          <View className="mr-2 flex-1">
            <InputField
              control={control}
              name="firstName"
              placeholder="First Name"
              label="First Name"
              fullClassName="mb-4"
            />
          </View>
          <View className="ml-2 flex-1">
            <InputField
              control={control}
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
              fullClassName="mb-4"
            />
          </View>
        </View>

        {/* Phone */}
        <InputField
          control={control}
          name="phone"
          placeholder="Primary Phone"
          label="Primary Phone"
          fullClassName="mb-4"
        />

        {/* Email */}
        <InputField
          control={control}
          name="email"
          placeholder="Email"
          label="Email"
          fullClassName="mb-4"
        />

        {/* DOB & Gender */}
        <InputField
          control={control}
          name="dob"
          placeholder="Date of Birth"
          label="Date of Birth"
          fullClassName="mb-4"
        />

        <InputField
          control={control}
          name="gender"
          placeholder="Gender"
          label="Gender"
          fullClassName="mb-4"
        />

        {/* Address */}
        <InputField
          control={control}
          name="address1"
          placeholder="Address Line 1"
          label="Address Line 1"
          fullClassName="mb-4"
        />
        <InputField
          control={control}
          name="address2"
          placeholder="Address Line 2"
          label="Address Line 2"
          fullClassName="mb-4"
        />

        {/* City */}
        <InputField
          control={control}
          name="city"
          placeholder="City"
          label="City"
          fullClassName="mb-4"
        />

        {/* State & Zip */}
        <View className="flex-row justify-between">
          <View className="mr-2 flex-1">
            <InputField
              control={control}
              name="state"
              placeholder="State / Division"
              label="State / Division"
              fullClassName="mb-4"
            />
          </View>
          <View className="ml-2 flex-1">
            <InputField
              control={control}
              name="zip"
              placeholder="Zip Code"
              label="Zip Code"
              fullClassName="mb-4"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MyInformationScreen
