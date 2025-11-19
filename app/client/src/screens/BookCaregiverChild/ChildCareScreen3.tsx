import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { useForm } from 'react-hook-form'
import PageHeader from '../../../../../lib/src/ui/PageHeader'
import Button from '../../../../../lib/src/ui/Button'
import InputField from '../../../../../lib/src/ui/InputField'
import { useNavigation } from '@react-navigation/native'
import { PhoneIcon, PlusCircleIcon, DownArrowIcon } from '@lib/icons'
import DropdownField from '@lib/ui/DropdownField'

interface Contact {
  id: number
}

const ChildCareScreen3 = () => {
  const navigation = useNavigation()
  const { control, handleSubmit } = useForm()
  const [contacts, setContacts] = useState<Contact[]>([
    { id: Date.now() },
    { id: Date.now() + 1 }
  ])

  const handleAddContact = () => {
    if (contacts.length < 3) {
      setContacts((prev) => [...prev, { id: Date.now() }])
    }
  }

  const handleRemoveContact = (id: number) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id))
  }

  const handleNext = (data: any) => {
    navigation.navigate('ChildCare4' as never)
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <PageHeader title="Book Caregiver" back />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        <Text className="mt-2 text-gray-600">
          Please provide two emergency contacts for safety purposes
        </Text>

        <Text className="text-defaultBlack mb-2 mt-6 text-lg font-semibold">
          Emergency Contacts
        </Text>

        {/* Dynamic Contact Cards */}
        {contacts.map((contact, index) => (
          <View
            key={contact.id}
            className="bg-foreground mt-4 space-y-3 rounded-2xl p-4"
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-primary font-semibold">
                {index === 0
                  ? 'Primary Emergency Contact'
                  : index === 1
                  ? 'Secondary Emergency Contact'
                  : `Emergency Contact ${index + 1}`}
              </Text>

              {contacts.length > 2 && (
                <TouchableOpacity
                  onPress={() => handleRemoveContact(contact.id)}
                >
                  <Text>Remove</Text>
                </TouchableOpacity>
              )}
            </View>

            <InputField
              control={control}
              name={`contact_name_${contact.id}`}
              label="Name"
              placeholder="Contact name"
              className="bg-white"
              labelStyle={{ color: '#292A27' }}
            />

            <InputField
              control={control}
              name={`contact_phone_${contact.id}`}
              label="Phone"
              placeholder="+880 1318 174888"
              keyboardType="phone-pad"
              className="bg-white"
              rightIcon={<PhoneIcon width={18} height={18} stroke="#90928B" />}
              labelStyle={{ color: '#292A27' }}
            />

            <DropdownField
              control={control}
              name={`contact_relation_${contact.id}`}
              label="Relationship"
              placeholder="e.g., Spouse, Child, Friend"
              options={[
                { label: 'Spouse', value: 'spouse' },
                { label: 'Child', value: 'child' },
                { label: 'Friend', value: 'friend' },
                { label: 'Parent', value: 'parent' }
              ]}
              rightIcon={
                <DownArrowIcon width={14} height={14} stroke="#90928B" />
              }
              labelStyle={{ color: '#292A27' }}
              className="bg-white"
            />
          </View>
        ))}

        {/* Add Contact Button */}
        {contacts.length < 3 && (
          <TouchableOpacity
            onPress={handleAddContact}
            className="mt-4 flex-row items-center"
          >
            <PlusCircleIcon width={20} height={20} stroke="#A41845" />
            <Text className="text-primary ml-2 font-medium">
              Add emergency contact
            </Text>
          </TouchableOpacity>
        )}

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

export default ChildCareScreen3
