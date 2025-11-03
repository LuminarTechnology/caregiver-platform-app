import { View, Text } from 'react-native'
import { ProfileFilledIcon } from '@lib/icons'

const ProfileScreen = () => {
  return (
    <View className="bg-background flex h-screen items-center justify-center gap-6">
      <View className="bg-foreground rounded-full p-6">
        <ProfileFilledIcon height={36} width={36} />
      </View>
      <Text className="text-primary text-center text-3xl font-semibold">
        Caregiver Client My Profile
      </Text>
    </View>
  )
}

export default ProfileScreen
