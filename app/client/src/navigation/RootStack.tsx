import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import BottomTabs from './BottomTabs'
import ServicesScreen from '../screens/SelectServices'

export type RootStackParamList = {
  Splash: undefined
  Service: undefined
  Onboarding: undefined
  Main: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStack = () => {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Service" component={ServicesScreen} />
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  )
}

export default RootStack
