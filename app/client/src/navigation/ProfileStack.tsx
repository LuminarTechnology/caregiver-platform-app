import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ProfileScreen from '../screens/Profile'

export type ProfileStackParamList = {
  ProfileMain: undefined
  // Add profile-related screens here (EditProfile, Settings, etc.)
}

const Stack = createNativeStackNavigator<ProfileStackParamList>()

export default function ProfileStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
