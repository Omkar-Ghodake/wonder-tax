import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const NavbarOptions = () => {
  return (
    <div className='w-fit h-full flex items-center justify-end space-x-5'>
      <div className='login-button'>
        <button className='outline-none text-primary border border-primary rounded-[5px] px-4 py-2 font-semibold cursor-pointer uppercase text-sm'>
          Login
        </button>
      </div>

      <div className='w-[1px] h-3/5 bg-black/30'></div>

      <div className='contact-info text-sm font-semibold'>
        <Link href={'/contact-us'} className='flex items-center space-x-2'>
          <FaPhoneAlt className='text-primary' />
          <span>Request Callback</span>
        </Link>

        <span className='flex items-center space-x-2'>
          <IoMdMail className='text-primary' />
          <a href='mailto:support@wondertax.in'>support@wondertax.in</a>
        </span>
      </div>
    </div>
  )
}

export default NavbarOptions
