import { STATS } from '@/data/home'
import Link from 'next/link'
import React from 'react'
import { LuMoveRight } from 'react-icons/lu'

const Stats = () => {
  return (
    <div className='h-[80vh] w-full px-32 flex flex-col'>
      <div className='flex h-full items-center justify-center px-20'>
        <div className='flex justify-center items-center h-[70%]'>
          <div className='w-1/5 h-full flex items-center flex-col'>
            {STATS.map((item) => (
              <div key={item.label} className='h-1/3 flex flex-col w-full'>
                <span className='text-[32px] leading-[40px]'>{item.value}</span>
                <span className='text-[14px] leading-[30px]'>{item.label}</span>
              </div>
            ))}
          </div>

          <div className='w-3/5 h-full flex items-center flex-col'>
            {STATS.map((item) => (
              <div
                key={item.label}
                className='h-1/3 flex flex-col w-full text-[14px]'
              >
                <p className='text-[14px] leading-[30px]'>{item.description}</p>
              </div>
            ))}
          </div>

          <div className='w-1/5 h-full flex flex-col text-[14px] leading-[30px]'>
            <Link
              href={'/about'}
              className=' text-[14px] leading-[30px] text-primary flex items-center justify-between px-5'
            >
              <span>About Us</span>
              <LuMoveRight className='' />
            </Link>

            <Link
              href={'/why-choose-us'}
              className=' text-[14px] leading-[30px] text-primary flex items-center justify-between px-5'
            >
              <span>Why Choose Us</span>
              <LuMoveRight className='' />
            </Link>

            <Link
              href={'/blogs'}
              className=' text-[14px] leading-[30px] text-primary flex items-center justify-between px-5'
            >
              <span>Read our blogs</span>
              <LuMoveRight className='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
