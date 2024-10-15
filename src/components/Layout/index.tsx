import { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '@/components/Layout/components/Header'
import { Menu } from '@/components/Layout/components/Menu'
import { ClassButton } from '@/components/Layout/components/ClassButton'
import { Toaster } from 'sonner'

function Layout() {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef<HTMLHeadElement>(null)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [navigate])

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [headerRef])

  return (
    <div className='min-h-screen relative bg flex flex-col'>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        headerRef={headerRef}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        headerHeight={headerHeight}
      />
      <main
        className='w-full flex flex-col text-pretty overflow-y-auto'
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
      >
        <Outlet />
      </main>
      <ClassButton />
      <Toaster
        closeButton={true}
        richColors={true}
        expand={true}
      />
    </div>
  )
}

export { Layout }