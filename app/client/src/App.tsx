import '../../../global.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'react-native'
import { queryClient } from '@lib/hooks/useApi'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './navigation/RootNavigator'
import { AuthProvider } from './navigation/AuthContext'

export const App = () => {
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
