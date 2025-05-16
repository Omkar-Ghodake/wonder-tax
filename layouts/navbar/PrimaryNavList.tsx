import React from 'react'
import NavList from './NavList'
import { PRIMARY_NAV_LINKS } from '@/data/navbar'

const PrimaryNavList = () => {
  return (
    <div className='flex items-center h-full w-fit'>
      <NavList list={PRIMARY_NAV_LINKS} />
    </div>
  )
}

export default PrimaryNavList
