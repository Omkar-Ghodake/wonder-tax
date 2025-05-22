import { LANDING2_DATA } from '@/data/home'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuMoveRight } from 'react-icons/lu'

const Landing = () => {
  return (
    <>
      <div className='section-1 h-[85vh] w-full flex items-center justify-center px-20 xl:px-32'>
        <div className='h-full w-1/2 flex flex-col justify-center'>
          <div className='flex w-11/12 flex-col justify-center space-y-5'>
            <h1 className='text-5xl font-bold'>
              Tax filing made simple and affordable.
            </h1>

            <p className='leading-8'>
              Wondertax is fast, reliable and easy to use platform.
              <br />A one-stop solution to all your taxation and financial
              needs.
            </p>

            <Link href={'/services'} className='w-fit'>
              <button className='w-fit flex justify-center items-center space-x-2 bg-secondary text-white px-5 py-4 text-sm rounded-[5px] shadow-lg cursor-pointer'>
                <span>See our services</span>
                <LuMoveRight />
              </button>
            </Link>
          </div>
        </div>

        <div className='relative h-full w-1/2 flex justify-center items-center'>
          <Image src={'/home/landing1.png'} alt='' width={1000} height={1000} />
        </div>
      </div>

      <div className='mx-auto text-center font-medium text-[28px] leading-[40px] h-[15vh] flex items-center justify-center'>
        Ditch the old way of <br /> doing taxes
      </div>

      <div className='section-2 h-[85vh] w-full flex justify-between items-center px-20 xl:px-32'>
        <div className='h-full w-1/2 flex flex-col justify-center order-2'>
          <div className='flex xl:w-10/12 flex-col justify-center space-y-5'>
            {LANDING2_DATA.map((item) => (
              <div key={item.title}>
                <p className='text-[#FF5252] leading-[40px] text-[24px]'>
                  {item.title}
                </p>

                {item.desc.split('.').map((desc, idx) => (
                  <p key={desc} className='text-[15px] leading-[30px]'>
                    {desc} {idx < item.desc.split('.').length - 1 && '.'}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='relative h-full w-1/2 flex justify-center items-center'>
          <Image src={'/home/landing2.png'} alt='' width={1000} height={1000} />
        </div>
      </div>
    </>
  )
}

export default Landing
