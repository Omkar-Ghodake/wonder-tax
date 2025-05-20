'use client'

import { TOOLS_DROPDOWN } from '@/data/navbar'
import useClickOutsideElement from '@/hooks/useClickOutsideElement'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'

const ToolsDropdown = ({ closeDropdown }: { closeDropdown: () => void }) => {
  const toolsDropdownRef = useRef(null)

  useClickOutsideElement(toolsDropdownRef, closeDropdown)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='absolute right-1/2 translate-x-1/2 top-[5vh] bg-white shadow-2xl border border-gray-500/30 rounded-lg hidden md:flex flex-col w-[20vw] h-fit z-50'
      ref={toolsDropdownRef}
    >
      {TOOLS_DROPDOWN.map((item) => (
        <Link
          key={item.title}
          href={`/tools${item.href}`}
          className='px-4 py-3 hover:bg-gray-500/10 duration-150'
        >
          <h2 className='font-semibold'>{item.title}</h2>

          <p className='text-sm'>{item.shortDescription}</p>
        </Link>
      ))}
    </motion.div>
  )
}

export default ToolsDropdown
