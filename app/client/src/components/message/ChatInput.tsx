import PaperClipIcon from '@lib/icons/PaperClipIcon'
import SendIcon from '@lib/icons/SendIcon'
import SmileIcon from '@lib/icons/SmileIcon'
import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'

interface ChatInputProps {
  onSend: (text: string) => void
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (text.trim().length > 0) {
      onSend(text.trim())
      setText('')
    }
  }

  return (
    <View className="flex-row items-end border-t border-gray-100 bg-white px-4 py-3">
      <TouchableOpacity className="mb-1 p-2">
        <PaperClipIcon height={20} width={20} />
      </TouchableOpacity>

      <View className="mx-2 flex-1 flex-row items-center rounded-full bg-gray-100 px-4">
        <TextInput
          className="max-h-32 flex-1 py-3 text-base text-gray-800"
          placeholder="Type a message..."
          placeholderTextColor="#888"
          multiline
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity className="ml-2 p-1">
          <SmileIcon height={20} width={20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className={`mb-1 h-12 w-12 items-center justify-center rounded-full ${
          text.trim().length > 0 ? 'bg-primary' : 'bg-primary/70'
        }`}
        onPress={handleSend}
        disabled={text.trim().length === 0}
      >
        <SendIcon height={20} width={20} />
      </TouchableOpacity>
    </View>
  )
}

export default ChatInput
