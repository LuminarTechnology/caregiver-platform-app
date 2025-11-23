import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import BottomTabs from './BottomTabs'

export type MainStackParamList = {
  BottomTabs: undefined
}

const Stack = createNativeStackNavigator<MainStackParamList>()

export default function MainStack() {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName="BottomTabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  )
}
