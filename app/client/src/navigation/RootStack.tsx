import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import BottomTabs from './BottomTabs'
import ServicesScreen from '../screens/SelectServices'
import { CaregiverDetails } from '../screens/CaregiverDetails'
import ChildCareScreen from '../screens/BookCaregiverChild/ChildCareScreen'
import ChildCareScreen2 from '../screens/BookCaregiverChild/ChildCareScreen2'
import ChildCareScreen3 from '../screens/BookCaregiverChild/ChildCareScreen3'
import ChildCareScreen4 from '../screens/BookCaregiverChild/ChildCareScreen4'
import ChildCareScreen5 from '../screens/BookCaregiverChild/ChildCareScreen5'
import MessageStack from './MessageStack'

export type RootStackParamList = {
  Splash: undefined
  Service: undefined
  Onboarding: undefined
  Caregiver: undefined
  Main: undefined
  ChildCare: undefined
  ChildCare2: undefined
  ChildCare3: undefined
  ChildCare4: undefined
  ChildCare5: undefined
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
      <Stack.Screen name="ChildCare" component={ChildCareScreen} />
      <Stack.Screen name="ChildCare2" component={ChildCareScreen2} />
      <Stack.Screen name="ChildCare3" component={ChildCareScreen3} />
      <Stack.Screen name="ChildCare4" component={ChildCareScreen4} />
      <Stack.Screen name="ChildCare5" component={ChildCareScreen5} />
      <Stack.Screen name="MessageStack" component={MessageStack} />
    </Stack.Navigator>
  )
}

export default RootStack
