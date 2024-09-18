import { AxiosRepository } from '@/modules/auth/infrastructure/repositories/axios'
import { AuthUseCase } from '@/modules/auth/application/use_cases/auth'

import { useAuth } from '@/contexts/auth/useAuth'

import { PrincipalSection } from '@/components/Layout/components/LoggedSection'
import { GuestSection } from '@/components/Layout/components/GuestSection'
import { Button } from '@/components/Button'

import { HiOutlineArrowLeftStartOnRectangle, HiOutlineSun, HiOutlineLanguage } from 'react-icons/hi2'

const authRepository = new AxiosRepository()
const authUseCase = new AuthUseCase(authRepository)

type MenuProps = {
  isMenuOpen: boolean
  headerHeight: number
}

function Menu({
  isMenuOpen,
  headerHeight
}: MenuProps) {
  const auth = useAuth()


  const handlerLogout = async () => {
    try {
      await authUseCase.signOut()
      auth.logout()

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <aside
      className={`w-96 fixed bg-secondary text-secondary z-20 overflow-y-auto select-none flex flex-col justify-between p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'left-0' : '-left-96 shadow-xl'}`}
      style={{ height: `calc(100vh - ${headerHeight}px)`, top: `${headerHeight}px` }}
    >
      {auth.user ? <PrincipalSection /> : <GuestSection />}

      <div className='flex justify-center items-center'>
        <Button
          className='bg-hover rounded p-2 m-1'
          onClick={handlerLogout}
        >
          <HiOutlineArrowLeftStartOnRectangle />
        </Button>

        <Button
          className='bg-hover rounded p-2 m-1'
        >
          <HiOutlineSun />
        </Button>

        <Button
          className='bg-hover rounded p-2 m-1'
        >
          <HiOutlineLanguage />
        </Button>
      </div>
    </aside>
  )
}

export { Menu }