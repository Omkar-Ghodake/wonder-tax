'use client'

import { useMobileHomeStepsProvider } from '@/context/MobileHomeStepsProvider'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import SelectOption from './SelectOption'

const AGE_OPTIONS: string[] = [
  'Below 60 years',
  'Between 60 and 80 years (Senior)',
  'Above 80 years (Super Citizen)',
]

const Step1 = () => {
  const [selectedAge, setSelectedAge] = useState<number | null>(null)

  const { userData, setUserData } = useMobileHomeStepsProvider()

  const handleContinue = () => {
    if (selectedAge === null) return

    setUserData({ ...userData, age: AGE_OPTIONS[selectedAge] })
    redirect('/mobile/userInfo/step2')
  }

  return (
    <div className='space-y-5'>
      <div className='flex items-center space-x-5'>
        <Image src={'/mobile/user_male.png'} alt='' height={80} width={80} />
        <Image src={'/mobile/user_female.png'} alt='' height={80} width={80} />
      </div>

      <div className='text-sm'>
        <p>
          <strong>Hi! We are AI tax experts Rajiv and Priya.</strong> <br /> We
          will collect information from you to help calculate your taxes.
        </p>
        <br />
        <p>
          Based on you responses we will share complete tax computations under
          the Existing Regime and the New Regime on the last step
        </p>
      </div>

      <div className='w-full flex flex-col items-center space-y-5'>
        <span className='text-center font-bold'>What is your age?</span>

        <div className='w-full space-y-4'>
          {AGE_OPTIONS.map((item, idx) => (
            <SelectOption
              key={item}
              label={item}
              selected={selectedAge === idx}
              onClick={() => setSelectedAge(idx)}
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
  )
}

export default Step1
