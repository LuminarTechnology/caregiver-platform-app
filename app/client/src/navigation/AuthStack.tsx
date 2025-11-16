import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import OTPVerification from "../screens/auth/OTPVerification";

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  OTPVerification: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthStack() {
  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
    </Stack.Navigator>
  )
}
