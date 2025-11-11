import React, { useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useNavigation } from '@react-navigation/native'

export default function AppSplashScreen() {
  const navigation = useNavigation()

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync()
      setTimeout(async () => {
        await SplashScreen.hideAsync()
        navigation.navigate('Service' as never)
      }, 2000)
    }
    prepare()
  }, [])

  return (
    <View className="flex-1 items-center justify-center bg-[#A41845]">
      <StatusBar backgroundColor="#A41845" barStyle="light-content" />
      <Text className="text-3xl font-bold text-white">
        HealthTech Solutions
      </Text>
    </View>
  )
}
