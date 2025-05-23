'use client'

import { useSessionProvider } from '@/context/SessionProvider'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Profile = () => {
  const { userSession } = useSessionProvider()
  const router = useRouter()

  useEffect(() => {
    if (!userSession) {
      router.push('/mobile/login')
    }
  }, [userSession])

  console.log('userSession:', userSession)

  return userSession ? (
    <div className='space-y-5'>
      <h1 className='text-center text-2xl font-bold'>Profile</h1>

      <p className=''>Welcome!</p>

      <div className='flex items-center space-x-5'>
        {userSession?.user?.image && (
          <img src={userSession?.user?.image} alt='' className='w-20 h-20' />
        )}
        <p className='text-lg font-semibold'>
          {userSession?.user?.name ||
            userSession?.user?.username ||
            userSession?.username}
        </p>
      </div>

      <p className=''>
        <span className='font-semibold'>ID:</span>
        {userSession?.user?.id || userSession?.id}
      </p>

      <p>
        <span className='font-semibold'>Email:</span>
        {userSession?.user?.email || userSession?.email}
      </p>
    </div>
  ) : (
    <div className='text-2xl font-bold text-center'>
      Please login to see profile
    </div>
  )
}

export default Profile
