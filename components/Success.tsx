'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Success = ({
  redirectUrl,
  setShowSuccess,
  text,
}: {
  redirectUrl: string
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>
  text?: string
}) => {
  document.body.classList.add('overflow-h-screen')

  const router = useRouter()

  setTimeout(() => {
    setShowSuccess(false)
    router.push(redirectUrl)
  }, 1500)

  return (
    <div className='fixed h-screen w-screen inset-0 flex flex-col text-lg font-semibold items-center justify-center bg-background'>
      <Image src={'/mobile/Success1.gif'} width={150} height={150} alt='' />

      {text && <p>{text}</p>}
    </div>
  )
}

export default Success
