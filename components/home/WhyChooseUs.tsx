import { BENEFITS } from '@/data/home'
import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='h-[80vh] w-full px-32 flex flex-col'>
      <div className='flex flex-wrap justify-between items-center h-full'>
        {BENEFITS.map((item, idx) => (
          <div key={item.title} className='w-1/3'>
            <div className='px-10'>
              <Image src={`/home/${item.icon}`} alt='' width={50} height={50} />

              <p className='font-medium text-[20px] leading-[40px]'>
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
