import { NavLink } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

function SignUp() {
  return (
    <div className='p-1 w-full h-screen flex justify-center items-center'>
      <div className='w-10/12 h-full flex items-center justify-center'>
        {/* Cajita 1 */}
        <div className='bg-secondary text-secondary w-full h-5/6 md:w-1/2 relative flex flex-col justify-center items-center rounded-tl rounded-bl '>
          <div className='absolute left-0 top-0'>
            <NavLink to='/sign-in' className='flex justify-start self-start mt-3 ml-4 hover:underline hover:underline-offset-2'>Sign In</NavLink>
          </div>
          <div className='h-full w-10/12 sm:w-8/12 md:w-9/12 lg:w-7/12 xl:w-6/12 flex flex-col items-center justify-center'>
            <h1 className='mb-2 text-4xl text-center font-bold'>
              Sign Up
            </h1>
            <span className='mb-6 text-center'>Sign Up</span>
            <form
              action=''
              className='w-full flex flex-col items-center justify-center'
            >
              <div className='w-full flex flex-col justify-center'>
                <label htmlFor="name" className='mb-1 text-lg'>
                  Name
                </label>
                <Input
                  type='text'
                  name='name'
                  placeholder='John Doe'
                  className=' w-full mb-4'
                />
              </div>
              <div className='w-full flex flex-col justify-center'>
                <label htmlFor="email" className='mb-1 text-lg'>
                  Email
                </label>
                <Input
                  type='email'
                  name='email'
                  placeholder='johndoe@email.com'
                  className=' w-full mb-4'
                />
              </div>
              <div className='w-full flex flex-col justify-center'>
                <label htmlFor="password" className='mb-1 text-lg'>
                  Password
                </label>
                <Input
                  type='password'
                  name='password'
                  placeholder='********'
                  className=' w-full mb-4'
                />
              </div>
              <div className='w-full flex flex-col justify-center'>
                <label htmlFor="confirmPassword" className='mb-1 text-lg'>
                  Confirm Password
                </label>
                <Input
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  className=' w-full mb-4'
                />
              </div>
              <Button
                type='submit'
                className='bg-hover self-center mt-4'
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
        {/* Cajita 2 */}
        <div className='bg-tertiary hidden w-1/2 h-5/6 md:flex items-center justify-center rounded-tr rounded-br'>
          <img className='w-72 h-72' src='https://picsum.photos/200' alt='logo' />
        </div>
      </div>
    </div>
  )
}

export { SignUp }