'use client'

import { useMobileHomeStepsProvider } from '@/context/MobileHomeStepsProvider'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import AssistantHeaderSm from './AssistantHeaderSm'
import SelectOption from './SelectOption'

const INCOME_SRC_OPTIONS: string[] = [
  'Salary or Pension income',
  'Business or professional income',
  'Income from house property (Rent / Housing loan)',
  'Income from capital gain (Stocks, FnO)',
  'Income from other sources (Bank interest / Dividend)',
  'Foreign Income',
]

const Step2 = ({ handleContinue }: { handleContinue: () => void }) => {
  const [selectedIncomeSrc, setSelectedIncomeSrc] = useState<string[]>([])

  const { userData, setUserData } = useMobileHomeStepsProvider()

  return (
    <div className='flex flex-col space-y-5'>
      <AssistantHeaderSm
        title='What are your income sources?'
        description='Select all the income sources you have. This will help us decide which ITR will be most suitable for you.'
      />

      <div className='w-full flex flex-col items-center space-y-5'>
        <div className='w-full space-y-4'>
          <SelectOption
            options={INCOME_SRC_OPTIONS}
            setOptions={setSelectedIncomeSrc}
            multiple
          />
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
