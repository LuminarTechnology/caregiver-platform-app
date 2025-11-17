import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import BottomTabs from './BottomTabs'
import ServicesScreen from '../screens/SelectServices'
import { CaregiverDetails } from '../screens/CaregiverDetails'
import MessageStack from './MessageStack'

export type RootStackParamList = {
  Splash: undefined
  Service: undefined
  Onboarding: undefined
  Caregiver: undefined
  Main: undefined
  MessageStack: undefined
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
      <Stack.Screen name="Caregiver" component={CaregiverDetails} />
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="MessageStack" component={MessageStack} />
    </Stack.Navigator>
  )
}

export default RootStack
