import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../screens/Home'
import ServicesScreen from '../screens/SelectServices'
import { CaregiverDetails } from '../screens/CaregiverDetails'

export type HomeStackParamList = {
  HomeMain: undefined
  Service: undefined
  Caregiver: { caregiverId?: string } | undefined
}

const Stack = createNativeStackNavigator<HomeStackParamList>()

export default function HomeStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Service" component={ServicesScreen} />
      <Stack.Screen
        name="Caregiver"
        component={CaregiverDetails}
        options={{ presentation: 'card' }}
      />
    </Stack.Navigator>
  )
}
