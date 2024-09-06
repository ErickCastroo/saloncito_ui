import { HiOutlineBars4 } from 'react-icons/hi2'

import defaultPfp from '@/assets/images/default-pfp.png'

type HeaderProps = {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void,
  headerRef: React.MutableRefObject<HTMLHeadElement | null>
}

function Header({
  isMenuOpen,
  setIsMenuOpen,
  headerRef
}: HeaderProps) {
  return (
    <header
      ref={headerRef}
      className='bg-secondary text-secondary min-w-screen flex justify-between items-center p-2 z-20'
    >
      <div className='flex items-center'>
        <button
          type='button'
          className='text-3xl mr-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiOutlineBars4 />
        </button>
        <h1 className='text-xl'>
          Saloncito
        </h1>
      </div>
      <figure className='p-1'>
        <img
          src={defaultPfp}
          alt='Profile picture'
          className='w-8 h-8 rounded-full'
        />
      </figure>
    </header>
  )
}

export { Header }