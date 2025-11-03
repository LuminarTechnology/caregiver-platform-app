import { queryKey, useApiMutation, useApiQuery } from '@lib/hooks/useApi'

class AuthService {
  login = () => useApiMutation({ url: `/auth/login`, method: 'POST' })
  session = () =>
    useApiQuery({
      url: `/auth/session`,
      key: queryKey.detail('auth', 'session')
    })
  logout = () => useApiMutation({ url: `/auth/logout-all`, method: 'POST' })
}

export const authService = new AuthService()
