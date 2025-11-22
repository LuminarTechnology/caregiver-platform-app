import { NavigatorScreenParams } from '@react-navigation/native'
import { AuthStackParamList } from './AuthStack'
import { MainStackParamList } from './MainStack'
import { HomeStackParamList } from './HomeStack'
import { SearchStackParamList } from './SearchStack'
import { MessageStackParamList } from './MessageStack'
import { BookingsStackParamList } from './BookingsStack'
import { ProfileStackParamList } from './ProfileStack'
import { BottomTabsParamList } from './BottomTabs'

// Root level navigation types
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>
  Main: NavigatorScreenParams<MainStackParamList>
}

// Composite types for easier usage
export type AppStackParamList = RootStackParamList &
  AuthStackParamList &
  MainStackParamList &
  BottomTabsParamList &
  HomeStackParamList &
  SearchStackParamList &
  MessageStackParamList &
  BookingsStackParamList &
  ProfileStackParamList

// Export all individual types
// export {
//   AuthStackParamList,
//   MainStackParamList,
//   HomeStackParamList,
//   SearchStackParamList,
//   MessageStackParamList,
//   BookingsStackParamList,
//   ProfileStackParamList,
//   BottomTabsParamList
// }
