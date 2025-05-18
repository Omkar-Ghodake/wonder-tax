'use client'

import { useEffect, useState } from 'react'

interface SlidingTitleProps {
  titles: string[]
}

export default function SlidingTitle({ titles }: SlidingTitleProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('left')
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (titles.length <= 1) return

    const interval = setInterval(() => {
      setAnimate(true)

      setTimeout(() => {
        const nextIndex =
          direction === 'left'
            ? (index + 1) % titles.length
            : (index - 1 + titles.length) % titles.length

        setIndex(nextIndex)
        setDirection(direction === 'left' ? 'right' : 'left')
        setAnimate(false)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [index, direction, titles])

  return (
    <div className='relative w-40 h-6 overflow-hidden text-sm font-semibold text-[#0B6488] text-center'>
      <div
        className={`absolute w-full duration-300 ${
          animate
            ? direction === 'left'
              ? '-translate-x-full'
              : 'translate-x-full'
            : 'translate-x-0'
        }`}
        key={index}
      >
        {titles[index]}
      </div>
    </div>
  )
}
