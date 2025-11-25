import { QueryClientProvider } from '@tanstack/react-query'
import { StatusBar, Text, View } from 'react-native'
import { queryClient } from '@lib/hooks/useApi'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './navigation/RootNavigator'
import React from 'react'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
