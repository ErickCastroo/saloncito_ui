import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthProvider } from '@/contexts/auth'

import { AuthRoute } from '@/contexts/auth/AuthRoute'
import { PublicRoute } from '@/contexts/auth/PublicRoute'
import { Layout } from '@/components/Layout'
import { Home } from '@/modules/home/ui/pages/Home'
import { SignIn } from '@/modules/auth/ui/pages/SignIn'
import { SignUp } from '@/modules/auth/ui/pages/SignUp'
import { Error404 } from '@/components/Error404'
import { AboutSaloncito } from './modules/about/ui/pages/AboutSaloncito'

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route
              path='*'
              element={(
                <Error404 />
              )}
            />
            <Route
              path='/'
              element={(
                <AuthRoute>
                  <Home />
                </AuthRoute>
              )}
            />
            <Route
              path='/sign-in'
              element={(
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              )}
            />
            <Route
              path='/sign-up'
              element={(
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              )}
            />
            <Route
              path='/about-saloncito'
              element={(
                <AboutSaloncito />
              )}
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  )
}

export { Router }