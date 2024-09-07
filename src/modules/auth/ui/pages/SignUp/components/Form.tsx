import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

function Form() {
  return (
    <form
      action=''
      className='w-full flex flex-col items-center justify-center'
    >
      <div className='w-full flex flex-col justify-center'>
        <label htmlFor='name' className='mb-1 text-lg'>
          Name
        </label>
        <Input
          type='text'
          id='name'
          autoComplete='name'
          placeholder='John Doe'
          className=' w-full mb-4'
        />
      </div>
      <div className='w-full flex flex-col justify-center'>
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
          autoComplete='new-password'
          placeholder='securePassword123'
          className=' w-full mb-4'
        />
      </div>
      <div className='w-full flex flex-col justify-center'>
        <label htmlFor='confirmPassword' className='mb-1 text-lg'>
          Confirm Password
        </label>
        <Input
          type='password'
          id='confirmPassword'
          autoComplete='new-password'
          placeholder='securePassword123'
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
  )
}

export { Form }