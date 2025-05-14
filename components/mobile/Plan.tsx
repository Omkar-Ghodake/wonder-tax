import Link from 'next/link'
import React from 'react'

const Plan = ({
  planInfo,
}: {
  planInfo: {
    type: string
    subText: string
    price: string
    discount: string
    description: string[]
    id: string
    tag?: string
  }
}) => {
  return (
    <div className='border-[0.4px] border-[#B1B1B1] rounded-md h-fit'>
      <div className='relative p-4 flex bg-primary/30'>
        <div className='flex flex-col space-y-1 w-9/12'>
          <span className='text-sm text-[#0B6488] font-semibold'>
            {planInfo.type}
          </span>

          <span className='text-xs'>{planInfo.subText}</span>
        </div>

        <div className='text-sm flex flex-col w-3/12'>
          <span className='font-bold'>&#8377; {planInfo.price} /-</span>

          {planInfo.discount && (
            <span className='line-through'>&#8377; {planInfo.discount} /-</span>
          )}
        </div>

        {planInfo.tag && (
          <span className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 font-medium text-[9px] text-white bg-[#0B6488] rounded-md px-1 py-[2px] h-fit w-fit flex justify-center items-center'>
            {planInfo.tag}
          </span>
        )}
      </div>

      <div className='p-4 text-sm space-y-4'>
        <ul className=''>
          {planInfo.description.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <Link href={`/mobile/plans/${planInfo.id}`} className='w-full'>
          <button className='font-semibold text-sm bg-[#53BB5F] px-6 py-3 text-white rounded-md w-full'>
            Purchase Plan
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Plan
