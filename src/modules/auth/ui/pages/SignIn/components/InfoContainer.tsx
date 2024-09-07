import { NavLink } from 'react-router-dom'
import { Form } from '@/modules/auth/ui/pages/SignIn/components/Form'

function InfoContainer() {
  return (
    <div className='bg-secondary text-secondary w-full h-5/6 md:w-1/2 rounded md:rounded-none md:rounded-tr md:rounded-br relative flex flex-col items-center overflow-y-auto'>
      <div className='absolute right-0 top-0'>
        <NavLink
          to='/sign-up'
          className='flex justify-end self-end mt-3 mr-4 hover:underline hover:underline-offset-2'
        >
          Sign Up
        </NavLink>
      </div>
      <div className='flex-grow flex flex-col items-center justify-center h-full w-10/12 sm:w-8/12 md:w-9/12 lg:w-7/12 xl:w-6/12'>
        <div className='my-6 text-center'>
          <h1 className='mb-2 text-2xl sm:text-4xl font-bold'>
            Sign In
          </h1>
          <span>Join to Saloncito to start studying</span>
        </div>
        <Form />
      </div>
    </div>
  )
}

export { InfoContainer }