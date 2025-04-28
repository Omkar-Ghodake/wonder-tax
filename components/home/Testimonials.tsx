import { TESTIMONIALS } from '@/data/home'
import Image from 'next/image'
import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { SiComma } from 'react-icons/si'

const Testimonials = () => {
  return (
    <div className='w-full px-32 flex flex-col'>
      <div className='grid grid-cols-3'>
        {TESTIMONIALS.map((item) => (
          <div key={item.author} className='p-5'>
            <div className='relative p-5 border border-black/20'>
              <div className='relative h-10 w-10 mx-auto'>
                <Image
                  src={`/home/${item.image}`}
                  alt=''
                  className='rounded-full object-cover mb-5'
                  fill
                />
              </div>

              <h4 className='text-[24px] leading-[40px] text-center'>
                {item.quote}
              </h4>

              <h3 className='text-[16px] leading-[40px] text-center font-bold'>
                {item.author}
              </h3>

              <p className='text-[14px] leading-[30px]'>{item.content}</p>

              <span className='flex absolute -translate-y-1/2 top-0 right-5 text-6xl -tracking-tighter text-gray-500'>
                <ImQuotesLeft />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
