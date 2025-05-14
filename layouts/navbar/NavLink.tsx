import { NavLinkType } from '@/types/dataTypes'
import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const NavLink = ({ link }: { link: NavLinkType }) => {
  return (
    <li className='border-b-[3px] border-transparent hover:border-primary duration-150 cursor-pointer'>
      {link.isLink ? (
        <Link href={link.href}>{link.label}</Link>
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

export default NavLink
