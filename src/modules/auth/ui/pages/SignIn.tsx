import { NavLink } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

function SignIn() {
  return (
    <div className='p-1 w-full h-full flex justify-center items-center'>
      <div className='w-10/12 h-full flex items-center justify-center'>
        {/* Cajita 1 */}
        <div className='bg-tertiary hidden w-1/2 h-5/6 md:flex items-center justify-center rounded-tl rounded-bl'>
          <img className='w-72 h-72' src='https://picsum.photos/200' alt='logo' />
        </div>

        {/* Cajita 2 */}
        <div className='bg-secondary text-secondary w-full h-5/6 md:w-1/2 relative flex flex-col justify-center items-center rounded-tr rounded-br'>
          <div className='absolute right-0 top-0'>
            <NavLink to='/sign-up' className='flex justify-end self-end mt-3 mr-4 hover:underline hover:underline-offset-2'>Sign Up</NavLink>
          </div>
          <div className='h-full w-10/12 sm:w-8/12 md:w-9/12 lg:w-7/12 xl:w-6/12 flex flex-col items-center justify-center'>
            <h1 className='mb-2 text-4xl text-center font-bold'>
              Sign In
            </h1>
            <span className='mb-6 text-center'>Sign In</span>
            <form
              action=''
              className='w-full flex flex-col items-center justify-center'
            >
              <div className='w-full flex flex-col justify-center '>
                <label htmlFor="email" className='mb-1 text-lg'>
                  Email
                </label>
                <Input
                  type='email'
                  name='email'
                  placeholder='Email'
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
                  placeholder='Password'
                  className=' w-full mb-4'
                />
              </div>

              <Button
                type='submit'
                className='bg-hover self-center mt-4'
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SignIn }