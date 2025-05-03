'use client'

import { ScreenContextType } from '@/types/contextTypes'
import { redirect, usePathname } from 'next/navigation'
import React, {
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

  const pathname = usePathname()

  const handleRedirection = () => {
    if (typeof window === 'undefined') return

    if (window.innerWidth >= 768) {
      if (pathname.includes('/m/')) {
        redirect('/')
      }
    } else if (window.innerWidth < 768) {
      if (!pathname.includes('/m/')) {
        // redirect('/m')
        console.log('redirecting to m....')
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // handleRedirection()
    }

    console.log('dimensions:', window.innerWidth, window.innerHeight)

    window.addEventListener('resize', handleResize)

    handleResize()
    // handleRedirection()

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
