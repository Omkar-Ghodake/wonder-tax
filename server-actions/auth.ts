'use server'

import { auth, signIn, signOut } from '@/auth'

export const getUserSession = async () => {
  const session = await auth()

  return session
}

export const handleGoogleSignIn = async () => {
  await signIn('google')
}

export const handleAuthSignOut = async () => {
  await signOut()
}
