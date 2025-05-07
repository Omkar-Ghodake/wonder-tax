'use client'

import { getUserSession, handleAuthSignOut } from '@/server-actions/auth'
import { SessionContextType } from '@/types/contextTypes'
import { Session } from 'next-auth'
import { usePathname } from 'next/navigation'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export const SessionContext = createContext<SessionContextType>(null)

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [userSession, setUserSession] = useState<Session | null>(null)

  const pathname = usePathname()

  const updateSession = async () => {
    console.log('running updateSession...')

    const session = await getUserSession()
    console.log('updating session:', session)
    setUserSession(session)
  }

  const handleLogout = async () => {
    console.log('logging out...')

    setUserSession(null)
    console.log('logged out...')
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
