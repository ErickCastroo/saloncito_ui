import { useAuth } from '@/contexts/auth/useAuth'

import {
  HiOutlineXMark,
  HiOutlineBars4
} from 'react-icons/hi2'

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
  const auth = useAuth()

  return (
    <header
      ref={headerRef}
      className='bg-secondary text-secondary w-full flex justify-between items-center border-b-2 p-2 z-30'
    >
      <div className='flex items-center'>
        <button
          type='button'
          className='text-3xl mr-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars4 />}
        </button>
        <h1 className='text-xl'>
          Saloncito
        </h1>
      </div>
      {auth.user ? (
        <figure className='p-1'>
          <img
            src={defaultPfp}
            alt='Profile picture'
            className='w-8 h-8 rounded-full'
          />
        </figure>
      ) : undefined}
    </header>
  )
}

export { Header }