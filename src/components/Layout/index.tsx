import { useRef, useState } from 'react'

import { Header } from '@/components/Layout/components/Header'
import { Menu } from '@/components/Layout/components/Menu'
import { ClassButton } from '@/components/Layout/components/ClassButton'

type LayoutProps = {
  children: React.ReactNode
}

function Layout({
  children
}: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLHeadElement>(null)

  return (
    <div className='min-h-screen relative bg'>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        headerRef={headerRef}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        headerRef={headerRef}
      />
      <main className='w-full flex flex-col text-pretty'>
        {children}
      </main>
      <ClassButton />
    </div>
  )
}

export { Layout }