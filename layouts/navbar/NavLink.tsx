'use client'

import { NavLinkType } from '@/types/dataTypes'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import ServicesDropdown from './ServicesDropdown'
import { useState } from 'react'

const NavLink = ({ link }: { link: NavLinkType }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)

  const closeDropdown = () => {
    setIsDropDownOpen(false)
  }

  return (
    <>
      <li className='border-b-[3px] border-transparent hover:border-primary duration-150 cursor-pointer'>
        {link.isLink ? (
          <Link href={link.href}>{link.label}</Link>
        ) : (
          <span
            className='flex items-center'
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            {link.label}{' '}
            {link.isDropdown && (
              <span className='ml-2 translate-y-[2px]'>
                <FaAngleDown />
              </span>
            )}
          </span>
        )}
      </li>

      {link.isDropdown &&
        link.dropdownType === 'services' &&
        isDropDownOpen && <ServicesDropdown closeDropdown={closeDropdown} />}
    </>
  )
}

export default NavLink
