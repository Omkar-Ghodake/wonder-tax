import { HOW_IT_WORKS } from '@/data/home'
import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
  return (
    <div className='h-[80vh] w-full px-32 flex flex-col'>
      <div className='flex h-full items-center justify-center'>
        <div className='grid grid-cols-3 items-center gap-x-10'>
          {HOW_IT_WORKS.map((item, idx) => (
            <div
              key={item.step}
              className='p-10 flex flex-col space-y-5 shadow-lg'
            >
              <div className='relative w- h-56'>
                <Image
                  src={`/home/${item.icon}`}
                  alt=''
                  className='mx-auto object-contain'
                  fill
                />
              </div>

              <div>
                <span className='font-bold text-[20px] leading-[40px]'>
                  Step {idx + 1}:
                </span>

                <p className='text-[15px] leading-[25px]'>{item.step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
