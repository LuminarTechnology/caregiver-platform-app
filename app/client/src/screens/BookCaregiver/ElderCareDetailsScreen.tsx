import React from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import PageHeader from '../../../../../lib/src/ui/PageHeader'
import Button from '../../../../../lib/src/ui/Button'
import DropdownField from '@lib/ui/DropdownField'
import { DownArrowIcon } from '@lib/icons'
import { useNavigation } from '@react-navigation/native'

type FormValues = {
  whoNeedsCare: string
  gender: string
  ageGroup: string
}

const ElderCareDetailsScreen = () => {
  const navigation = useNavigation()
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      whoNeedsCare: '',
      gender: '',
      ageGroup: ''
    }
  })

  const handleNext = (data: any) => {
    navigation.navigate('ServiceInfo' as never)
  }

  return (
    <View className="flex-1 bg-white">
      <PageHeader title="Book Caregiver" back />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        <Text className="mt-2 text-gray-600">
          Complete your booking with an experienced caregiver with 5+ years in
          elderly care
        </Text>

        <Text className="text-defaultBlack mb-2 mt-6 text-lg font-semibold">
          Elderly Care Details
        </Text>

        {/* Card */}
        <View className="bg-foreground space-y-4 rounded-2xl p-4">
          {/* Who Needs Care */}
          <DropdownField
            control={control}
            name="whoNeedsCare"
            label="Who Needs Care"
            placeholder="Select"
            options={[
              { label: 'Me', value: 'me' },
              { label: 'Parent', value: 'parent' },
              { label: 'Grandparent', value: 'grandparent' },
              { label: 'Relative', value: 'relative' }
            ]}
            rightIcon={<DownArrowIcon stroke="#90928B" />}
            labelStyle={{ color: '#292A27' }}
          />

          {/* Gender */}
          <DropdownField
            control={control}
            name="gender"
            label="Gender"
            placeholder="Select"
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' }
            ]}
            rightIcon={<DownArrowIcon stroke="#90928B" />}
            labelStyle={{ color: '#292A27' }}
          />

          {/* Age Group */}
          <DropdownField
            control={control}
            name="ageGroup"
            label="Age Group"
            placeholder="Select"
            options={[
              { label: '50s', value: '50s' },
              { label: '60s', value: '60s' },
              { label: '70s', value: '70s' },
              { label: '80s', value: '80s' }
            ]}
            rightIcon={<DownArrowIcon stroke="#90928B" />}
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
    </View>
  )
}

export default ElderCareDetailsScreen
