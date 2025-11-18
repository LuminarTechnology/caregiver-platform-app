import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home'
import SearchScreen from '../screens/Search'
import ProfileScreen from '../screens/Profile'
import HomeIcon from '@lib/icons/Home'
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
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'
import MessageListScreen from '../screens/message/MessageListScreen'
import MyBookingsStack from './MyBookingsStack'

export type BottomTabsParamList = {
  Home: undefined
  Search: undefined
  Message: undefined
  Bookings: undefined
  Profile: undefined
}

const Tab = createBottomTabNavigator<BottomTabsParamList>()

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
            case 'Home':
              Icon = focused ? HomeFilledIcon : HomeIcon
              break
            case 'Search':
              Icon = focused ? SearchFilledIcon : SearchIcon
              break
            case 'Message':
              Icon = focused ? MessageFilledIcon : MessageIcon
              break
            case 'Bookings':
              Icon = focused ? MyBookingFilledIcon : MyBookingIcon
              break
            case 'Profile':
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
              {/* Top border for active tab */}
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
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
      <Tab.Screen
        name="Message"
        component={MessageListScreen}
        options={{ title: 'Message' }}
      />
      <Tab.Screen
        name="Bookings"
        component={MyBookingsStack}
        options={{ title: 'My Bookings' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  )
}
