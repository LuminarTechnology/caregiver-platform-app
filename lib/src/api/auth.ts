import { queryKey, useApiMutation, useApiQuery } from '@lib/hooks/useApi'
import { tokenManager } from '@lib/config/axios'
import { queryClient } from '@lib/hooks/useApi'

// ============= Types =============

export interface RegisterRequest {
  email: string
  password: string
  fullName: string
  phone: string
}

export interface RegisterResponse {
  data: {
    id: string
    email: string
    fullName: string
    phone: string
    status: 'pending' | 'active' | 'suspended'
    message: string
  }
}

export interface VerifyPhoneRequest {
  phone: string
  otp: string
}

export interface VerifyPhoneResponse {
  data: {
    message: string
  }
}

export interface ResendOtpRequest {
  phone: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  data: {
    userId: string
    email: string
    roles: string[]
    message: string
    accessToken: string
    refreshToken: string // Backend will provide this
  }
}

export interface UserProfile {
  userId: string
  email: string
  roles: string[]
}

export interface Session {
  id: string
  userId: string
  refreshToken: string
  expiresAt: string
  ipAddress: string
  userAgent: string
  deviceName: string
  isActive: boolean
  lastUsedAt: string
  createdAt: string
  updatedAt: string
}

// ============= Auth Service Class =============

class AuthService {
  // Registration - returns mutation hook
  register = () => {
    return useApiMutation<RegisterRequest, RegisterResponse>({
      url: '/auth/register',
      method: 'POST'
    })
  }

  // Verify via otp
  verifyOtp = () => {
    return useApiMutation<VerifyPhoneRequest, VerifyPhoneResponse>({
      url: '/auth/verify-otp',
      method: 'POST'
    })
  }

  // Resend OTP - returns mutation hook
  resendOtp = () => {
    return useApiMutation<ResendOtpRequest, { message: string }>({
      url: '/auth/resend-otp',
      method: 'POST'
    })
  }

  // Login - returns mutation hook
  login = () => {
    return useApiMutation<LoginRequest, LoginResponse>({
      url: '/auth/login',
      method: 'POST',
      onSuccess: async (data) => {
        // Invalidate profile query to refetch with new auth
        queryClient.invalidateQueries({
          queryKey: queryKey.detail('auth', 'profile')
        })
      }
    })
  }

  // Get user profile - returns query hook
  profile = () => {
    return useApiQuery<UserProfile>({
      url: '/auth/profile',
      key: queryKey.detail('auth', 'profile'),
      enabled: false // Enable manually when needed
    })
  }

  // Get active sessions - returns query hook
  sessions = () => {
    return useApiQuery<Session[]>({
      url: '/auth/sessions',
      key: queryKey.list('auth', { type: 'sessions' }),
      enabled: false // Enable manually when needed
    })
  }

  // Logout from current device - returns mutation hook
  logout = () => {
    return useApiMutation<void, { message: string }>({
      url: '/auth/logout',
      method: 'POST',
      onSuccess: async () => {
        // Clear tokens and user data
        await tokenManager.clearTokens()

        // Clear all cached queries
        queryClient.clear()
      }
    })
  }

  // Logout from all devices - returns mutation hook
  logoutAll = () => {
    return useApiMutation<void, { message: string }>({
      url: '/auth/logout-all',
      method: 'POST',
      onSuccess: async () => {
        // Clear tokens and user data
        await tokenManager.clearTokens()

        // Clear all cached queries
        queryClient.clear()
      }
    })
  }

  // Helper method to check auth status (not a hook)
  checkAuthStatus = async () => {
    const token = await tokenManager.getAccessToken()
    const userData = await tokenManager.getUserData()

    return {
      isAuthenticated: !!token,
      needsVerification: userData?.needsVerification ?? false,
      user: userData
    }
  }
}

export const authService = new AuthService()
