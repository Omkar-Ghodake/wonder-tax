'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import SelectOption from './SelectOption'
import { useMobileHomeStepsProvider } from '@/context/MobileHomeStepsProvider'
import { redirect } from 'next/navigation'
import StepTopBar from './StepTopBar'
import StepHeader from './StepHeader'

const INCOME_SRC_OPTIONS: string[] = [
  'Salary or Pension',
  'Business or professional income',
  'Proprietorship business income',
  'Rental income from house',
  'Income from capital gains (Stocks, FnO)',
  'Other sources (Lottery/ Horse Races)',
]

const Step2 = () => {
  const [selectedIncomeSrc, setSelectedIncomeSrc] = useState<number | null>(
    null
  )

  const { userData, setUserData } = useMobileHomeStepsProvider()

  const handleContinue = () => {
    if (selectedIncomeSrc === null) return

    setUserData({ ...userData, age: INCOME_SRC_OPTIONS[selectedIncomeSrc] })
    console.log('userData:', userData)
    redirect('/mobile/userInfo/step3')
  }

  return (
    <div className='flex flex-col space-y-5'>
      <StepTopBar step={2} />

      <StepHeader
        title='What are your income sources?'
        description='Select all the income sources you have. This will help us decide which ITR will be most suitable for you.'
      />

      <div className='w-full flex flex-col items-center space-y-5'>
        <div className='w-full space-y-4'>
          {INCOME_SRC_OPTIONS.map((item, idx) => (
            <SelectOption
              key={item}
              label={item}
              selected={selectedIncomeSrc === idx}
              onClick={() => setSelectedIncomeSrc(idx)}
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

export default Step2
