import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SignIn from '../screens/auth/SignIn'
import SignUp from '../screens/auth/SignUp'
import OnboardingScreen from '../screens/OnboardingScreen'
import SplashScreen from '../screens/SplashScreen'
import OTPVerification from "../screens/auth/OTPVerification";

export type AuthStackParamList = {
  Splash: undefined
  Onboarding: undefined
  SignIn: undefined
  SignUp: undefined
  OTPVerification: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
    </Stack.Navigator>
  )
}
