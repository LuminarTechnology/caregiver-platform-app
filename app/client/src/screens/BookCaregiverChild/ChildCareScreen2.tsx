import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import PageHeader from '../../../../../lib/src/ui/PageHeader'
import Button from '../../../../../lib/src/ui/Button'
import { PlusCircleIcon } from '@lib/icons'
import DatePickerField from '@lib/ui/DateField'
import { useNavigation } from '@react-navigation/native'

interface Child {
  id: number
  birthDate: string
}

const ChildCareScreen2 = () => {
  const navigation = useNavigation()
  const [children, setChildren] = useState<Child[]>([
    { id: Date.now(), birthDate: '' }
  ])
  const [isExpecting, setIsExpecting] = useState(false)
  const { control, handleSubmit } = useForm()

  const handleAddChild = () => {
    if (children.length < 4) {
      setChildren((prev) => [...prev, { id: Date.now(), birthDate: '' }])
    }
  }

  const handleRemoveChild = (id: number) => {
    setChildren((prev) => prev.filter((child) => child.id !== id))
  }

  const handleNext = (data: any) => {
    navigation.navigate('ChildCare3' as never)
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <PageHeader title="Book Caregiver" back />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        <View className="bg-foreground mt-6 rounded-2xl p-4">
          <Text className="text-defaultBlack mb-4 text-xl font-semibold">
            Who needs care?
          </Text>

          {children.map((child, index) => (
            <View key={child.id} className="mb-3">
              <View className="mb-1 flex-row items-center justify-between">
                <Text className="font-medium text-gray-700">
                  Child {index + 1}
                </Text>
                {children.length > 1 && (
                  <TouchableOpacity onPress={() => handleRemoveChild(child.id)}>
                    <Text className="text-primary font-semibold">Remove</Text>
                  </TouchableOpacity>
                )}
              </View>

              <Controller
                control={control}
                name={`child_${child.id}`}
                render={({ field: { onChange, value } }) => (
                  <DatePickerField
                    control={control}
                    name={`child_${child.id}`}
                    labelStyle={{ color: '#292A27' }}
                  />
                )}
              />
            </View>
          ))}

          {/* Add Another Child */}
          {children.length < 4 && (
            <TouchableOpacity
              onPress={handleAddChild}
              className="mt-1 flex-row items-center"
            >
              <View className="h-5 w-5 items-center justify-center rounded-full">
                <PlusCircleIcon width={20} height={20} stroke="#A41845" />
              </View>
              <Text className="text-primary ml-2 font-medium">
                Add another child
              </Text>
            </TouchableOpacity>
          )}

          {/* Expecting Checkbox */}
          <TouchableOpacity
            onPress={() => setIsExpecting(!isExpecting)}
            className="mt-4 flex-row items-center"
          >
            <View
              className={`mr-2 h-5 w-5 rounded border ${
                isExpecting
                  ? 'border-[#C91E51] bg-[#C91E51]'
                  : 'border-gray-400'
              }`}
            />
            <Text className="text-gray-800">I’m expecting</Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
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

export default ChildCareScreen2
