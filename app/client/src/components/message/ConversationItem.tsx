import { useChatContext } from '@lib/hooks/useChatContext'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export interface Conversation {
  id: string
  twilioConversationSid: string
  participantOneId: string
  participantTwoId: string
  createdAt: string
  updatedAt: string
  otherParticipant: {
    id: string
    fullName: string
    email: string
  }
  unreadCount: number
  lastMessage: {
    id: string
    content: string
    createdAt: string
    senderId: string
  }
}

interface ConversationItemProps {
  conversation: Conversation
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation
}) => {
  const navigation = useNavigation()
  const { otherParticipant, lastMessage, unreadCount } = conversation
  const { identity } = useChatContext()
  const isMe = lastMessage.senderId === identity

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
          params: {
            conversationId: conversation.id,
            TwilioConversationSid: conversation.twilioConversationSid,
            fullName: otherParticipant.fullName,
            avatarUrl: '',
            isOnline: true
          }
        })
      }
    >
      <View
        style={{ borderBottomColor: '#E1E2DF' }}
        className="flex-row items-center gap-4 border-b bg-white px-4 py-3"
      >
        <View className="h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white">
          <Text className="text-primary text-3xl font-semibold">
            {otherParticipant.fullName.charAt(0)}
          </Text>
        </View>

        <View className="flex-1 justify-center">
          <View className="mb-1 flex-row items-start justify-between">
            <Text className={`text-lg ${nameStyle} flex-1`} numberOfLines={1}>
              {otherParticipant.fullName}
            </Text>
            <Text className="ml-2 text-sm text-gray-500">
              {new Date(lastMessage?.createdAt).toLocaleString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </Text>
            {unreadCount > 0 && (
              <View className="ml-2 h-5 w-5 items-center justify-center rounded-full bg-[#CD1E56]">
                <Text className="text-xs font-bold text-white">
                  {unreadCount}
                </Text>
              </View>
            )}
          </View>

          <Text className="mb-1 text-sm text-[#6B7280]" numberOfLines={1}>
            {'child care'} • Nov 4
          </Text>

          <View className="flex-row items-center justify-between">
            {isMe ? (
              <Text className="mr-1 text-sm text-gray-500">
                You: {lastMessage?.content}
              </Text>
            ) : (
              <Text
                className={`text-base ${messageStyle} flex-1`}
                numberOfLines={1}
              >
                {lastMessage?.content}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ConversationItem
