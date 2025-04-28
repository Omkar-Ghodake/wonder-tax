import Image from 'next/image'
import { LuMoveRight } from 'react-icons/lu'

const GetStarted = () => {
  return (
    <div className='text-white bg-gradient-to-b from-[#24ABE2] to-[#1F86C7] flex justify-center items-center h-64 my-10 w-[95%] mx-auto px-32'>
      <div className='flex items-center justify-center w-3/5 h-20 gap-x-20'>
        <Image
          src={'/logo.png'}
          alt=''
          width={100}
          height={100}
          className='brightness-0 invert'
        />

        <p className='text-[24px] leading-[40px]'>
          Try our services and see how we manage everything well
        </p>
      </div>

      <div className='w-2/5 h-20 flex justify-center'>
        <button className='h-fit bg-white rounded-[5px] px-4 py-2 text-primary flex items-center space-x-2 font-bold shadow-lg'>
          <span className='text-[14px] leading-[30px]'>Get started now</span>
          <LuMoveRight className='text-lg' />
        </button>
      </div>
    </div>
  )
}

export default GetStarted
