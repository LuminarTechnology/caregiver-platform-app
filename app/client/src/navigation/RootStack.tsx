import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabs from './BottomTabs'
import AuthStack from './AuthStack'

export type RootStackParamList = {
  Main: undefined
  AuthStack: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStack = () => {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName="AuthStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  )
}

export default RootStack
