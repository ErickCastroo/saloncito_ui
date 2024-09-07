import { NavLink } from 'react-router-dom'
import { Form } from '@/modules/auth/ui/pages/SignUp/components/Form'

function InfoContainer() {
  return (
    <div className='bg-secondary text-secondary w-full h-5/6 md:w-1/2 rounded md:rounded-none md:rounded-tl md:rounded-bl relative flex flex-col items-center overflow-y-auto'>
      <div className='absolute left-0 top-0'>
        <NavLink
          to='/sign-in'
          className='flex justify-start self-start mt-3 ml-4 hover:underline hover:underline-offset-2'
        >
          Sign In
        </NavLink>
      </div>
      <div className='flex-grow flex flex-col items-center justify-center w-10/12 sm:w-8/12 md:w-9/12 lg:w-7/12 xl:w-6/12'>
        <div className='my-6 text-center'>
          <h1 className='mb-2 text-2xl sm:text-4xl font-bold'>
            Sign Up
          </h1>
          <span>Register to start learning</span>
        </div>
        <Form />
      </div>
    </div>
  )
}

export { InfoContainer }
