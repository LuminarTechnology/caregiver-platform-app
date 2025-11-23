import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TrackBooking from '../screens/my-bookings/TrackBooking'
import MyBookingsScreen from '../screens/my-bookings/MyBookingsScreen'
import type { MyBookingsData } from '../screens/my-bookings/MyBookingsScreen'

export type MyBookingsStackParamList = {
  MyBookings: undefined
  TrackBooking: { bookings: MyBookingsData } | undefined
}

const Stack = createNativeStackNavigator<MyBookingsStackParamList>()

export default function MyBookingsStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyBookings" component={MyBookingsScreen} />
      <Stack.Screen name="TrackBooking" component={TrackBooking} />
    </Stack.Navigator>
  )
}
