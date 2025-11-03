import { View, Text } from 'react-native'
import { HomeFilledIcon } from '@lib/icons'

const HomeScreen = () => {
  return (
    <View className="bg-background flex h-screen items-center justify-center gap-6">
      <View className="bg-foreground rounded-full p-6">
        <HomeFilledIcon height={36} width={36} />
      </View>
      <Text className="text-primary text-center text-3xl font-semibold ">
        Caregiver Client
      </Text>
    </View>
  )
}

export default HomeScreen
