import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SearchScreen from '../screens/Search'
import { CaregiverDetails } from '../screens/CaregiverDetails'

export type SearchStackParamList = {
  SearchMain: undefined
  Caregiver: { caregiverId?: string } | undefined
}

const Stack = createNativeStackNavigator<SearchStackParamList>()

export default function SearchStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchMain" component={SearchScreen} />
      <Stack.Screen
        name="Caregiver"
        component={CaregiverDetails}
        options={{ presentation: 'card' }}
      />
    </Stack.Navigator>
  )
}
