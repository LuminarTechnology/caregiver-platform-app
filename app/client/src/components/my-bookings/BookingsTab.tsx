import { Text, TouchableOpacity, View } from 'react-native'
import HistoryBookings from '../../screens/my-bookings/HistoryBookings'
import OngoingBookings from '../../screens/my-bookings/OngoingBookings'
import { MyBookingsData } from '../../screens/my-bookings/MyBookingsScreen'

interface BookingsTabProps {
  active: 'ongoing' | 'history'
  setActive: (tab: 'ongoing' | 'history') => void
  bookings: MyBookingsData[]
}

const BookingsTabs: React.FC<BookingsTabProps> = ({
  active,
  setActive,
  bookings
}) => {
  const ongoingBookings = bookings.filter(
    (booking) =>
      booking.status === 'in-progress' || booking.status === 'confirmed'
  )
  const historyBookings = bookings.filter(
    (booking) => booking.status === 'completed' || booking.status === 'canceled'
  )

  return (
    <View className="mt-5 flex-1">
      {/* Tab Switcher */}
      <View className="px-4">
        <View className="bg-primary mb-2 flex-row rounded-full p-1">
          <TouchableOpacity
            onPress={() => setActive('ongoing')}
            className={`flex-1 rounded-full py-3 ${
              active === 'ongoing' ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                active === 'ongoing' ? 'text-primary' : 'text-white'
              }`}
            >
              On-going ({ongoingBookings.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActive('history')}
            className={`flex-1 rounded-full py-3 ${
              active === 'history' ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                active === 'history' ? 'text-primary' : 'text-white'
              }`}
            >
              History ({historyBookings.length})
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Render selected screen */}
      <View className="flex-1">
        {active === 'ongoing' ? (
          <OngoingBookings bookings={ongoingBookings} tab={active} />
        ) : (
          <HistoryBookings bookings={historyBookings} tab={active} />
        )}
      </View>
    </View>
  )
}

export default BookingsTabs
