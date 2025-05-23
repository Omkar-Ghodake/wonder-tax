import { BENEFITS } from '@/data/home'
import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='h-fit w-full px-10 xl:px-32 flex flex-col mt-5'>
      <div className='grid grid-cols-3 gap-x-5 gap-y-10'>
        {BENEFITS.map((item) => (
          <div key={item.title} className='h-full'>
            <div className='px-10 flex flex-col justify-between h-full'>
              <Image
                src={`/home${item.icon}`}
                alt=''
                width={50}
                height={50}
                className='mb-2'
              />

              <p className='font-medium text-[16px] xl:text-[20px]'>
                {item.title}
              </p>

              <p className='text-[15px] leading-[30px]'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
