import { AxiosRepository } from '@/modules/auth/infrastructure/repositories/axios'
import { AuthUseCase } from '@/modules/auth/application/use_cases/auth'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useAuth } from '@/contexts/auth/useAuth'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { ErrorForm } from '@/components/ErrorForm'

const authRepository = new AxiosRepository()
const authUseCase = new AuthUseCase(authRepository)

function Form() {
  const auth = useAuth()

  const SignInSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  })
  type SignInSchemaType = z.infer<typeof SignInSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })


  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    try {
      const response = await authUseCase.signIn(data.email, data.password)
      auth.signIn(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex flex-col items-center justify-center'
    >
      <div className='w-full flex flex-col justify-center '>
        <label htmlFor='email' className='mb-1 sm:text-lg'>
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
        <label htmlFor='password' className='mb-1 sm:text-lg'>
          Password
        </label>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          placeholder='securePassword123'
          className='w-full'
          {...register('password')}
        />
        {errors.password ? <ErrorForm>{errors.password.message}</ErrorForm> : undefined}
      </div>

      <Button
        type='submit'
        className='bg-hover self-center mt-8'
      >
        Sign In
      </Button>
    </form>
  )
}

export { Form }