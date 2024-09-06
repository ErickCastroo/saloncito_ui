import { useAuth } from '@/contexts/auth/useAuth'

import { Navigate } from 'react-router-dom'

type AuthRouteProps = {
  children: React.ReactNode
}

function AuthRoute({ children }: AuthRouteProps) {
  const auth = useAuth()

  if (!auth.verifiedUser) {
    return null
  }

  if (!auth.user) {
    return <Navigate to='/sign-in' />
  }

  return children
}

export { AuthRoute }