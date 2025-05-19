'use client'

import { LoadingContextType } from '@/types/contextTypes'
import { LoadingStateType } from '@/types/dataTypes'
import React, { createContext, ReactNode, useContext, useState } from 'react'

const LoadingContext = createContext<LoadingContextType>(null)

const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loadingState, setLoadingState] = useState<LoadingStateType>({
    loader: null,
    msg: null,
  })

  return (
    <LoadingContext.Provider value={{ loadingState, setLoadingState }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoadingProvider = () => {
  const context = useContext(LoadingContext)

  if (!context)
    throw new Error("Use 'useLoadingProvider' inside Loading Provider context")

  return context
}

export default LoadingProvider
