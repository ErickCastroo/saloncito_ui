import { AuthRepository } from '@/modules/auth/domain/repository'

import { signInSchema, signUpSchema } from '@/modules/auth/application/schemas/auth'

export class AuthUseCase {
  readonly authRepository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async signIn(email: string, password: string): Promise<object> {
    signInSchema.parse({ email, password })

    return this.authRepository.signIn(email, password)
  }

  async signUp(email: string, password: string, name: string): Promise<object> {
    signUpSchema.parse({ email, password, name })

    return this.authRepository.signUp(email, password, name)
  }

  async signOut(): Promise<void> {
    return this.authRepository.signOut()
  }
}