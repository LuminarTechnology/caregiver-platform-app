import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import MoreIcon from '@lib/icons/MoreIcon'
import ChevronLeftIcon from '@lib/icons/ChevronLeftIcon'
import { PhoneIcon } from '@lib/icons'

interface ChatHeaderProps {
  userName: string
  isOnline: boolean
  avatarUrl: string
  onBackPress: () => void
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  userName,
  isOnline,
  avatarUrl,
  onBackPress
}) => {
  return (
    <View className="flex-row items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
      <View className="flex-row items-center">
        <TouchableOpacity onPress={onBackPress} className="mr-3 p-1">
          <ChevronLeftIcon height={20} width={20} />
        </TouchableOpacity>

        <Image
          source={{ uri: avatarUrl }}
          className="mr-3 h-10 w-10 rounded-full"
        />

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
