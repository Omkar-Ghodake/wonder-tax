import { NavLinkType } from '@/types/dataTypes'
import React from 'react'
import NavLink from './NavLink'

const NavList = ({ list }: { list: NavLinkType[] }) => {
  return (
    list && (
      <ul className='flex items-center gap-10 mx-auto'>
        {list.map((navLink, index) => {
          return <NavLink key={index} link={navLink} />
        })}
      </ul>
    )
  )
}

export default NavList
