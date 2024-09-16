import { UserEntity } from '@/modules/user/domain/entity'

export interface AuthRepository {
  signIn(email: string, password: string): Promise<UserEntity>
  signUp(email: string, password: string, name: string): Promise<UserEntity>
  signOut(): Promise<void>
}