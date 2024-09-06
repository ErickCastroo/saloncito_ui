import { Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'

type PublicRouteProps = {
  children: React.ReactNode
}

function PublicRoute({ children }: PublicRouteProps) {
  const auth = useAuth()

  if (!auth.verifiedUser) {
    return null
  }

  if (auth.user) {
    return <Navigate to='/' />
  }

  return children
}

export { PublicRoute }