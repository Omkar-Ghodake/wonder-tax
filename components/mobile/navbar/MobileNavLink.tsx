'use client'

import { NavLinkType } from '@/types/dataTypes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const MobileNavLink = ({ link }: { link: NavLinkType }) => {
  const pathname = usePathname()

  return (
    <li className={`text-lg ${pathname === link.href && 'text-primary'}`}>
      {link.isLink ? (
        <Link href={`/mobile/${link.href}`}>{link.label}</Link>
      ) : (
        <span className='flex items-center'>
          {link.label}{' '}
          {link.isDropdown && (
            <span className='ml-2 translate-y-[2px]'>
              <FaAngleDown />
            </span>
          )}
        </span>
      )}
    </li>
  )
}

export default MobileNavLink
