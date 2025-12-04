import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ChatProvider from '@lib/context/ChatProvider'
import ChatScreen from '../screens/message/ChatScreen'
import MessageListScreen from '../screens/message/MessageListScreen'

export type MessageStackParamList = {
  Message: undefined
  Chat:
    | { receiverId: string; fullName?: string; avatarUrl?: string }
    | undefined
}

const Stack = createNativeStackNavigator<MessageStackParamList>()

export default function MessageStack() {
  return (
    <ChatProvider>
      <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Message" component={MessageListScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </ChatProvider>
  )
}
