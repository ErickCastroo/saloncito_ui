import { NavLink } from 'react-router-dom'
import { Form } from '@/modules/auth/ui/pages/SignUp/components/Form'

function InfoContainer() {
  return (
    <div className='bg-secondary text-secondary w-full h-5/6 md:w-1/2 rounded md:rounded-none md:rounded-tl md:rounded-bl relative flex flex-col justify-center items-center'>
      <div className='absolute left-0 top-0'>
        <NavLink to='/sign-in' className='flex justify-start self-start mt-3 ml-4 hover:underline hover:underline-offset-2'>Sign In</NavLink>
      </div>
      <div className='h-full w-10/12 sm:w-8/12 md:w-9/12 lg:w-7/12 xl:w-6/12 flex flex-col items-center justify-center'>
        <h1 className='mb-2 text-4xl text-center font-bold'>
          Sign Up
        </h1>
        <span className='mb-6 text-center'>Register to start learning</span>
        <Form />
      </div>
    </div>
  )
}

export { InfoContainer }