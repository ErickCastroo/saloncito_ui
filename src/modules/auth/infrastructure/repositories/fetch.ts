import { UserEntity } from '@/modules/user/domain/entity'
import { AuthRepository } from '@/modules/auth/domain/repository'

import { Api } from '@/constants/api'

type SignInUpResponse = {
  status: number,
  message: string,
  data: UserEntity
}

export class FetchRepository implements AuthRepository {
  async signIn(email: string, password: string): Promise<UserEntity> {
    const response = await fetch(`${Api.HOST}/auth/sign-in`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      throw new Error('Invalid credentials')
    }

    const body: SignInUpResponse = await response.json()
    return body.data
  }

  async signUp(email: string, password: string, name: string): Promise<UserEntity> {
    const response = await fetch(`${Api.HOST}/auth/sign-up`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    })

    if (!response.ok) {
      throw new Error('Invalid credentials')
    }

    const body: SignInUpResponse = await response.json()
    return body.data
  }

  async signOut(): Promise<void> {
    await fetch(`${Api.HOST}/auth/sign-out`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}