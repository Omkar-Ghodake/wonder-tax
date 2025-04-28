import Image from 'next/image'
import React from 'react'
import PrimaryNavList from './PrimaryNavList'
import Link from 'next/link'
import NavbarOptions from './NavbarOptions'

const Navbar = () => {
  return (
    <nav className=' w-full h-full px-28 py-5'>
      <div className='w-full h-full flex'>
        <div className='w-3/12 h-full flex items-center'>
          <Link href={'/'} className='w-fit h-full flex items-center'>
            <Image
              src={'/navbar-brand.png'}
              alt='WonderTax'
              width={230}
              height={50}
            />
          </Link>
        </div>

        <div className='w-6/12 h-full'>
          <PrimaryNavList />
        </div>

        <div className='w-3/12 h-full'>
          <NavbarOptions />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
