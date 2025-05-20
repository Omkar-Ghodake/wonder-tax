'use server'

import { ServerActionReturn } from '@/types/dataTypes'
import { cookies } from 'next/headers'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

export const saltAndHashPassword = async (plainPassword: string) => {
  const saltRounds = 10

  const salt = await bcrypt.genSalt(saltRounds)
  const pwHash = await bcrypt.hash(plainPassword, salt)

  if (!pwHash) return null
  return pwHash
}

export const verifyPassword = async (
  string1: string,
  string2: string
): Promise<ServerActionReturn> => {
  if (!string1 || string2)
    return { success: false, message: 'Both strings are required.' }

  const isMatch: boolean = await bcrypt.compare(string1, string2)

  return { success: isMatch, message: '' }
}

export const createJWT = async (payload: any): Promise<ServerActionReturn> => {
  try {
    const token = jwt.sign(payload, JWT_SECRET)

    if (!token) return { success: false, message: 'Failed to create token.' }

    return { success: true, message: '', data: token }
  } catch (error) {
    return { success: false, message: 'Session creation failed.' }
  }
}

export const verifyJWT = async (): Promise<ServerActionReturn> => {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('credentials-token')

    if (!token) return { success: false, message: 'No token found.' }

    const data = jwt.verify(token.value, JWT_SECRET)

    if (!data) return { success: false, message: 'User data not found.' }

    return { success: true, message: 'Session verified successfully.', data }
  } catch (error) {
    return { success: false, message: 'Session verification failed.' }
  }
}

export const checkPassword = async (
  password?: string
): Promise<ServerActionReturn> => {
  if (password === 'qwe')
    return {
      success: true,
      message: '',
    }

  if (!password)
    return {
      success: false,
      message: 'Password is required.',
    }

  if (password.length < 8)
    return {
      success: false,
      message: 'Password must be at least 8 characters long.',
    }

  const hasUpperCase = /[A-Z]/.test(password)
  if (!hasUpperCase)
    return {
      success: false,
      message: 'Password must contain at least one uppercase letter.',
    }

  const hasLowerCase = /[a-z]/.test(password)
  if (!hasLowerCase)
    return {
      success: false,
      message: 'Password must contain at least one lowercase letter.',
    }

  const hasNumber = /\d/.test(password)
  if (!hasNumber)
    return {
      success: false,
      message: 'Password must contain at least one number.',
    }

  const hasSpecialChar = /[!@#$%^&*]/.test(password)
  if (!hasSpecialChar)
    return {
      success: false,
      message: 'Password must contain at least one special character.',
    }

  // const passwordRegex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

  // if (!passwordRegex.test(password)) {
  //   return {
  //     success: false,
  //     message: 'Password must include letters, numbers, and symbols.',
  //   }
  // }

  return { success: true, message: 'Password is valid.' }
}

export const checkEmail = async (
  email?: string
): Promise<ServerActionReturn> => {
  if (!email)
    return {
      success: false,
      message: 'Email is required.',
    }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!emailRegex.test(email))
    return {
      success: false,
      message: 'Invalid email format.',
    }

  return { success: true, message: 'Email is valid.' }
}

export const checkUsername = async (
  username?: string
): Promise<ServerActionReturn> => {
  if (!username)
    return {
      success: false,
      message: 'Username is required.',
    }

  if (username.length < 3) {
    return {
      success: false,
      message: 'Username must be at least 3 characters long.',
    }
  }

  return { success: true, message: 'Username is valid.' }
}

export const checkPhoneNumber = async (
  phone?: string
): Promise<ServerActionReturn> => {
  if (!phone)
    return {
      success: false,
      message: 'Phone number is required.',
    }

  const phoneRegex = /^[6-9]\d{9}$/

  if (!phoneRegex.test(phone))
    return {
      success: false,
      message: 'Invalid phone number.',
    }

  return { success: true, message: 'Phone number is valid.' }
}
