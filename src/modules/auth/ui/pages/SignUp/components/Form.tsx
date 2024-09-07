import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { ErrorForm } from '@/components/ErrorForm'

function Form() {
  const SignUpSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters long'
    }),
    confirmPassword: z.string().min(8, {
      message: 'Password must be at least 8 characters long'
    }).refine((data: string): boolean => {
      return data === getValues().password
    }, {
      message: 'Passwords do not match'
    })
  })
  type SignUpSchemaType = z.infer<typeof SignUpSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          className='w-full'
          {...register('name')}
        />
        {errors.name ? <ErrorForm>{errors.name.message}</ErrorForm> : undefined}
      </div>
      <div className='w-full flex flex-col justify-center mt-4'>
        <label htmlFor='email' className='mb-1 text-lg'>
          Email
        </label>
        <Input
          type='email'
          id='email'
          autoComplete='email'
          placeholder='johndoe@email.com'
          className='w-full'
          {...register('email')}
        />
        {errors.email ? <ErrorForm>{errors.email.message}</ErrorForm> : undefined}
      </div>
      <div className='w-full flex flex-col justify-center mt-4'>
        <label htmlFor='password' className='mb-1 text-lg'>
          Password
        </label>
        <Input
          type='password'
          id='password'
          autoComplete='new-password'
          placeholder='securePassword123'
          className='w-full'
          {...register('password')}
        />
        {errors.password ? <ErrorForm>{errors.password.message}</ErrorForm> : undefined}
      </div>
      <div className='w-full flex flex-col justify-center mt-4'>
        <label htmlFor='confirmPassword' className='mb-1 text-lg'>
          Confirm Password
        </label>
        <Input
          type='password'
          id='confirmPassword'
          autoComplete='new-password'
          placeholder='securePassword123'
          className='w-full'
          {...register('confirmPassword')}
        />
        {errors.confirmPassword ? <ErrorForm>{errors.confirmPassword.message}</ErrorForm> : undefined}
      </div>
      <Button
        type='submit'
        className='bg-hover self-center mt-8'
      >
        Sign Up
      </Button>
    </form>
  )
}

export { Form }