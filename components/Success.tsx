'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Success = ({
  redirectUrl,
  setShowSuccess,
  text,
  imgUrl,
  vdoUrl,
}: {
  redirectUrl: string
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>
  text?: string
  imgUrl?: string
  vdoUrl?: string
}) => {
  const router = useRouter()

  setTimeout(() => {
    setShowSuccess(false)
    router.push(redirectUrl)
  }, 2900)

  useEffect(() => {
    document?.body.classList.add('overflow-h-screen')
  }, [])

  return (
    <div className='fixed h-screen w-screen inset-0 flex flex-col text-lg font-semibold items-center justify-center bg-background'>
      {imgUrl ? (
        <div className=''>
          <Image src={imgUrl} alt='' className='object-cover' fill />
        </div>
      ) : (
        vdoUrl && (
          <div>
            <video width='320' height='240'>
              <source src={vdoUrl} type='video/mp4'></source>{' '}
            </video>
          </div>
        )
      )}

      {text && <p>{text}</p>}
    </div>
  )
}

export default Success
