import '../../../global.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { StatusBar, Text, View } from 'react-native'
import { queryClient } from '@lib/hooks/useApi'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './navigation/RootNavigator'
import React from 'react'
import { AuthProvider } from './navigation/AuthContext'
import Mapbox from '@rnmapbox/maps'
Mapbox.setAccessToken(
  'pk.eyJ1Ijoic2Fyd2FyamFoaW4iLCJhIjoiY21pa2toZGtkMDlqbDNmc2YxODluOGJ4ZCJ9.lxPXrykID8aO1VRa-fyo2w'
)

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <AuthProvider>
          <NavigationContainer>
            <SafeAreaProvider>
              <RootNavigator />
            </SafeAreaProvider>
          </NavigationContainer>
        </AuthProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}

export default App
