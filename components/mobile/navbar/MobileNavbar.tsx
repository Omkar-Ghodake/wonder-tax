'use client'

import { useSessionProvider } from '@/context/SessionProvider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import NavbarToggler from './NavbarToggler'
import PrimaryNavList from './PrimaryNavList'
import { handleAuthSignOut } from '@/server-actions/userAuth'

const MobileNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  const [showProfileOptions, setShowProfileOptions] = useState<boolean>(false)

  const pathname = usePathname()

  const { userSession, handleLogout } = useSessionProvider()

  useEffect(() => {
    setIsNavbarOpen(false)
    document.body.classList.toggle('overflow-h-screen', isNavbarOpen)
  }, [pathname])

  useEffect(() => {}, [userSession])
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

      <div className='w-fit h-full flex items-center font-semibold text-sm'>
        {userSession ? (
          <div className='relative'>
            <span onClick={() => setShowProfileOptions(!showProfileOptions)}>
              <FaUser className='text-2xl text-primary' />
            </span>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showProfileOptions ? 1 : 0 }}
              className='absolute bg-white flex flex-col shadow right-1 top-[120%]'
            >
              <Link
                href={'/mobile/profile'}
                className='px-4 py-2 border border-black/10'
              >
                Profile
              </Link>

              <span
                className='px-4 py-2 border border-black/10'
                onClick={handleLogout}
              >
                Logout
              </span>
            </motion.div>
          </div>
        ) : (
          <Link href={'/mobile/login'} className='text-primary'>
            Login
          </Link>
        )}
      </div>

      <PrimaryNavList isNavbarOpen={isNavbarOpen} />
    </div>
  )
}

export default MobileNavbar
