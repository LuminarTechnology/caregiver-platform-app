import React, { useEffect } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Conversation } from '../../components/message/ConversationItem'
import Header from '../../components/message/Header'
import SearchBar from '../../components/message/SearchBar'
import { useChatContext } from '@lib/hooks/useChatContext'
import { chatService } from '@lib/api/chat'
import { SafeAreaView } from 'react-native-safe-area-context'
import ConversationItem from '../../components/message/ConversationItem'

const renderMessage: ListRenderItem<Conversation> = ({ item }) => (
  <ConversationItem conversation={item} />
)

const MessageListScreen: React.FC = () => {
  const { setupChat, setToken, setIdentity } = useChatContext()
  const { data } = chatService.getChatToken()

  const { data: conversationsData } = chatService.getAllConversations()

  useEffect(() => {
    const token = data?.data?.token
    const identity = data?.data?.identity
    if (token) {
      setupChat(token as string)
      setToken(token as string)
    }

    if (identity) {
      setIdentity(identity as string)
    }
  }, [setupChat, data, setToken, setIdentity])

  return (
    <SafeAreaView className="flex-1">
      <Header />
      <SearchBar onFilterPress={() => console.warn('Filter Pressed')} />

      <FlatList
        data={conversationsData?.data}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        className="flex-1 "
      />
    </SafeAreaView>
  )
}

export default MessageListScreen
