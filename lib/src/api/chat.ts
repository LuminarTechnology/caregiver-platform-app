import { queryKey, useApiQuery, useApiMutation } from '@lib/hooks/useApi'

interface IGetChatTokenResponse {
  success: boolean
  message: string
  data: {
    token: string
    identity: string
  }
}

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
  unreadCount?: number
  lastMessage?: {
    id: string
    senderId: string
    content: string
    createdAt: string
  }
}

interface ICreateConversationResponse {
  success: boolean
  message: string
  data: IConversation
}

interface IGetAllConversationResponse {
  success: boolean
  message: string
  data: IConversation[]
}

interface IMessage {
  id: string
  conversationId: string
  senderId: string
  content: string
  seen: boolean
  createdAt: string
  sender: {
    id: string
    fullName: string
    email: string
  }
}

interface IGetConversationMessages {
  success: boolean
  message: string
  data: {
    messages: IMessage[]
    total?: number
    page?: number
    limit?: number
    totalPages?: number
  }
}

interface IUpdateDelete {
  success: boolean
  message: string
  data: {
    message: string
  }
}

class ChatService {
  getChatToken = () =>
    useApiQuery<IGetChatTokenResponse>({
      url: `/chat/token`,
      key: queryKey.detail('chat', 'token')
    })

  getAllConversations = () =>
    useApiQuery<IGetAllConversationResponse>({
      url: '/chat/conversations',
      key: queryKey.all('chat')
    })

  getMessagesByConversationId = (
    conversationId: string,
    page: number,
    limit: number
  ) =>
    useApiQuery<IGetConversationMessages>({
      url: `/chat/conversation/${conversationId}/messages?page=${page}&limit=${limit}`,
      key: queryKey.detail('chat', conversationId)
    })

  getConversationMessagesBySearch = (message: string, conversationId: string) =>
    useApiQuery<IGetConversationMessages>({
      url: `/chat/messages/search?query=${message}&conversationId=${conversationId}`,
      key: queryKey.detail('chat', conversationId)
    })

  createNewConversation = () =>
    useApiMutation<{ identity: string }, ICreateConversationResponse>({
      url: '/chat/conversation',
      method: 'POST',
      invalidate: [queryKey.all('chat')]
    })

  markConversationAsSeen = (conversationId: string) =>
    useApiMutation<null, IUpdateDelete>({
      url: `/chat/conversation/${conversationId}/mark-seen`,
      method: 'PATCH',
      invalidate: [
        queryKey.detail('chat', conversationId),
        queryKey.all('chat')
      ]
    })

  deleteConversationMessagesById = (messageId: string) =>
    useApiMutation<null, IUpdateDelete>({
      url: `/chat/message/${messageId}`,
      method: 'DELETE',
      invalidate: [queryKey.detail('chat', messageId), queryKey.all('chat')]
    })
}

export const chatService = new ChatService()
