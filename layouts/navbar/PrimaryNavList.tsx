import React from 'react'
import NavList from './NavList'
import { PRIMARY_NAVLINKS } from '@/data/navbar'

const PrimaryNavList = () => {
  return (
    <div className='flex items-center h-full'>
      <NavList list={PRIMARY_NAVLINKS} />
    </div>
  )
}

export default PrimaryNavList
