'use client'

import AssistantHeader from '@/components/mobile/userInfoSteps/AssistantHeader'
import SelectOption from '@/components/mobile/userInfoSteps/SelectOption'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleContinue = () => {
    if (selectedOption === null) return

    if (selectedOption === 0) redirect('/mobile/login/create-user')

    redirect('/mobile/login/user-login')
  }

  return (
    <div className='p-5 space-y-5'>
      <AssistantHeader
        intro='Hi! We are Rajiv and Priya,your virtual AI assistants.'
        about=''
        description='Help us understand you so we can help you better in your tax'
      />

      <div className='space-y-5'>
        <div className='flex justify-center items-center'>
          <strong>You are a</strong>
        </div>

        <div className='w-full flex flex-col items-center space-y-4'>
          <div className='w-full space-y-4'>
            {['New User', 'Existing User'].map((str, idx) => (
              <SelectOption
                key={str}
                label={str}
                onClick={() => setSelectedOption(idx)}
                selected={selectedOption === idx}
              />
            ))}
          </div>

          <button
            className='font-semibold text-sm bg-[#53BB5F] px-6 py-3 text-white rounded-md'
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
