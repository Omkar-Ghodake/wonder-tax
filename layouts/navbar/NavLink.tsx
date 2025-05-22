'use client'

import { NavLinkType } from '@/types/dataTypes'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import ServicesDropdown from './ServicesDropdown'
import { useEffect, useState } from 'react'
import ToolsDropdown from './ToolsDropdown'
import { usePathname } from 'next/navigation'

const NavLink = ({ link }: { link: NavLinkType }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)

  const pathname = usePathname()

  const renderDropdown = () => {
    if (!link.isDropdown || !isDropDownOpen) return null

    switch (link.dropdownType) {
      case 'services':
        return <ServicesDropdown closeDropdown={closeDropdown} />

      case 'tools':
        return <ToolsDropdown closeDropdown={closeDropdown} />

      default:
        return null
    }
  }

  const closeDropdown = () => {
    setIsDropDownOpen(false)
  }

  useEffect(() => {
    closeDropdown()
  }, [pathname])

  return (
    <>
      <li className='relative border-b-[3px] border-transparent hover:border-primary duration-150 cursor-pointer text-base'>
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
        {renderDropdown()}
      </li>

      {/* {link.dropdownType === 'tools' && (
        <div className='relative bg-red-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aliquid
          eum non cumque iste nisi reprehenderit dicta nobis delectus libero
          similique, ipsa quo placeat molestias ab autem, provident a in!
        </div>
      )} */}
    </>
  )
}

export default NavLink
