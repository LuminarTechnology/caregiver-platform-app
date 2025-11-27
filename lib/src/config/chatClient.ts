import { Client as ConversationsClient } from '@twilio/conversations'

let client: ConversationsClient | null = null

export const initTwilioClient = async (token: string) => {
  if (!client) {
    client = new ConversationsClient(token)
  }
  return client
}

export const getTwilioClient = () => client

export const initConversation = async (sid: string) => {
  const result = await client?.getConversationBySid(sid)
  return result
}
