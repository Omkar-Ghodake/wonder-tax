import Image from 'next/image'
import React from 'react'

const StepTopBar = ({ step }: { step: number }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center space-x-5'>
        <Image src={'/mobile/user_male.png'} alt='' height={45} width={45} />
        <Image src={'/mobile/user_female.png'} alt='' height={45} width={45} />
      </div>

      <span className='font-medium text-sm'>Step {step} of 12</span>
    </div>
  )
}

export default StepTopBar
