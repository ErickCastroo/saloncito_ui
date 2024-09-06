import { NavLink } from 'react-router-dom'

function SignIn() {
  return (
    <div className='p-1 w-full h-screen flex justify-center items-center '>
      <div className='w-10/12 h-full flex items-center justify-center '>
        {/* Cajita 1 */}
        <div className=' hidden bg-secondary w-1/2 h-5/6 md:flex items-center justify-center'>
          <img className='w-72 h-72' src='https://picsum.photos/200' alt='logo' />
        </div>
        
        {/* Cajita 2 */}
        <div className='w-full h-5/6 md:w-1/2 relative flex flex-col justify-center items-center bg dark:bg-zinc-900'>
          <div className='absolute right-0 top-0'>
            <NavLink to='/sign-up' className='flex justify-end self-end m-2 mr-4 hover:underline hover:underline-offset-2'>Sign Up</NavLink>
          </div>
          <div className='h-full w-10/12 sm:w-8/12 md:w-9/12 lg:w-7/12 xl:w-6/12 flex flex-col items-center justify-center'>
            <h1 className='mb-2 text-4xl text-center font-bold'>
              Sign In
            </h1>
            <span className='mb-6 text-center'>Sign In</span>
            <form action=''>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SignIn }