import { InfoContainer } from '@/modules/auth/ui/pages/SignUp/components/InfoContainer'
import { BrandContainer } from '@/modules/auth/ui/pages/SignUp/components/BrandContainer'

function SignUp() {
  return (
    <div className='p-1 w-full h-screen flex justify-center items-center'>
      <div className='w-10/12 h-full flex items-center justify-center'>
        <InfoContainer />
        <BrandContainer />
      </div>
    </div>
  )
}

export { SignUp }