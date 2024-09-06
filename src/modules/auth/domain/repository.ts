export interface AuthRepository {
  signIn(email: string, password: string): Promise<object>
  signUp(email: string, password: string, name: string): Promise<object>
  signOut(): Promise<void>
}