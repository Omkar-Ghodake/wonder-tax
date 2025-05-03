'use client'

import { MobileHomeStepsContextType } from '@/types/contextTypes'
import React, { createContext, ReactNode, useContext, useState } from 'react'

export const MobileHomeStepsContext =
  createContext<MobileHomeStepsContextType>(null)

const MobileHomeStepsProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<{ age?: string }>({
    age: undefined,
  })

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
