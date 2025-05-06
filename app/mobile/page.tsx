import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DATA = [
  '100% accurate and transparent',
  'Completely online process',
  'Dedicated tax expert help',
  'Free advisory for tax savings',
]

const page = () => {
  return (
    <div className='w-screen h-[90vh] overflow-hidden flex-col items-center justify-center space-y-5 bg-white p-5'>
      <div className='flex justify-center items-center w-full'>
        <Image src={'/mobile/landing.png'} alt='' width={250} height={250} />
      </div>

      <div className='text-center'>
        <h1 className='font-bold text-lg'>
          Income tax returns <br /> the easiest way possible
        </h1>

        <span className='font-medium text-sm text-[#5C5D67]'>
          Instant process with expert support
        </span>
      </div>

      <div className='grid grid-cols-2'>
        {DATA.map((item) => (
          <div key={item} className='h-14 flex items-center text-sm'>
            <div className='bg-[#E1E1E1] w-10 h-10 rounded-full'></div>
            <span className='w-9/12 pl-2'>{item}</span>
          </div>
        ))}
      </div>

      <div className='flex flex-col items-center space-y-2 pt-2'>
        <Link href={'/mobile/userInfo/step1'} className='w-full'>
          <button className='font-semibold text-lg bg-primary text-white w-full py-4 rounded-lg'>
            Get started now
          </button>
        </Link>

        <span className='text-sm text-[#5C5D67]'>
          Trusted by lakhs of Indians every year
        </span>
      </div>
    </div>
  )
}

export default page
