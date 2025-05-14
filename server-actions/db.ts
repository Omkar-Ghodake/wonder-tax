'use server'

import User from '@/models/User'
import { ServerAction } from '@/types/functionTypes'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

let connectionStatus = 0

const dbConnect: ServerAction = async () => {
  try {
    if (!MONGODB_URI)
      return { success: false, message: 'MongoDB URI is not defined.' }

    if (connectionStatus) {
      console.log('Using existing connection...')
      return { success: true, message: 'Using existing connection.' }
    }

    const conn = await mongoose.connect(MONGODB_URI)

    if (conn.connections[0].readyState === 2) {
      console.log('Connecting to MongoDB...')
    }

    connectionStatus = conn.connections[0].readyState

    if (connectionStatus === 1) console.log('MongoDB connected successfully.')
    return { success: true, message: 'MongoDB connected successfully.' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Failed to connect to Mongo.' }
  }
}

type GetUserFromDBType =
  | { email: string }
  | { username: string }
  | { phone: string }

export const getUserFromDb = async (obj: GetUserFromDBType) => {
  const res = await dbConnect()
  if (!res?.success) return res

  let user = await User.findOne(obj)

  return user
}

export const createUser = async (data: any) => {
  console.log('data:', data)

  const res = await dbConnect()
  if (!res?.success) {
    console.log('MongoDB connection failed.')
    return res
  }

  let user = await User.create(data)
  console.log('uyser:')
  console.log(user)
  return user
}

export default dbConnect
