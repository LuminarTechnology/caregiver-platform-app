import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import MoreIcon from '@lib/icons/MoreIcon'
import ChevronLeftIcon from '@lib/icons/ChevronLeftIcon'
import { PhoneIcon, UserIcon } from '@lib/icons'
import { useNavigation } from '@react-navigation/native'

interface ChatHeaderProps {
  userName?: string
  isOnline?: boolean
  avatarUrl?: string
  onBackPress?: () => void
  fallback?: string
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  userName = 'Unknown',
  isOnline = false,
  avatarUrl,
  onBackPress,
  fallback = 'Main'
}) => {
  const navigation = useNavigation()

  const handleBack = () => {
    if (onBackPress) return onBackPress()
    if (navigation.canGoBack()) return navigation.goBack()
    ;(navigation as unknown as { navigate: (s: string) => void }).navigate(
      fallback
    )
  }

  return (
    <View className="flex-row items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
      <View className="flex-row items-center">
        <TouchableOpacity onPress={handleBack} className="mr-3 p-1">
          <ChevronLeftIcon height={20} width={20} />
        </TouchableOpacity>

        {avatarUrl ? (
          <Image
            source={{ uri: avatarUrl }}
            className="mr-3 h-10 w-10 rounded-full"
          />
        ) : (
          <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <UserIcon height={20} width={20} />
          </View>
        )}

        <View>
          <Text className="text-lg font-semibold text-gray-900">
            {userName}
          </Text>
          <View className="mt-0.5 flex-row items-center">
            <View
              className={`mr-1 h-2 w-2 rounded-full ${
                isOnline ? 'bg-green-500' : 'bg-gray-400'
              }`}
            />
            <Text className="text-sm text-gray-500">
              {isOnline ? 'Active' : 'Offline'}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-center gap-4">
        <TouchableOpacity className="bg-backgroundSecondary rounded-full p-3">
          <PhoneIcon height={20} width={20} />
        </TouchableOpacity>
        <TouchableOpacity className="bg-backgroundSecondary rounded-full p-3">
          <MoreIcon height={20} width={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatHeader
