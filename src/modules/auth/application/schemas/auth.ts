import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export const signUpSchema = signInSchema.extend({
  name: z.string().min(3)
})