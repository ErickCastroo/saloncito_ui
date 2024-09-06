import { AuthEntity } from '@/modules/auth/domain/entity'

export class AuthValue implements AuthEntity {
  readonly name?: string
  readonly email: string
  readonly password: string

  constructor(email: string, password: string, name?: string) {
    if (!this.isValidEmail(email)) {
      throw new Error('invalid email')
    }
    this.email = email

    if (!this.isValidPassword(password)) {
      throw new Error('invalid password')
    }
    this.password = password

    if (name && !this.isValidName(name)) {
      throw new Error('invalid name')
    }
    this.name = name
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  private isValidPassword(password: string): boolean {
    return password.length >= 8
  }

  private isValidName(name: string): boolean {
    return name.length >= 3
  }
}