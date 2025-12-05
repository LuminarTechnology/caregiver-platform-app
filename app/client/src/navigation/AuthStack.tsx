import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SignIn from '../screens/auth/SignIn'
import SignUp from '../screens/auth/SignUp'
import OnboardingScreen from '../screens/OnboardingScreen'
import SplashScreen from '../screens/SplashScreen'
import OTPVerification from '../screens/auth/OTPVerification'
import MapScreen from '../screens/MapScreen'
import MiniMapScreen from '../components/map/MiniMapScreen'
import FullMapScreen from '../components/map/FullMapScreen'

export type AuthStackParamList = {
  MiniMapScreen: undefined
  FullMap: undefined
  Splash: undefined
  Onboarding: undefined
  SignIn: undefined
  SignUp: undefined
  OTPVerification: { phone: string }
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MiniMapScreen" component={MiniMapScreen} />
      <Stack.Screen name="FullMap" component={FullMapScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
    </Stack.Navigator>
  )
}
