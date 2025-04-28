import { KEY_SERVICES } from '@/data/home'
import Link from 'next/link'
import React from 'react'
import { LuMoveRight } from 'react-icons/lu'

const KeyServices = () => {
  return (
    <div className='h-screen w-full px-32 flex flex-col'>
      <h1 className='text-[28px] leading-[40px] font-medium text-center h-[20%] flex items-end justify-center'>
        Our key services
      </h1>

      <div className='flex h-[80%] items-center justify-center'>
        <div className='flex flex-wrap justify-center items-center h-full'>
          {KEY_SERVICES.map((item) => (
            <div key={item.title} className='w-1/3 p-5'>
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
