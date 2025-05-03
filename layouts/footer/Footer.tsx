import Link from 'next/link'
import React from 'react'
import { LuMoveRight } from 'react-icons/lu'

const Footer = () => {
  return (
    <div className='hidden md:flex flex-col justify-center space-y-5 py-10'>
      <div className='w-[95%] mx-auto flex justify-between'>
        <div className='w-1/3 space-y-5'>
          <p className='text-[24px] leading-[40px]'>
            Get our newsletter once a month for tips, tricks, and trends.
          </p>

          <form className='input-group relative'>
            <input
              type='email'
              placeholder='Your email address'
              className={'outline-none border-b w-full pb-5'}
              required
            />

            <button type='submit'>
              <LuMoveRight className='absolute top-0 right-0 text-primary text-2xl cursor-pointer' />
            </button>
          </form>
        </div>

        <div className='w-1/3 flex'>
          <div className='w-1/2 space-y-5'>
            <p className='font-medium text-[28px] leading-[40px]'>Services</p>

            <div className='flex flex-col'>
              <Link
                href={'/'}
                className='text-[14px] leading-[30px] underline w-fit'
              >
                Income Tax
              </Link>

              <Link
                href={'/'}
                className='text-[14px] leading-[30px] underline w-fit'
              >
                GST
              </Link>
              <Link
                href={'/'}
                className='text-[14px] leading-[30px] underline w-fit'
              >
                TDS
              </Link>
              <Link
                href={'/'}
                className='text-[14px] leading-[30px] underline w-fit'
              >
                Company Formation
              </Link>
              <Link
                href={'/'}
                className='text-[14px] leading-[30px] underline w-fit'
              >
                Payroll
              </Link>
              <Link
                href={'/'}
                className='text-[14px] leading-[30px] underline w-fit'
              >
                Company Audit
              </Link>
            </div>
          </div>

          <div className='w-1/2 space-y-5'>
            <p className='font-medium text-[28px] leading-[40px]'>
              Stay connected
            </p>

            <div className='flex flex-col'>
              <Link
                href={'/'}
                className='text-[14px] leading-[30px] underline w-fit'
              >
                Call 98200 98200 (10am : 7pm)
              </Link>
              <a
                href='mailto:info@wondertax.com'
                className='text-[14px] leading-[30px] underline w-fit'
              >
                info@wondertax.com
              </a>
              <a
                href={'/'}
                target='_blank'
                className='text-[14px] leading-[30px] underline w-fit'
              >
                Facebook
              </a>
              <a
                href={'/'}
                target='_blank'
                className='text-[14px] leading-[30px] underline w-fit'
              >
                Instagram
              </a>
              <a
                href={'/'}
                target='_blank'
                className='text-[14px] leading-[30px] underline w-fit'
              >
                Twitter
              </a>
              <Link
                href={'/'}
                className='text-[14px] leading-[30px] underline w-fit'
              >
                Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[1px] w-full bg-black/10'></div>

      <div className='w-[95%] mx-auto py-5'>
        <p>
          Privacy Policy / This is a prototype website design - WonderTax © 2020
          / All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
