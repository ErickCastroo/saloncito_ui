import { AuthRepository } from '@/modules/auth/domain/repository'

import { axiosClient } from '@/api/client'

export class AxiosRepository implements AuthRepository {
  async signIn(email: string, password: string): Promise<object> {
    const response = await axiosClient.post('/auth/sign-in', { email, password })
    return response.data
  }

  async signUp(email: string, password: string, name: string): Promise<object> {
    const response = await axiosClient.post('/auth/sign-up', { email, password, name })
    return response.data
  }

  async signOut(): Promise<void> {
    await axiosClient.post('/auth/sign-out')
  }
}