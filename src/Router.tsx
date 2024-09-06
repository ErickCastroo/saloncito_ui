import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { Home } from '@/modules/home/ui/pages/Home'
import { SignIn } from '@/modules/auth/ui/pages/SignIn'

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/sign-in'
            element={<SignIn />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { Router }