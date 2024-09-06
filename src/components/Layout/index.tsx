import { Header } from '@/components/Layout/components/Header'
import { ClassButton } from '@/components/Layout/components/ClassButton'

type LayoutProps = {
  children: React.ReactNode
}

function Layout({
  children
}: LayoutProps) {
  return (
    <div className='min-h-screen bg'>
      <Header />
      <main className='w-full flex flex-col text-pretty'>
        {children}
      </main>
      <ClassButton />
    </div>
  )
}

export { Layout }