import { FlatList, View } from 'react-native'
import { MyBookingsData } from './MyBookingsScreen'
import BookingCard from '../../components/my-bookings/BookingCard'

const HistoryBookings: React.FC<{
  bookings: MyBookingsData[]
  tab: 'ongoing' | 'history'
}> = ({ bookings, tab }) => {
  return (
    <View className="bg-secondary flex-1 items-center justify-center px-4">
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookingCard bookings={item} tab={tab} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 12,
          gap: 12,
          paddingBottom: 50
        }}
        keyboardShouldPersistTaps="handled"
        windowSize={5}
        maxToRenderPerBatch={5}
        initialNumToRender={7}
        updateCellsBatchingPeriod={50}
        getItemLayout={(data, index) => ({
          length: 120,
          offset: 120 * index,
          index
        })}
      />
    </View>
  )
}

export default HistoryBookings
