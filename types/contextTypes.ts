import { Session } from 'next-auth'
import React from 'react'
import { LoadingStateType } from './dataTypes'

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
  userSession: any
  setUserSession: React.Dispatch<React.SetStateAction<any>>
  updateSession: () => void
  handleLogout: () => void
} | null

export type LoadingContextType = {
  loadingState: LoadingStateType
  setLoadingState: React.Dispatch<React.SetStateAction<LoadingStateType>>
} | null
