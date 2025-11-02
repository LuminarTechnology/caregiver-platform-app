import { View, Text } from 'react-native'
import { MyBookingFilledIcon } from '@lib/icons'

const MyBookingsScreen = () => {
  return (
    <View className="bg-background flex h-screen items-center justify-center gap-6">
      <View className="bg-foreground rounded-full p-6">
        <MyBookingFilledIcon height={36} width={36} />
      </View>
      <Text className="text-primary text-center text-3xl font-semibold">
        Caregiver Client My Booking
      </Text>
    </View>
  )
}

export default MyBookingsScreen
