import Image from 'next/image'
import React from 'react'

const DATA = [
  { title: '100% accurate and transparent', image: 'target.png' },
  { title: 'Completely online process', image: 'browser.png' },
  { title: 'Dedicated expert help', image: 'operator.png' },
  { title: 'Advisory for savings', image: 'savings.png' },
]

const InfoGraphics = () => {
  return (
    <div className='grid grid-cols-2'>
      {DATA.map((item) => (
        <div key={item.title} className='h-14 flex items-center text-sm'>
          <div className='relative bg-[E1E1E1] w-10 h-10 rounded-full'>
            <Image
              src={`/home/${item.image}`}
              alt=''
              fill
              className='object-contain'
            />
          </div>
          <span className='w-9/12 pl-2'>{item.title}</span>
        </div>
      ))}
    </div>
  )
}

export default InfoGraphics
