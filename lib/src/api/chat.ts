import { queryKey, useApiQuery, useApiMutation } from '@lib/hooks/useApi'

interface IConversation {
  id: string
  twilioConversationSid: string
  participantOneId: string
  participantTwoId: string
  createdAt: string
  updatedAt: string
  otherParticipant?: {
    id: string
    fullName: string
    email: string
  }
}

interface ICreateConversationResponse {
  success: true
  message: string
  data: IConversation
}
interface IGetConversationResponse {
  success: true
  message: string
  data: IConversation[]
}

class ChatService {
  getToken = () =>
    useApiQuery({
      url: `/chat/token`,
      key: queryKey.detail('chat', 'token')
    })
  createNewConversation = () =>
    useApiMutation<{ identity: string }, ICreateConversationResponse>({
      url: '/chat/conversations',
      method: 'POST',
      invalidate: [queryKey.all('chat')]
    })
  getConversations = () =>
    useApiQuery<IGetConversationResponse>({
      url: '/chat/conversations',
      key: queryKey.all('chat')
    })
}

export const chatService = new ChatService()
