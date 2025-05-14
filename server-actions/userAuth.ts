'use server'

import { auth, signIn, signOut } from '@/auth'
import { ServerAction } from '@/types/functionTypes'
import { createJWT, saltAndHashPassword, verifyPassword } from './utils'
import dbConnect, { createUser, getUserFromDb } from './db'

export const getUserSession = async () => {
  const session = await auth()

  return session
}

export const handleUserRegister: ServerAction = async ({
  username,
  phone,
  email,
  password,
}: {
  username: string
  phone: string
  email: string
  password: string
}) => {
  try {
    const res = await dbConnect()
    if (!res?.success) return res

    if (!email || !password)
      return {
        success: false,
        message: email ? 'Password is required' : 'Email is required.',
      }

    if (!username || !phone)
      return {
        success: false,
        message: username ? 'Phone is required' : 'Username is required.',
      }

    const encryptedPassword = await saltAndHashPassword(password)

    const existingUser = await getUserFromDb({ email })
    if (existingUser) return { success: false, message: 'User already exists.' }

    const newUser = await createUser({
      username,
      phone,
      email,
      password: encryptedPassword,
    })

    if (!newUser)
      return { success: false, message: 'User registration failed.' }

    return { success: true, message: 'Registration successful.' }
  } catch (error) {
    console.error('error:', error)
    return { success: false, message: 'Registration failed.' }
  }
}

export const handleGoogleSignIn: ServerAction = async () => {
  const res = await dbConnect()
  if (!res?.success) return res

  await signIn('google')
}

export const handleCredentialsSignIn: ServerAction = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const res = await dbConnect()
    if (!res?.success) return res

    if (!email || !password)
      return {
        success: false,
        message: email ? 'Password is required' : 'Email is required.',
      }

    const existingUser = await getUserFromDb({ email })
    if (!existingUser)
      return { success: false, message: 'Invalid credentials.' }

    const isPasswordValid = await verifyPassword(
      password,
      existingUser.password
    )
    if (!isPasswordValid)
      return { success: false, message: 'Invalid credentials.' }

    const sendUser = {
      username: existingUser.username,
      phone: existingUser.phone,
      email: existingUser.email,
      role: existingUser.role,
    }

    const token = await createJWT({ email, role: 'user' })

    return {
      success: true,
      message: 'Sign in successful',
      data: JSON.parse(JSON.stringify({ user: sendUser, token })),
    }
  } catch (error) {
    return { success: false, message: 'Login failed.' }
  }
}

export const handleAuthSignOut = async () => {
  await signOut()
}
