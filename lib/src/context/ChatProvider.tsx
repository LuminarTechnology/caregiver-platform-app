import { createContext, useState, useCallback } from 'react'
import type { Client } from '@twilio/conversations'
import { initTwilioClient } from '@lib/config/chatClient'

export interface IChatContext {
  client: Client | null
  setupChat: (token: string) => Promise<void>
  token: string | null
  identity: string | null
  setToken: (token: string | null) => void
  setIdentity: (identity: string | null) => void
}

export const ChatContext = createContext<IChatContext | null>(null)

export default function ChatProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [client, setClient] = useState<Client | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [identity, setIdentity] = useState<string | null>(null)

  const setupChat = useCallback(async (token: string) => {
    const c = await initTwilioClient(token)
    setClient(c)
  }, [])

  return (
    <ChatContext.Provider
      value={{ client, setupChat, token, identity, setToken, setIdentity }}
    >
      {children}
    </ChatContext.Provider>
  )
}
