'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const ScreenRedirect = () => {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (isMobile) {
      if (!pathname.includes('/mobile')) {
        router.replace('/mobile')
      }
    } else {
      if (pathname.includes('/mobile')) {
        router.replace('/')
      }
    }
  }, [])

  return null
}

export default ScreenRedirect
