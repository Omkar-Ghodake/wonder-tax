import React, { HTMLInputTypeAttribute } from 'react'

const StepInput = ({
  title,
  description,
  name,
  type = 'text',
}: {
  name: string
  type?: HTMLInputTypeAttribute
  title: string
  description: string
}) => {
  return (
    <div className='flex flex-col space-y-5'>
      <div className=''>
        <span className='my-5'>
          <strong className='text-sm'>{title}</strong>
        </span>

        <p className='text-xs'>{description}</p>
      </div>

      <div className='relative'>
        <input
          type={type}
          className='border border-[#959595] active:border-[#4DE0A8] focus:border-[#4DE0A8] outline-none px-10 h-14 rounded-sm w-full'
        />

        <span className='absolute top-1/2 -translate-y-1/2 left-5 text-xl'>
          &#8377;
        </span>
      </div>
    </div>
  )
}

export default StepInput
