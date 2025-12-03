import { tokenManager } from '@lib/config/axios'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  setAuthenticated: (val: boolean) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      const accessToken = await tokenManager.getAccessToken()
      setAuthenticated(!!accessToken)
      setLoading(false)
    }

    initAuth()
  }, [])

  const logout = async () => {
    await tokenManager.clearTokens()
    setAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
