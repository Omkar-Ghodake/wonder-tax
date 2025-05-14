'use client'

import { getUserSession, handleAuthSignOut } from '@/server-actions/userAuth'
import { SessionContextType } from '@/types/contextTypes'
import { Session } from 'next-auth'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export const SessionContext = createContext<SessionContextType>(null)

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [userSession, setUserSession] = useState<any>(null)

  const updateSession = async () => {
    const session = await getUserSession()
    setUserSession(session)
  }

  const handleLogout = async () => {
    setUserSession(null)
    await handleAuthSignOut()
  }

  useEffect(() => {
    updateSession()
  }, [])

  return (
    <SessionContext.Provider
      value={{ userSession, setUserSession, updateSession, handleLogout }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSessionProvider = () => {
  const context = useContext(SessionContext)

  if (!context)
    throw new Error("Use 'useSessionProvider' inside 'SessionProvider'")

  return context
}

export default SessionProvider
