'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import PrimaryNavList from './PrimaryNavList'
import { usePathname } from 'next/navigation'
import NavbarToggler from './NavbarToggler'

const MobileNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

  const pathname = usePathname()

  useEffect(() => {
    setIsNavbarOpen(false)
    document.body.classList.toggle('overflow-h-screen', isNavbarOpen)
  }, [pathname])

  return (
    <div className='md:hidden flex items-center h-full px-5 border-b border-black/10 bg-background z-40'>
      <NavbarToggler
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={setIsNavbarOpen}
      />

      <div className='navbar-brand w-full h-full flex items-center'>
        <Link href='/mobile'>
          <Image
            src={'/navbar-brand.png'}
            alt='Wondertax'
            width={130}
            height={130}
          />
        </Link>
      </div>

      <div className='w-fit h-full flex items-center font-semibold text-primary text-sm'>
        <Link href={'/mobile/login'}>Login</Link>
      </div>

      <PrimaryNavList isNavbarOpen={isNavbarOpen} />
    </div>
  )
}

export default MobileNavbar
