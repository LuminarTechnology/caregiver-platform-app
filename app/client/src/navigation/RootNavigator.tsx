import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack, { AuthStackParamList } from './AuthStack'
import MainStack from './MainStack'
import { useAuth } from './AuthContext'
import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>
  Main: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  const { isAuthenticated } = useAuth()

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
