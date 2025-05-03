import React from 'react'

const PLAN_DETAILS = {
  title: 'ITR 4 Filing (Prime Plan)',
  price: 2499,
  tagline:
    'We have made calculations for you and also chosen the best plan for',
  description: [
    'Expert assistance with your documents',
    'Solving any doubts related to tax saving',
    'Completely online and zero paperwork',
  ],
}

const ChosenPlan = () => {
  return (
    <div className='bg-[#ECFFE5] rounded-lg p-5 space-y-3'>
      <div className='flex items-center justify-between'>
        <span className='font-semibold'>{PLAN_DETAILS.title}</span>
        <span className='font-bold text-[#179626]'>
          &#8377; {PLAN_DETAILS.price.toLocaleString('en-IN')} /-
        </span>
      </div>

      <p className='text-sm'>
        We have made calculations for you and also chosen the best plan for
      </p>

      <div className='space-y-2'>
        {PLAN_DETAILS.description.map((item) => (
          <div key={item} className='flex items-center space-x-4'>
            <div className='w-6 h-6 bg-[#B0F9B8] rounded-full'></div>

            <span className='w-10/12 h-6 text-xs flex items-center'>
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className='flex items-center h-14'>
        <p className='w-1/2 text-sm pr-2'>
          Trusted by lakhs of Indians every year
        </p>

        <button className='w-1/2 bg-[#53BB5F] text-white h-full rounded-md text-sm font-semibold'>
          Pay and complete
        </button>
      </div>
    </div>
  )
}

export default ChosenPlan
