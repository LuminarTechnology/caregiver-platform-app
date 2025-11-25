import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { ProfileFilledIcon } from '@lib/icons'
import { authService } from '@lib/api'
import { tokenManager } from '@lib/config/axios'
import { useAuth } from '../navigation/AuthContext'

const ProfileScreen = () => {
  const { setAuthenticated } = useAuth()
  const { mutate: logout, isPending } = authService.logout()

  const handleLogout = async () => {
    logout(undefined, {
      onSuccess: () => {
        tokenManager.clearTokens()
        setAuthenticated(false)
      },
      onError: (error) => {
        Alert.alert('Logout error:', error.message)
      }
    })
  }
  return (
    <View className="bg-background flex h-screen items-center justify-center gap-6">
      <View className="bg-foreground rounded-full p-6">
        <ProfileFilledIcon height={36} width={36} />
      </View>
      <Text className="text-primary text-center text-3xl font-semibold">
        Caregiver Client My Profile
      </Text>
      {/* Logout Button */}
      <TouchableOpacity
        onPress={handleLogout}
        disabled={isPending}
        className="rounded-xl bg-red-500 px-6 py-3"
      >
        <Text className="text-lg font-semibold text-white">
          {isPending ? 'Logging out...' : 'Logout'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen
