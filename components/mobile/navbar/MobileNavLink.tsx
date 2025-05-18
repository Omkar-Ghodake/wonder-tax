'use client'

import { NavLinkType } from '@/types/dataTypes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import MobileServicesDropdown from './MobileServicesDropdown'

const MobileNavLink = ({ link }: { link: NavLinkType }) => {
  const pathname = usePathname()

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true)

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  return (
    <>
      <li className={`text-lg ${pathname === link.href && 'text-primary'}`}>
        {link.isLink ? (
          <Link href={`/mobile/${link.href}`}>{link.label}</Link>
        ) : (
          <div>
            {link.isDropdown && (
              <>
                <span
                  className='flex items-center'
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className=''>{link.label}</span>
                  <FaAngleDown className='ml-2 translate-y-[2px]' />
                </span>
                {link.dropdownType === 'services' && isDropdownOpen && (
                  <MobileServicesDropdown closeDropdown={closeDropdown} />
                )}
              </>
            )}
          </div>
        )}
      </li>
    </>
  )
}

export default MobileNavLink
