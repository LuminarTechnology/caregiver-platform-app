import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MyBookingsScreen from '../screens/my-bookings/MyBookingsScreen'
import TrackBooking from '../screens/my-bookings/TrackBooking'
import CareDetailsScreen from '../screens/BookCaregiver/ChildCareDetailsScreen'
import ElderCareDetailsScreen from '../screens/BookCaregiver/ElderCareDetailsScreen'
import ServiceInfoScreen from '../screens/BookCaregiver/ServiceInfoScreen'
import EmergencyContactScreen from '../screens/BookCaregiver/EmergencyContactScreen'
import PaymentMethodScreen from '../screens/BookCaregiver/PaymentMethodScreen'
import CareReviewScreen from '../screens/BookCaregiver/CareReviewScreen'
import ChildCareDetailsScreen from '../screens/BookCaregiver/ChildCareDetailsScreen'

export type BookingsStackParamList = {
  BookingsMain: undefined
  ChildCareDetails: undefined
  ElderCareDetails: undefined
  ServiceInfo: undefined
  EmergencyContact: undefined
  PaymentMethod: undefined
  CareReview: undefined
  TrackBooking: undefined
  // Add booking detail screens here if needed
}

const Stack = createNativeStackNavigator<BookingsStackParamList>()

export default function BookingsStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookingsMain" component={MyBookingsScreen} />
      <Stack.Screen
        name="ChildCareDetails"
        component={ChildCareDetailsScreen}
      />
      <Stack.Screen
        name="ElderCareDetails"
        component={ElderCareDetailsScreen}
      />
      <Stack.Screen name="ServiceInfo" component={ServiceInfoScreen} />
      <Stack.Screen
        name="EmergencyContact"
        component={EmergencyContactScreen}
      />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="CareReview" component={CareReviewScreen} />
      <Stack.Screen name="TrackBooking" component={TrackBooking} />
    </Stack.Navigator>
  )
}
