import { NavLink } from 'react-router-dom'
import { Form } from '@/modules/auth/ui/pages/SignIn/components/Form'

function InfoContainer() {
  return (
    <div className='bg-secondary text-secondary w-full h-5/6 md:w-1/2 relative flex flex-col justify-center items-center rounded-tr rounded-br'>
      <div className='absolute right-0 top-0'>
        <NavLink to='/sign-up' className='flex justify-end self-end mt-3 mr-4 hover:underline hover:underline-offset-2'>Sign Up</NavLink>
      </div>
      <div className='h-full w-10/12 sm:w-8/12 md:w-9/12 lg:w-7/12 xl:w-6/12 flex flex-col items-center justify-center'>
        <h1 className='mb-2 text-4xl text-center font-bold'>
          Sign In
        </h1>
        <span className='mb-6 text-center'>Join to Saloncito to start studying</span>
        <Form />
      </div>
    </div>
  )
}

export { InfoContainer }