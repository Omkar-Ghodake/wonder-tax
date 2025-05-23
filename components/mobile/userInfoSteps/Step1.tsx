'use client'

import { useMobileHomeStepsProvider } from '@/context/MobileHomeStepsProvider'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import SelectOption from './SelectOption'
import AssistantHeader from './AssistantHeader'

const AGE_OPTIONS: string[] = [
  'Below 60 years',
  'Between 60 and 80 years (Senior)',
  'Above 80 years (Super Citizen)',
]

const Step1 = ({ handleContinue }: { handleContinue: () => void }) => {
  const [selectedAge, setSelectedAge] = useState<string[]>([])

  const { userData, setUserData } = useMobileHomeStepsProvider()

  // const handleContinue = () => {
  //   if (selectedAge.length < 1) return

  //   setUserData({ ...userData, age: selectedAge[0] })
  //   console.log('userData:', userData)
  //   redirect('/mobile/userInfo/step2')
  // }

  return (
    <div className='space-y-5'>
      <AssistantHeader
        intro='Hi! We are AI tax experts Rajiv and Priya.'
        about='We will collect information from you to help calculate your taxes.'
        description='Based on you responses we will share complete tax computations under
          the Existing Regime and the New Regime on the last step'
      />

      <div className='w-full flex flex-col items-center space-y-5'>
        <span className='text-center font-bold'>What is your age?</span>

        <div className='w-full space-y-4'>
          <SelectOption options={AGE_OPTIONS} setOptions={setSelectedAge} />
        </div>

        <button
          className='font-semibold text-sm bg-[#53BB5F] px-6 py-3 text-white rounded-md'
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default Step1
