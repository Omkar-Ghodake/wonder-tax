import { PRIMARY_MOBILE_NAV_LINKS } from '@/data/navbar'
import React from 'react'
import MobileNavLink from './MobileNavLink'

const MobilePrimaryNavList = ({ isNavbarOpen }: { isNavbarOpen: boolean }) => {
  return (
    <ul
      className={`absolute bg-background z-40 ${
        isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
      } h-[90vh] w-full left-0 top-[10vh] duration-150 flex flex-col items-center p-5 space-y-5`}
    >
      {PRIMARY_MOBILE_NAV_LINKS.map((link) => (
        <MobileNavLink link={link} key={link.label} />
      ))}
    </ul>
  )
}

export default MobilePrimaryNavList
