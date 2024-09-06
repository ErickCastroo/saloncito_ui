import { AuthContext } from '@/contexts/auth'

import { useContext } from 'react'

function useAuth() {
  const auth = useContext(AuthContext)
  return auth
}

export { useAuth }