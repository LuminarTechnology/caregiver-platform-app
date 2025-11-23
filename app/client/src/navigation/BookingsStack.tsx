import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MyBookingsScreen from '../screens/my-bookings/MyBookingsScreen'
import TrackBooking from '../screens/my-bookings/TrackBooking'

export type BookingsStackParamList = {
  BookingsMain: undefined
  TrackBooking: undefined
  // Add booking detail screens here if needed
}

const Stack = createNativeStackNavigator<BookingsStackParamList>()

export default function BookingsStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookingsMain" component={MyBookingsScreen} />
      <Stack.Screen name="TrackBooking" component={TrackBooking} />
    </Stack.Navigator>
  )
}
