import { KEY_SERVICES } from '@/data/home'
import Link from 'next/link'
import React from 'react'
import { LuMoveRight } from 'react-icons/lu'

const KeyServices = () => {
  return (
    <div className='h-fit w-full px-20 xl:px-32 flex flex-col mt-20'>
      <h1 className='text-[28px] leading-[40px] font-medium text-center mb-5 flex items-end justify-center'>
        Our key services
      </h1>

      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-3'>
          {KEY_SERVICES.map((item) => (
            <div key={item.title} className='p-5 h-full'>
              <div className='p-5 shadow-lg h-full'>
                <h2 className='font-medium text-[24px] leading-[40px] text-primary'>
                  {item.title}
                </h2>

                <p className='text-[14px] leading-[30px]'>{item.description}</p>

                <Link
                  href={item.href}
                  className=' text-[14px] leading-[30px] text-primary flex items-center space-x-2'
                >
                  <span>Get started now</span>
                  <LuMoveRight className='' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeyServices
