import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BookingsTabs from '../../components/my-bookings/BookingsTab'
import { useState } from 'react'

export interface MyBookingsData {
  id: string
  title: string
  date: string
  status: 'in-progress' | 'confirmed' | 'completed' | 'canceled'
  caregiverName: string
  caregiverPhotoUrl: string
  price: number
  careDuration: string
  tab?: 'ongoing' | 'history'
}

const myBookingsData: MyBookingsData[] = [
  {
    id: '1',
    title: 'Elderly Care for Mr. John',
    date: '2023-09-15',
    status: 'in-progress',
    caregiverName: 'Alice Smith',
    caregiverPhotoUrl: 'https://example.com/photos/alice.jpg',
    price: 150,
    careDuration: '3 hours'
  },
  {
    id: '2',
    title: 'Post-Surgery Care for Mrs. Jane',
    date: '2023-08-20',
    status: 'confirmed',
    caregiverName: 'Bob Johnson',
    caregiverPhotoUrl: 'https://example.com/photos/bob.jpg',
    price: 200,
    careDuration: '5 hours'
  },
  {
    id: '3',
    title: 'Daily Assistance for Mr. Mike',
    date: '2023-07-10',
    status: 'confirmed',
    caregiverName: 'Cathy Lee',
    caregiverPhotoUrl: 'https://example.com/photos/cathy.jpg',
    price: 100,
    careDuration: '2 hours'
  },
  {
    id: '4',
    title: 'Daily Assistance for Mr. Mike',
    date: '2023-07-10',
    status: 'completed',
    caregiverName: 'Cathy Lee',
    caregiverPhotoUrl: 'https://example.com/photos/cathy.jpg',
    price: 100,
    careDuration: '2 hours'
  },
  {
    id: '5',
    title: 'Daily Assistance for Mr. Mike',
    date: '2023-07-10',
    status: 'completed',
    caregiverName: 'Cathy Lee',
    caregiverPhotoUrl: 'https://example.com/photos/cathy.jpg',
    price: 100,
    careDuration: '2 hours'
  },
  {
    id: '6',
    title: 'Daily Assistance for Mr. Mike',
    date: '2023-07-10',
    status: 'canceled',
    caregiverName: 'Cathy Lee',
    caregiverPhotoUrl: 'https://example.com/photos/cathy.jpg',
    price: 100,
    careDuration: '2 hours'
  },
  {
    id: '7',
    title: 'Daily Assistance for Mr. Mike',
    date: '2023-07-10',
    status: 'completed',
    caregiverName: 'Cathy Lee',
    caregiverPhotoUrl: 'https://example.com/photos/cathy.jpg',
    price: 100,
    careDuration: '2 hours'
  },
  {
    id: '8',
    title: 'Daily Assistance for Mr. Mike',
    date: '2023-07-10',
    status: 'completed',
    caregiverName: 'Cathy Lee',
    caregiverPhotoUrl: 'https://example.com/photos/cathy.jpg',
    price: 100,
    careDuration: '2 hours'
  },
  {
    id: '9',
    title: 'Daily Assistance for Mr. Mike',
    date: '2023-07-10',
    status: 'completed',
    caregiverName: 'Cathy Lee',
    caregiverPhotoUrl: 'https://example.com/photos/cathy.jpg',
    price: 100,
    careDuration: '2 hours'
  },
  {
    id: '10',
    title: 'Daily Assistance for Mr. Mike',
    date: '2023-07-10',
    status: 'in-progress',
    caregiverName: 'Cathy Lee',
    caregiverPhotoUrl: 'https://example.com/photos/cathy.jpg',
    price: 100,
    careDuration: '2 hours'
  },
  {
    id: '11',
    title: 'Daily Assistance for Mr. Mike',
    date: '2023-07-10',
    status: 'confirmed',
    caregiverName: 'Cathy Lee',
    caregiverPhotoUrl: 'https://example.com/photos/cathy.jpg',
    price: 100,
    careDuration: '2 hours'
  }
]

export default function MyBookingsScreen() {
  const [active, setActive] = useState<'ongoing' | 'history'>('ongoing')

  return (
    <SafeAreaView edges={['top']} className="bg-background flex-1">
      <View className="px-4 py-3">
        <Text className="text-defaultBlack text-xl font-medium">
          My Booking
        </Text>
        <Text className="text-subBlack mt-2 text-base">
          This is where your bookings will be displayed.
        </Text>
      </View>
      <BookingsTabs
        active={active}
        setActive={setActive}
        bookings={myBookingsData}
      />
    </SafeAreaView>
  )
}
