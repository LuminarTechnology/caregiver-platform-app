import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import BottomTabs from './BottomTabs'
import ServicesScreen from '../screens/SelectServices'
import BookCaregiverScreen from '../screens/BookCaregiverChild/BookCaregiverScreen'
import BookCaregiverScreen2 from '../screens/BookCaregiverChild/BookCaregiverScreen2'

export type RootStackParamList = {
  Splash: undefined
  Service: undefined
  Onboarding: undefined
  Main: undefined
  BookCare: undefined
  BookCare2: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStack = () => {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Service" component={ServicesScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="BookCare" component={BookCaregiverScreen} />
      <Stack.Screen name="BookCare2" component={BookCaregiverScreen2} />
    </Stack.Navigator>
  )
}

export default RootStack
