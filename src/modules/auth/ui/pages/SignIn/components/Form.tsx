import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

function Form() {
  return (
    <form
      action=''
      className='w-full flex flex-col items-center justify-center'
    >
      <div className='w-full flex flex-col justify-center '>
        <label htmlFor='email' className='mb-1 text-lg'>
          Email
        </label>
        <Input
          type='email'
          id='email'
          autoComplete='email'
          placeholder='johndoe@email.com'
          className=' w-full mb-4'
        />
      </div>
      <div className='w-full flex flex-col justify-center'>
        <label htmlFor='password' className='mb-1 text-lg'>
          Password
        </label>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          placeholder='securePassword123'
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
  )
}

export { Form }