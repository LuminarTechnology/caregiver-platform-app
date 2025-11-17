import CheckMark2xIcon from '@lib/icons/CheckMark2xIcon'
import CheckMarkIcon from '@lib/icons/CheckMarkIcon'
import React from 'react'
import { View, Text, Image } from 'react-native'

export interface ChatMessage {
  id: string
  text: string
  time: string
  isSent: boolean
  status: 'sent' | 'delivered' | 'read'
  showAvatar?: boolean
  avatarUrl?: string
}

interface MessageBubbleProps {
  message: ChatMessage
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isSent = message.isSent

  const bubbleClasses = isSent
    ? 'bg-primary self-end rounded-tl-xl rounded-bl-xl rounded-br-xl'
    : 'bg-[#FFF] self-start rounded-tr-xl rounded-bl-xl rounded-br-xl'

  const textClasses = isSent ? 'text-white' : 'text-gray-900'

  const textWithoutAvatars = message.avatarUrl ? 'ml-0' : 'ml-10'

  const StatusIcon = () => {
    if (message.status === 'read')
      return (
        <CheckMark2xIcon height={14} width={14} color="#fff" className="ml-1" />
      )
    if (message.status === 'delivered')
      return (
        <CheckMark2xIcon height={14} width={14} color="#ccc" className="ml-1" />
      )
    if (message.status === 'sent')
      return (
        <CheckMarkIcon height={14} width={14} color="#ccc" className="ml-1" />
      )
    return null
  }

  return (
    <View
      className={`my-1 flex-row items-end ${
        isSent ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isSent && message.showAvatar && message.avatarUrl && (
        <Image
          source={{ uri: message.avatarUrl }}
          className="mr-2 h-8 w-8 rounded-full"
        />
      )}

      <View
        className={`ml-5 max-w-[80%] p-3 ${bubbleClasses} ${textWithoutAvatars}`}
      >
        <Text className={`text-base ${textClasses}`}>{message.text}</Text>
        <View className="mt-1 flex-row items-center justify-end">
          <Text
            className={`text-xs ${
              isSent ? 'text-white/80' : 'text-gray-500'
            } font-normal`}
          >
            {message.time}
          </Text>
          {isSent && <StatusIcon />}
        </View>
      </View>

      {!isSent && !message.showAvatar && <View className="mr-2 w-10" />}
    </View>
  )
}

export default MessageBubble
