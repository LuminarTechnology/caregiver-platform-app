import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MyBookingsScreen from '../screens/MyBookings'

export type BookingsStackParamList = {
  BookingsMain: undefined
  // Add booking detail screens here if needed
}

const Stack = createNativeStackNavigator<BookingsStackParamList>()

export default function BookingsStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookingsMain" component={MyBookingsScreen} />
    </Stack.Navigator>
  )
}
