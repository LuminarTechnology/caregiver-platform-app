import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MyBookingsData } from '../../screens/my-bookings/MyBookingsScreen'
import { StarIcon } from '@lib/icons'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { MyBookingsStackParamList } from '../../navigation/MyBookingsStack'

const BookingCard: React.FC<{
  bookings: MyBookingsData
  tab: 'ongoing' | 'history'
}> = ({ bookings, tab }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MyBookingsStackParamList>>()

  const formattedDate = bookings.date
    ? new Date(bookings.date).toLocaleDateString('en-US')
    : ''

  const statusLabel =
    bookings.status === 'in-progress'
      ? 'IN PROGRESS'
      : bookings.status === 'confirmed'
      ? 'CONFIRMED'
      : bookings.status === 'completed'
      ? 'COMPLETED'
      : 'CANCELED'

  const trackBooking = () => {
    navigation.navigate('TrackBooking', { bookings })
  }

  return (
    <View className="min-w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      {/* Top Row */}
      <View className="flex-row items-center justify-between">
        {/* Left: Image + Name + Subtext */}
        <View className="flex-row items-start gap-3">
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            className="h-16 w-16 rounded-full"
          />

          <View className="flex-1">
            <View className="flex-row items-center justify-between gap-2">
              <Text className="text-[16px] font-semibold text-gray-900">
                {bookings.caregiverName}
              </Text>
              <View
                className={`rounded-full px-3 py-1 ${
                  bookings.status === 'in-progress'
                    ? 'bg-yellow-100'
                    : bookings.status === 'completed' ||
                      bookings.status === 'confirmed'
                    ? 'bg-green-100'
                    : 'bg-red-100'
                }`}
              >
                <Text
                  className={`text-[11px] font-medium ${
                    bookings.status === 'in-progress'
                      ? 'text-yellow-700'
                      : bookings.status === 'completed' ||
                        bookings.status === 'confirmed'
                      ? 'text-green-700'
                      : 'text-red-700'
                  }`}
                >
                  {statusLabel}
                </Text>
              </View>
            </View>

            <View className="mt-2 flex-row items-center gap-2">
              <Text className="truncate text-[13px] text-gray-500">
                {bookings.title}
              </Text>
              <Text className="text-[13px] text-gray-400">•</Text>
              <Text className="text-[13px] text-gray-500">{formattedDate}</Text>
            </View>
          </View>
        </View>

        {/* Status Badge */}
      </View>

      {/* Bottom Row */}
      <View className="mt-5 flex-row items-center justify-between">
        {/* Left Price */}
        <View>
          <Text className="text-primary text-[18px] font-semibold">
            ৳{bookings.price}
          </Text>
          <Text className="mt-[2px] text-gray-500">
            {bookings.careDuration}
          </Text>
        </View>

        {/* Track Button */}
        {tab === 'ongoing' ? (
          <TouchableOpacity
            onPress={trackBooking}
            className="bg-primary rounded-full px-5 py-2"
          >
            <Text className="font-medium text-white">Track Booking</Text>
          </TouchableOpacity>
        ) : (
          <View className="w-full flex-row items-center gap-2">
            <TouchableOpacity className="border-primary flex-1 flex-row items-center justify-center gap-2 rounded-2xl border-[1.5px] bg-white py-3">
              <StarIcon />
              <Text className="text-primary font-medium">Rate</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary border-primary flex-1 items-center justify-center rounded-2xl border-[1.5px] py-3">
              <Text className="font-medium text-white">Book Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

export default BookingCard
