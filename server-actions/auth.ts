'use server'

import { auth, signIn, signOut } from '@/auth'

export const getUserSession = async () => {
  console.log('getting session...')

  const session = await auth()

  console.log('session:', session)
  return session
}

export const handleGoogleSignIn = async () => {
  await signIn('google')
}

export const handleAuthSignOut = async () => {
  console.log('signing out...')
  await signOut()
  console.log('signed out...')
}
