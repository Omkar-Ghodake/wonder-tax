import { INFO_GRAPHICS } from '@/data/about'
import Image from 'next/image'
import React from 'react'

const InfoGraphics = () => {
  return (
    <div>
      {INFO_GRAPHICS.map((item, idx) => (
        <div
          key={item.title}
          className='flex justify-between items-center min-h-[85vh] px-32 mt-5'
        >
          <div className={`w-1/2 ${idx % 2 !== 0 && 'order-2'} space-y-5`}>
            <h1 className='font-bold text-[48px] leading-[58px]'>
              {item.title}
            </h1>

            <div className='space-y-2'>
              {item.description.map((str, idx) => (
                <p key={str} className='text-xl'>
                  {str}
                  {idx < str.length - 1 && '.'}
                </p>
              ))}
            </div>
          </div>

          <div className='w-1/2 flex justify-center'>
            <Image
              src={`/about/${item.image}`}
              alt=''
              width={350}
              height={350}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default InfoGraphics
