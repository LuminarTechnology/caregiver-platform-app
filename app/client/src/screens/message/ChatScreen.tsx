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
import ChatHeader from '../../components/message/ChatHeader'
import ChatInput from '../../components/message/ChatInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

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
  { id: '3', text: 'Hi', time: '10:10', isSent: true, status: 'read' },
  {
    id: '4',
    text: 'I think the idea that things are chang isn t good',
    time: '10:10',
    isSent: true,
    status: 'read'
  },
  {
    id: '5',
    text: 'I think the idea that things are chaning isnt good',
    time: '10:10',
    isSent: true,
    status: 'read'
  },
  {
    id: '6',
    text: 'Tell me more about your  idea',
    time: '10:10',
    isSent: true,
    status: 'read'
  },
  {
    id: '7',
    text: 'Tell me more about your  idea. Tell me more about your  idea',
    time: '10:10',
    isSent: true,
    status: 'read'
  },
  {
    id: '8',
    text: 'Tell me more about your  idea. Tell me more about your  idea',
    time: '10:10',
    isSent: true,
    status: 'read'
  },
  {
    id: '10',
    text: 'Tell me more about your  idea. Tell me more about your  idea',
    time: '10:10',
    isSent: true,
    status: 'read'
  }
]

const ChatScreen: React.FC = () => {
  const navigation = useNavigation()
  const [messages, setMessages] = useState(INITIAL_MESSAGES)

  const handleSend = (text: string) => {
    const newMessage: ChatMessage = {
      id: String(Date.now()),
      text: text,
      time: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }),
      isSent: true,
      status: 'sent'
    }
    setMessages((prev) => [...prev, newMessage])
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
    <SafeAreaView className="bg-backgroundSecondary flex-1">
      <ChatHeader
        userName="Zephaniah L."
        isOnline={true}
        avatarUrl="https://i.pravatar.cc/150?img=2"
        onBackPress={() => navigation.goBack()}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <FlatList
          data={messages.slice().reverse()}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          className="mb-4 flex-1 px-4"
          inverted
        />

        <ChatInput onSend={handleSend} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen
