import axios, { InternalAxiosRequestConfig } from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { env } from '@lib/config/env'

// Storage keys
const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data'
} as const

// Create axios instance
const client = axios.create({
  baseURL: env.API_URL,
  timeout: 15000,
  headers: { 
    'Content-Type': 'application/json'
  }
})

// Token management utilities
export const tokenManager = {
  async getAccessToken(): Promise<string | null> {
    return await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
  },

  async getRefreshToken(): Promise<string | null> {
    return await AsyncStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)
  },

  async setTokens(accessToken: string, refreshToken: string): Promise<void> {
    await AsyncStorage.multiSet([
      [STORAGE_KEYS.ACCESS_TOKEN, accessToken],
      [STORAGE_KEYS.REFRESH_TOKEN, refreshToken]
    ])
  },

  async clearTokens(): Promise<void> {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.ACCESS_TOKEN,
      STORAGE_KEYS.REFRESH_TOKEN,
      STORAGE_KEYS.USER_DATA
    ])
  },

  async setUserData(userData: any): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData))
  },

  async getUserData(): Promise<any | null> {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA)
    return data ? JSON.parse(data) : null
  }
}

// Flag to prevent multiple refresh attempts
let isRefreshing = false
let failedQueue: Array<{
  resolve: (token: string) => void
  reject: (error: any) => void
}> = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token!)
    }
  })
  failedQueue = []
}

// Request interceptor - Add auth token
client.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await tokenManager.getAccessToken()
    
    // Only add token if it exists and endpoint is not public
    const publicEndpoints = ['/auth/login', '/auth/register', '/auth/verify-email', '/auth/resend-verification-otp']
    const isPublicEndpoint = publicEndpoints.some(endpoint => config.url?.includes(endpoint))
    
    if (token && !isPublicEndpoint) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor - Handle token refresh
client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If error is not 401 or request already retried, reject
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error.response?.data || error)
    }

    // If refresh endpoint failed, logout user
    if (originalRequest.url?.includes('/auth/refresh')) {
      await tokenManager.clearTokens()
      return Promise.reject(error.response?.data || error)
    }

    // Mark request as retried
    originalRequest._retry = true

    if (isRefreshing) {
      // Queue this request to retry after refresh completes
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      })
        .then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`
          return client(originalRequest)
        })
        .catch(err => Promise.reject(err))
    }

    isRefreshing = true

    try {
      const refreshToken = await tokenManager.getRefreshToken()
      
      if (!refreshToken) {
        throw new Error('No refresh token available')
      }

      // Call refresh endpoint
      // Note: If backend uses cookies, this might need adjustment
      const response = await axios.post(
        `${env.API_URL}/auth/refresh`,
        {}, // Empty body as per API doc
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`
          }
        }
      )

      // IMPORTANT: This assumes backend returns tokens in response body
      // If backend only sets cookies, you'll need Approach B with cookie handling
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data

      if (newAccessToken && newRefreshToken) {
        await tokenManager.setTokens(newAccessToken, newRefreshToken)
        processQueue(null, newAccessToken)
        
        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return client(originalRequest)
      } else {
        throw new Error('No tokens in refresh response')
      }
    } catch (refreshError) {
      processQueue(refreshError, null)
      await tokenManager.clearTokens()
      return Promise.reject(refreshError)
    } finally {
      isRefreshing = false
    }
  }
)

export default client