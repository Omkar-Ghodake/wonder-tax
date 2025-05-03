'use client'

import { USER_INFO_STEPS } from '@/data/mobileHome'
import { useParams } from 'next/navigation'
import React from 'react'

const UserInfoStep = () => {
  const { step } = useParams()

  if (!step) return

  const ComponentToRender = USER_INFO_STEPS[step.toString()]

  return step && <div className='p-5'>{ComponentToRender}</div>
}

export default UserInfoStep
