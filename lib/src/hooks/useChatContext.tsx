import { useContext } from 'react'
import { ChatContext } from '@lib/context/ChatProvider'
import type { IChatContext } from '@lib/context/ChatProvider'

export const useChatContext = (): IChatContext => {
  const ctx = useContext(ChatContext)

  if (!ctx) {
    throw new Error('useChatContext must be used within a ChatProvider')
  }

  return ctx
}
