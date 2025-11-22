import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

export type RootStackParamList = {
  Auth: undefined
  Main: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  // Replace this with your actual auth logic
  const isAuthenticated = true // This should come from your auth context/state

  return (
    <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : (
        <Stack.Screen name="Main" component={MainStack} />
      )}
    </Stack.Navigator>
  )
}
