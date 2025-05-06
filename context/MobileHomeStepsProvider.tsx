'use client'

import { MobileHomeStepsContextType } from '@/types/contextTypes'
import { usePathname } from 'next/navigation'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export const MobileHomeStepsContext =
  createContext<MobileHomeStepsContextType>(null)

const MobileHomeStepsProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<{
    age?: string
    incomeSrc?: string | string[]
  }>({
    age: undefined,
    incomeSrc: undefined,
  })

  const pathname = usePathname()

  // useEffect(() => {
  //   console.log('userData:', userData)
  // }, [pathname])

  return (
    <MobileHomeStepsContext.Provider value={{ userData, setUserData }}>
      {children}
    </MobileHomeStepsContext.Provider>
  )
}

export const useMobileHomeStepsProvider = () => {
  const context = useContext(MobileHomeStepsContext)

  if (!context)
    throw new Error(
      'Use useMobileHomeStepsProvider inside its MobileHomeStepsProvider'
    )

  return context
}

export default MobileHomeStepsProvider
