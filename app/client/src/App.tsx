import '../../../global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { queryClient } from '@lib/hooks/useApi';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/RootStack';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default App;
