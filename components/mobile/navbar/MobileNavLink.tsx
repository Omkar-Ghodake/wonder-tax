'use client'

import { NavLinkType } from '@/types/dataTypes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MobileNavLink = ({ link }: { link: NavLinkType }) => {
  const pathname = usePathname()

  return (
    <li className={`text-lg ${pathname === link.href && 'text-primary'}`}>
      <Link href={link.href}>{link.label}</Link>
    </li>
  )
}

export default MobileNavLink
