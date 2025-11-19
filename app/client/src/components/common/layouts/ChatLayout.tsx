import { PropsWithChildren } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChatHeader from '../../message/ChatHeader'

type Props = PropsWithChildren<{
  userName?: string
  isOnline?: boolean
  avatarUrl?: string
  onBackPress?: () => void
}>

const ChatLayout = ({
  children,
  userName = 'Support',
  isOnline = true,
  avatarUrl = '',
  onBackPress
}: Props) => {
  return (
    <View className="bg-background flex-1">
      <SafeAreaView edges={['top']} className="bg-white">
        <ChatHeader
          userName={userName}
          isOnline={isOnline}
          avatarUrl={avatarUrl}
          onBackPress={onBackPress}
        />
      </SafeAreaView>

      <View style={{ flex: 1 }}>{children}</View>
    </View>
  )
}

export default ChatLayout
