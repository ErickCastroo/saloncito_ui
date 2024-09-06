type LayoutProps = {
  children: React.ReactNode
}

function Layout({
  children
}: LayoutProps) {
  return (
    <div className='min-h-screen bg'>
      {children}
    </div>
  )
}

export { Layout }