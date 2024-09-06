import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { Home } from '@/modules/home/ui/pages/Home'

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { Router }