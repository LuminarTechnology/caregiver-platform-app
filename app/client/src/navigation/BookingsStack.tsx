import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MyBookingsScreen from '../screens/my-bookings/MyBookingsScreen'
import TrackBooking from '../screens/my-bookings/TrackBooking'
import ChildCareScreen from '../screens/BookCaregiverChild/ChildCareScreen'
import ChildCareScreen2 from '../screens/BookCaregiverChild/ChildCareScreen2'
import ChildCareScreen3 from '../screens/BookCaregiverChild/ChildCareScreen3'
import ChildCareScreen4 from '../screens/BookCaregiverChild/ChildCareScreen4'
import ChildCareScreen5 from '../screens/BookCaregiverChild/ChildCareScreen5'

export type BookingsStackParamList = {
  BookingsMain: undefined
  ChildCare: undefined
  ChildCare2: undefined
  ChildCare3: undefined
  ChildCare4: undefined
  ChildCare5: undefined
  TrackBooking: undefined
  // Add booking detail screens here if needed
}

const Stack = createNativeStackNavigator<BookingsStackParamList>()

export default function BookingsStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookingsMain" component={MyBookingsScreen} />
      <Stack.Screen name="ChildCare" component={ChildCareScreen} />
      <Stack.Screen name="ChildCare2" component={ChildCareScreen2} />
      <Stack.Screen name="ChildCare3" component={ChildCareScreen3} />
      <Stack.Screen name="ChildCare4" component={ChildCareScreen4} />
      <Stack.Screen name="ChildCare5" component={ChildCareScreen5} />
      <Stack.Screen name="TrackBooking" component={TrackBooking} />
    </Stack.Navigator>
  )
}
