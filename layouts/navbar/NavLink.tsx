import { NavLinkType } from '@/types/dataTypes'
import Link from 'next/link'
import React from 'react'

const NavLink = ({ link }: { link: NavLinkType }) => {
  return (
    <li>
      {link.isLink ? (
        <Link href={link.href}>{link.label}</Link>
      ) : (
        <span>{link.label}</span>
      )}
    </li>
  )
}

export default NavLink
