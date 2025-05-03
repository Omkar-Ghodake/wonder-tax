'use client'

import React from 'react'
import { FiMenu } from 'react-icons/fi'

const NavbarToggler = ({
  isNavbarOpen,
  setIsNavbarOpen,
}: {
  isNavbarOpen: boolean
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className='navbar-toggler w-fit text-2xl h-full mr-4 flex items-center'>
      <div
        className={`relative h-[15px] w-[25px] flex flex-col justify-between`}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <div
          className={`absolute bg-foreground w-[25px] h-[2.5px] rounded-full ${
            isNavbarOpen
              ? 'top-1/2 -translate-y-1/2 rotate-45 duration-150'
              : 'inset-0'
          }`}
        ></div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 bg-foreground w-[25px] h-[2.5px] rounded-full ${
            isNavbarOpen ? 'scale-x-0' : 'scale-x-100'
          } duration-150`}
        ></div>
        <div
          className={`absolute bg-foreground w-[25px] h-[2.5px] rounded-full ${
            isNavbarOpen
              ? 'bottom-1/2 translate-y-1/2 -rotate-45 duration-150'
              : 'bottom-0 left-0'
          }`}
        ></div>
      </div>
    </div>
  )
}

export default NavbarToggler
