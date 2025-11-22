import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'
import {
  HomeFilledIcon,
  MessageFilledIcon,
  MessageIcon,
  MyBookingFilledIcon,
  MyBookingIcon,
  ProfileFilledIcon,
  ProfileIcon,
  SearchFilledIcon,
  SearchIcon
} from '@lib/icons'
import HomeIcon from '@lib/icons/Home'
import HomeStack from './HomeStack'
import SearchStack from './SearchStack'
import MessageStack from './MessageStack'
import BookingsStack from './BookingsStack'
import ProfileStack from './ProfileStack'
import {
  useRoute,
  getFocusedRouteNameFromRoute
} from '@react-navigation/native'

export type BottomTabsParamList = {
  HomeTab: undefined
  SearchTab: undefined
  MessageTab: undefined
  BookingsTab: undefined
  ProfileTab: undefined
}

const Tab = createBottomTabNavigator<BottomTabsParamList>()

// Helper to determine if bottom tab bar should be visible
const getTabBarVisibility = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route)

  // Hide tab bar on these screens
  const hiddenScreens = ['Chat', 'Caregiver']

  if (hiddenScreens.includes(routeName)) {
    return 'none'
  }

  return 'flex'
}

export default function BottomTabs() {
  const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#BE185D',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          display: getTabBarVisibility(route),
          backgroundColor: '#FFFFFF',
          paddingTop: 0,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: 2
        },
        tabBarIcon: ({ size, focused }) => {
          let Icon

          switch (route.name) {
            case 'HomeTab':
              Icon = focused ? HomeFilledIcon : HomeIcon
              break
            case 'SearchTab':
              Icon = focused ? SearchFilledIcon : SearchIcon
              break
            case 'MessageTab':
              Icon = focused ? MessageFilledIcon : MessageIcon
              break
            case 'Bookings':
            case 'BookingsTab':
              Icon = focused ? MyBookingFilledIcon : MyBookingIcon
              break
            case 'ProfileTab':
              Icon = focused ? ProfileFilledIcon : ProfileIcon
              break
            default:
              return null
          }

          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
              }}
            >
              <View
                style={{
                  position: 'absolute',
                  top: -6,
                  width: '240%',
                  height: 3,
                  backgroundColor: focused ? '#A41845' : 'transparent'
                }}
              />
              <Icon width={size} height={size} />
            </View>
          )
        }
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStack}
        options={{ title: 'Search' }}
      />
      <Tab.Screen
        name="MessageTab"
        component={MessageStack}
        options={{ title: 'Message' }}
      />
      <Tab.Screen
        name="Bookings"
        component={MyBookingsStack}
        options={{ title: 'My Bookings' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  )
}
