'use client'

import { ScreenContextType } from '@/types/contextTypes'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export const ScreenContext = createContext<ScreenContextType>(null)

const ScreenProvider = ({ children }: { children: ReactNode }) => {
  const [windowSize, setWindowSize] = useState<{
    width?: number
    height?: number
  }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // handleRedirection()
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ScreenContext.Provider value={{ windowSize }}>
      {children}
    </ScreenContext.Provider>
  )
}

export const useScreenProvider = () => {
  const context = useContext(ScreenContext)

  if (!context) throw new Error("Use 'useScreenProvider' inside ScreenProvider")

  return context
}

export default ScreenProvider
