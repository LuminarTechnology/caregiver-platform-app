import React, { useState } from 'react'
import {
  FlatList,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  ListRenderItem
} from 'react-native'
import MessageBubble, {
  ChatMessage
} from '../../components/message/MessageBubble'
import ChatInput from '../../components/message/ChatInput'
import { useNavigation, useRoute } from '@react-navigation/native'
import ChatLayout from '../../components/common/layouts/ChatLayout'

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: 't1', text: '14 FEB', time: '', isSent: false, status: 'read' },
  {
    id: '1',
    text: 'What do you mean?',
    time: '18:55',
    isSent: false,
    status: 'read'
  },
  {
    id: '2',
    text: "This is your delivery driver from Speedy Chow. I'm just place. 🙂",
    time: '18:55',
    isSent: false,
    status: 'read',
    showAvatar: true,
    avatarUrl: 'https://i.pravatar.cc/150?img=4'
  },
  { id: 't2', text: 'Yesterday', time: '', isSent: false, status: 'read' },
  { id: '3', text: 'Hi', time: '10:10', isSent: true, status: 'read' }
]

const ChatScreen: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const params =
    (route as unknown as { params?: Record<string, unknown> }).params ?? {}
  const userName =
    typeof params.userName === 'string' ? params.userName : 'Zephaniah L.'
  const isOnline = typeof params.isOnline === 'boolean' ? params.isOnline : true
  const avatarUrl =
    typeof params.avatarUrl === 'string'
      ? params.avatarUrl
      : 'https://i.pravatar.cc/150?img=2'

  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES)

  const handleSend = (text: string) => {
    const newMessage: ChatMessage = {
      id: String(Date.now()),
      text,
      time: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }),
      isSent: true,
      status: 'sent'
    }
    // prepend so inverted FlatList shows newest at bottom
    setMessages((prev) => [newMessage, ...prev])
  }

  const renderItem: ListRenderItem<ChatMessage> = ({ item }) => {
    if (item.id.startsWith('t')) {
      return (
        <View className="my-3 flex-row justify-center">
          <Text className="rounded-full px-3 py-1 text-sm text-[#90928B]">
            {item.text}
          </Text>
        </View>
      )
    }
    return <MessageBubble message={item} />
  }

  return (
    <ChatLayout
      userName={userName}
      isOnline={isOnline}
      avatarUrl={avatarUrl}
      onBackPress={() => navigation.goBack()}
    >
      <View className="bg-backgroundSecondary flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            className="mb-4 flex-1 px-4"
            inverted
          />

          <ChatInput onSend={handleSend} />
        </KeyboardAvoidingView>
      </View>
    </ChatLayout>
  )
}

export default ChatScreen
