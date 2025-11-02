type NODE_ENV = 'development' | 'production'

// Set the environment here
const environment: NODE_ENV = 'development'

export const env = {
  API_URL:
    environment === 'development'
      ? 'http://localhost:3000'
      : 'https://api.example.com'
} as const
