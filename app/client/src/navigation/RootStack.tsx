import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabs from './BottomTabs'

export type RootStackParamList = {
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
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  )
}

export default RootStack
