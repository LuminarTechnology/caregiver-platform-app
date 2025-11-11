import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { env } from '@lib/config/env'

const client = axios.create({
  baseURL: env.API_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

client.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('authToken')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

client.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err.response?.data || err)
)

export default client
