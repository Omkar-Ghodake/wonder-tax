'use client'

import { SERVICES_DROPDOWN_LINKS } from '@/data/navbar'
import useClickOutsideElement from '@/hooks/useClickOutsideElement'
import { ServicesDropdownType } from '@/types/dataTypes'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const ServicesDropdown = ({ closeDropdown }: { closeDropdown: () => void }) => {
  const [selectedService, setSelectedService] = useState<ServicesDropdownType>(
    SERVICES_DROPDOWN_LINKS[0]
  )

  const servicesDropdownRef = useRef(null)

  useClickOutsideElement(servicesDropdownRef, closeDropdown)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='fixed left-1/2 -translate-x-1/2 bg-white shadow-2xl border border-gray-500/30 rounded-lg top-[10vh] hidden md:flex w-[70vw] h-[70vh]'
      ref={servicesDropdownRef}
    >
      <div className='side-bar w-[30%] bg-gray-500/10'>
        {SERVICES_DROPDOWN_LINKS.map((item, idx) => (
          <div
            key={item.service.title}
            className={`cursor-pointer px-4 py-3 flex items-center justify-between hover:bg-primary/10 border-l-4 text-base ${
              item.service.title === selectedService.service.title
                ? 'bg-primary/10 border-primary text-primary-darken font-medium'
                : 'border-transparent hover:border-primary'
            } duration-150`}
            onClick={() => setSelectedService(item)}
          >
            <span>{item.service.title}</span>
            <FaAngleRight />
          </div>
        ))}
      </div>

      <div className='content p-5 w-[70%] space-y-5'>
        <div>
          <h2 className='title text-2xl text-primary-darken'>
            {selectedService.service.title}
          </h2>

          <p className='sub-text text-base'>
            {selectedService.service.subText}
          </p>
        </div>

        <div className='sub-services grid grid-cols-3 gap-5'>
          {selectedService.service.subServices.map((subItem) => (
            <Link
              key={subItem.title}
              href={`/services${selectedService.service.href}${subItem.href}`}
              className='border border-gray-500/30 px-2 py-4 rounded-lg flex space-x-2 hover:border-primary duration-150 hover:shadow-lg'
            >
              <IoMdCheckmarkCircleOutline className='text-2xl w-fit text-primary-darken' />
              <span className='w-full font-semibold text-base hover:text-primary-darken'>
                {subItem.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ServicesDropdown
