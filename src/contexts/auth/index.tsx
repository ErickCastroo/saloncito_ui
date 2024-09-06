import { UserEntity } from '@/modules/user/domain/entity'

import { LocalStorageKey } from '@/constants/localstorage'

import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type AuthContextType = {
  user?: UserEntity
  setUser: (user: UserEntity) => void
  verifiedUser: boolean
}

const defaultAuthContext: AuthContextType = {
  user: undefined,
  setUser: () => {},
  verifiedUser: false
}

const AuthContext = createContext<AuthContextType>(defaultAuthContext)

type AuthProviderProps = {
  children: React.ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()

  const [user, setUser] = useState<UserEntity>()
  const [verifiedUser, setVerifiedUser] = useState(false)
  
  useEffect(() => {
    const userLocalStorage = localStorage.getItem(LocalStorageKey.USER)

    if (userLocalStorage) {
      try {
        setUser(JSON.parse(userLocalStorage))
        setVerifiedUser(true)
      } catch (error) {
        console.error('Failed to parse user data from localStorage', error)
        navigate('/sign-in')
      }
    } else {
      setUser(undefined)
      setVerifiedUser(true)
      navigate('/sign-in')
    }
  }, [user, navigate])

  const signIn = (user: UserEntity) => {
    localStorage.setItem(LocalStorageKey.USER, JSON.stringify(user))
    setUser(user)
    setVerifiedUser(true)
  }

  const logout = () => {
    localStorage.removeItem(LocalStorageKey.USER)
    setUser(undefined)
    setVerifiedUser(false)
    navigate('/sign-in')
  }

  const auth = {
    user,
    setUser,
    signIn,
    logout,
    verifiedUser
  }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }