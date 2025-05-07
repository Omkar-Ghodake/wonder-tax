import { Session } from 'next-auth'
import React from 'react'

export type ScreenContextType = {
  windowSize: {
    width?: number
    height?: number
  }
} | null

export type MobileHomeStepsContextType = {
  userData: any
  setUserData: React.Dispatch<React.SetStateAction<any>>
} | null

export type SessionContextType = {
  userSession: Session | null
  setUserSession: React.Dispatch<React.SetStateAction<Session | null>>
  updateSession: () => void
  handleLogout: () => void
} | null
