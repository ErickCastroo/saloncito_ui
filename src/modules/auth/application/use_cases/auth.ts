import { UserEntity } from '@/modules/user/domain/entity'
import { AuthRepository } from '@/modules/auth/domain/repository'

import { signInSchema, signUpSchema } from '@/modules/auth/application/schemas/auth'

export class AuthUseCase {
  private readonly authRepository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async signIn(email: string, password: string): Promise<UserEntity> {
    signInSchema.parse({ email, password })

    return this.authRepository.signIn(email, password)
  }

  async signUp(email: string, password: string, name: string): Promise<UserEntity> {
    signUpSchema.parse({ email, password, name })

    return this.authRepository.signUp(email, password, name)
  }

  async signOut(): Promise<void> {
    return this.authRepository.signOut()
  }
}