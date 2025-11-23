import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export interface UserMessage {
  id: string
  name: string
  jobTitle: string
  lastMessage: string
  date: string
  unreadCount: number
  avatarUrl: string
}

interface MessageItemProps {
  user: UserMessage
}

const MessageItem: React.FC<MessageItemProps> = ({ user }) => {
  const navigation = useNavigation()
  const { name, jobTitle, lastMessage, date, unreadCount, avatarUrl } = user

  const nameStyle =
    unreadCount > 0
      ? 'font-semibold text-defaultBlack'
      : 'font-medium text-defaultBlack'
  const messageStyle =
    unreadCount > 0
      ? 'font-bold text-defaultBlack'
      : 'font-normal text-[#6B7280]'

  return (
    <TouchableOpacity
      onPress={() =>
        (navigation as any).navigate('MessageTab', {
          screen: 'Chat',
          params: { user }
        })
      }
    >
      <View
        style={{ borderBottomColor: '#E1E2DF' }}
        className="flex-row items-center border-b bg-white px-4 py-3"
      >
        <Image
          source={{ uri: avatarUrl }}
          className="mr-4 h-16 w-16 rounded-full"
        />

        <View className="flex-1 justify-center">
          <View className="mb-1 flex-row items-start justify-between">
            <Text className={`text-lg ${nameStyle} flex-1`} numberOfLines={1}>
              {name}
            </Text>
            <Text className="ml-2 text-sm text-gray-500">{date}</Text>
            {unreadCount > 0 && (
              <View className="ml-2 h-6 w-6 items-center justify-center rounded-full bg-[#CD1E56]">
                <Text className="text-xs font-bold text-white">
                  {unreadCount}
                </Text>
              </View>
            )}
          </View>

          <Text className="mb-1 text-sm text-[#6B7280]" numberOfLines={1}>
            {jobTitle} • Nov 4
          </Text>

          <View className="flex-row items-center justify-between">
            <Text
              className={`text-base ${messageStyle} flex-1`}
              numberOfLines={1}
            >
              {lastMessage}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MessageItem
