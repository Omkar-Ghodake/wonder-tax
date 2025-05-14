'use server'

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

export const verifyPassword = async (string1: string, string2: string) => {
  const isMatch = await bcrypt.compare(string1, string2)

  return isMatch
}

export const createJWT = async (payload: any) => {
  try {
    const token = jwt.sign(payload, JWT_SECRET)

    return token
  } catch (error) {
    return { success: false, message: 'Session creation failed.' }
  }
}
