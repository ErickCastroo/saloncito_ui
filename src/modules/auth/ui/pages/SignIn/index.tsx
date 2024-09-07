import { BrandContainer } from '@/modules/auth/ui/pages/SignIn/components/BrandContainer'
import { InfoContainer } from '@/modules/auth/ui/pages/SignIn/components/InfoContainer'

function SignIn() {
  return (
    <div className='p-1 w-full h-full flex justify-center items-center'>
      <div className='w-10/12 h-full flex items-center justify-center'>
        <BrandContainer />
        <InfoContainer />
      </div>
    </div>
  )
}

export { SignIn }