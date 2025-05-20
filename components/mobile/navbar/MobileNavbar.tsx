'use client'

import { useSessionProvider } from '@/context/SessionProvider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import MobilePrimaryNavList from './MobilePrimaryNavList'
import NavbarToggler from './NavbarToggler'

const MobileNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  const [showProfileOptions, setShowProfileOptions] = useState<boolean>(false)

  const pathname = usePathname()

  const { userSession, handleLogout } = useSessionProvider()

  const getFirstName = (name: string) => {
    const firstName = name?.split(' ')[0]
    return firstName.charAt(0)?.toUpperCase() + firstName?.slice(1)
  }

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
            <span
              onClick={() => setShowProfileOptions(!showProfileOptions)}
              className='text-primary'
            >
              {/* <FaUser className='text-2xl text-primary' /> */}
              {getFirstName(
                userSession?.user?.name ||
                  userSession?.user?.username ||
                  userSession?.username
              )}
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

      <MobilePrimaryNavList isNavbarOpen={isNavbarOpen} />
    </div>
  )
}

export default MobileNavbar
