import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.example.com/v1',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

client.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err.response?.data || err)
)

export default client
