import { UserEntity } from '@/modules/user/domain/entity'
import { AuthRepository } from '@/modules/auth/domain/repository'

import { axiosClient } from '@/api/client'

type SignInUpResponse = {
  status: number,
  message: string,
  data: UserEntity
}

export class AxiosRepository implements AuthRepository {
  async signIn(email: string, password: string): Promise<UserEntity> {
    const response = await axiosClient.post('/auth/sign-in', { email, password })
    const body: SignInUpResponse = response.data
    return body.data
  }

  async signUp(email: string, password: string, name: string): Promise<UserEntity> {
    const response = await axiosClient.post('/auth/sign-up', { email, password, name })
    const body: SignInUpResponse = response.data
    return body.data
  }

  async signOut(): Promise<void> {
    await axiosClient.post('/auth/sign-out')
  }
}