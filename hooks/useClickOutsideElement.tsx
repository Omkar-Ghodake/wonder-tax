'use client'

import { RefObject, useEffect } from 'react'

const useClickOutsideElement = <T extends HTMLElement | null>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = ref.current

      if (!element || element.contains(event.target as Node) || null) return

      handler(event)
    }

    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}

export default useClickOutsideElement
