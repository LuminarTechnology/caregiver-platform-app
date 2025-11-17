import { CallIcon } from '@lib/icons'
import UserIcon from '@lib/icons/UserIcon'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const EmergencyContacts = () => (
  <View className="mt-4 rounded-2xl border-2 border-gray-100 bg-[#FFF7F9] px-5 py-4">
    <View className="mb-2 flex-row items-center">
      <UserIcon />
      <Text className="ml-2 text-lg font-semibold text-gray-900">
        Emergency Contacts
      </Text>
    </View>
    <Text className="mb-4 text-gray-600">Your personal emergency contacts</Text>

    <View className="rounded-2xl bg-white p-4 shadow-sm">
      <View className="mb-3 flex-row items-start justify-between">
        <View>
          <Text className="text-base font-medium text-gray-900">
            Sarah Ahmed
          </Text>
          <Text className="mt-1 text-sm text-gray-600">+880171234567</Text>
        </View>
        <View className="bg-secondary rounded-md px-2.5 py-1">
          <Text className="text-xs font-semibold text-gray-900">Sister</Text>
        </View>
      </View>
      <TouchableOpacity
        className={`border-primary flex-row items-center justify-center rounded-2xl border-2 bg-[#FFF7F9] py-3`}
      >
        <CallIcon size={16} strokeColor="#A41845" />
        <Text className="text-primary ml-2 font-semibold">Call</Text>
      </TouchableOpacity>
    </View>
  </View>
)
