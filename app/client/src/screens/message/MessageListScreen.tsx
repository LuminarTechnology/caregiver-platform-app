import React from 'react'
import { FlatList, View, ListRenderItem, Text } from 'react-native'
import MessageItem, { UserMessage } from '../../components/message/MessageItem'
import Header from '../../components/message/Header'
import SearchBar from '../../components/message/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'

const MESSAGE_DATA: UserMessage[] = [
  {
    id: '1',
    name: 'Guy Hawkins',
    jobTitle: 'Child care',
    date: 'Today',
    unreadCount: 1,
    lastMessage:
      'Hello! My name is Zephaniah and I would like to offer my services.',
    avatarUrl: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    name: 'Savannah Nguyen',
    jobTitle: 'Pet Sitter',
    date: 'Wednesday',
    unreadCount: 2,
    lastMessage: 'Great, I will send the final confirmation now.',
    avatarUrl: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: '3',
    name: 'Cameron Williamson',
    jobTitle: 'Electrician',
    date: '9/4/2024',
    unreadCount: 0,
    lastMessage: 'Thanks, talk soon!',
    avatarUrl: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: '4',
    name: 'Cameron Williamson',
    jobTitle: 'Electrician',
    date: '9/4/2024',
    unreadCount: 0,
    lastMessage: 'Thanks, talk soon!',
    avatarUrl: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: '5',
    name: 'Cameron Williamson',
    jobTitle: 'Electrician',
    date: '9/4/2024',
    unreadCount: 0,
    lastMessage: 'Thanks, talk soon!',
    avatarUrl: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: '6',
    name: 'Cameron Williamson',
    jobTitle: 'Electrician',
    date: '9/4/2024',
    unreadCount: 0,
    lastMessage: 'Thanks, talk soon!',
    avatarUrl: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: '7',
    name: 'Cameron Williamson',
    jobTitle: 'Electrician',
    date: '9/4/2024',
    unreadCount: 0,
    lastMessage: 'Thanks, talk soon!',
    avatarUrl: 'https://i.pravatar.cc/150?img=3'
  }
]

const MessageListScreen: React.FC = () => {
  const renderMessage: ListRenderItem<UserMessage> = ({ item }) => (
    <MessageItem user={item} />
  )

  return (
    <SafeAreaView edges={['top']} className="mt-3 flex-1 bg-cyan-500">
      <Header />
      <SearchBar onFilterPress={() => console.log('Filter Pressed')} />

      <FlatList
        data={MESSAGE_DATA}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        className="flex-1 "
      />
    </SafeAreaView>
  )
}

export default MessageListScreen
