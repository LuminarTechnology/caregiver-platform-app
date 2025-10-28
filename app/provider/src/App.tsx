import '../../../global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { queryClient } from '@lib/hooks/useApi';
import HomeScreen from './screens/Home';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" />
      {/* Screens go here */}
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default App;
