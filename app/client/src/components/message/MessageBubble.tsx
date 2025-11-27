import CheckMark2xIcon from '@lib/icons/CheckMark2xIcon'
import CheckMarkIcon from '@lib/icons/CheckMarkIcon'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { IChatMessage } from '../../screens/message/ChatScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getIdentity } from '@lib/utils/asyncStorage'
import { useChatContext } from '@lib/hooks/useChatContext'

interface MessageBubbleProps {
  message: IChatMessage
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const { identity } = useChatContext()
  const isSent = message.senderId === identity

  const bubbleClasses = isSent
    ? 'bg-primary self-end rounded-tl-xl rounded-bl-xl rounded-br-xl'
    : 'bg-[#FFF] self-start rounded-tr-xl rounded-bl-xl rounded-br-xl border border-gray-200'

  const textClasses = isSent ? 'text-white' : 'text-gray-900'

  const textWithoutAvatars = message.id ? 'ml-0' : 'ml-10'
  // todo --- id replace with avatarUrl

  const StatusIcon = () => {
    if (message.seen)
      return (
        <CheckMark2xIcon height={14} width={14} color="#fff" className="ml-1" />
      )
    return null
  }

  return (
    <View
      className={`my-1 flex-row items-end ${
        isSent ? 'justify-end' : 'justify-start'
      }`}
    >
      {/* {!isSent && message.showAvatar && message.avatarUrl && (
        <Image
          source={{ uri: message.avatarUrl }}
          className="mr-2 h-8 w-8 rounded-full"
        />
      )} */}

      <View
        className={`ml-5 max-w-[80%] p-3 ${bubbleClasses} ${textWithoutAvatars}`}
      >
        <Text className={`text-base ${textClasses}`}>{message.content}</Text>
        <View className="mt-1 flex-row items-center justify-end">
          <Text
            className={`text-xs ${
              isSent ? 'text-white/80' : 'text-gray-500'
            } font-normal`}
          >
            {new Date(message.createdAt).toLocaleString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Text>
          {isSent && <StatusIcon />}
        </View>
      </View>

      {/* {!isSent && !message.showAvatar && <View className="mr-2 w-10" />} */}
    </View>
  )
}

export default MessageBubble
