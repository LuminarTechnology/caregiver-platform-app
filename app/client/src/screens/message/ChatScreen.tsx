import React, { useEffect, useRef, useState } from 'react'
import { FlatList, View, KeyboardAvoidingView, Platform } from 'react-native'
import MessageBubble from '../../components/message/MessageBubble'
import ChatInput from '../../components/message/ChatInput'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import ChatLayout from '../../components/common/layouts/ChatLayout'
import { chatService } from '@lib/api/chat'
import { initConversation } from '@lib/config/chatClient'

// Twilio Conversation message shape (simplified)
interface ITwilioMessage {
  sid: string
  author: string
  body: string
  dateCreated?: Date | string
}

// Twilio Conversation object (simplified for listener)
interface ITwilioConversation {
  removeAllListeners: () => void
  on: (event: 'messageAdded', listener: (msg: ITwilioMessage) => void) => void
  sendMessage: (body: string) => Promise<number>
}

// Define the shape of the route parameters
interface ChatRouteParams {
  fullName: string
  isOnline?: boolean
  avatarUrl?: string
  conversationId: string
  TwilioConversationSid?: string
}

// Define the Route type
type ChatScreenRouteProp = RouteProp<
  Record<string, ChatRouteParams>,
  'ChatScreen'
>

export interface IChatMessage {
  id: string
  conversationId: string
  senderId: string
  content: string
  seen: boolean
  createdAt: string
  sender: {
    id: string
    fullName: string
    email: string
  }
}

const ChatScreen: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute<ChatScreenRouteProp>()
  const params = route.params

  const fullName = params.fullName
  const isOnline = params.isOnline ?? true
  const avatarUrl = params.avatarUrl ?? 'https://i.pravatar.cc/150?img=2'

  const { data: messagesData } = chatService.getMessagesByConversationId(
    params.conversationId,
    1,
    50
  )
  const { mutate: triggerMarkSeen } = chatService.markConversationAsSeen(
    params.conversationId
  )
  const [messages, setMessages] = useState<IChatMessage[]>([])
  const [conversation, setConversation] = useState<ITwilioConversation | null>(
    null
  )
  const listenerAdded = useRef(false)

  useEffect(() => {
    async function setup() {
      if (!params.TwilioConversationSid) return
      setMessages(messagesData?.data?.messages || [])

      const conv: ITwilioConversation = await initConversation(
        params.TwilioConversationSid
      )
      if (!conv) return
      setConversation(conv)

      if (!listenerAdded.current) {
        listenerAdded.current = true

        conv.on('messageAdded', (msg: ITwilioMessage) => {
          console.log('REALTIME MSG', msg.sid)

          setMessages((prev) => [
            ...prev,
            {
              id: msg.sid,
              conversationId: params.conversationId,
              senderId: msg.author,
              content: msg.body,
              createdAt:
                msg.dateCreated?.toString() ?? new Date().toISOString(),
              seen: false,
              sender: {
                id: msg.author,
                fullName: msg.author,
                email: ''
              }
            }
          ])
        })
      }
    }
    setup()

    return () => {
      if (conversation) {
        conversation.removeAllListeners()
      }
    }
  }, [messagesData, params.TwilioConversationSid])

  useEffect(() => {
    if (conversation) {
      triggerMarkSeen(undefined, {
        onSuccess: (result: any) => {
          console.log('Marked as seen result:', result)
        },
        onError: (error: any) => {
          console.error('Error marking messages as read:', error)
        }
      })
    }
  }, [conversation, triggerMarkSeen])

  // Send Message
  const handleSend = async (text: string) => {
    if (!conversation) return
    await conversation.sendMessage(text)
  }

  // Reverse for FlatList inverted
  const orderedMessages = [...messages].reverse()

  return (
    <ChatLayout
      fullName={fullName}
      isOnline={isOnline}
      avatarUrl={avatarUrl}
      onBackPress={() => navigation.goBack()}
    >
      <View className="bg-backgroundSecondary flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <FlatList
            data={orderedMessages}
            renderItem={({ item }) => <MessageBubble message={item} />}
            keyExtractor={(item) => item.id}
            inverted
            className="mb-4 flex-1 px-4"
          />

          <ChatInput onSend={handleSend} />
        </KeyboardAvoidingView>
      </View>
    </ChatLayout>
  )
}

export default ChatScreen
