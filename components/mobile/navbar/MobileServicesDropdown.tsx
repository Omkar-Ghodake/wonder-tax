'use client'

import { SERVICES_DROPDOWN_LINKS } from '@/data/navbar'
import { ServicesDropdownType } from '@/types/dataTypes'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdChevronLeft, MdKeyboardArrowRight } from 'react-icons/md'

const MobileServicesDropdown = ({
  closeDropdown,
}: {
  closeDropdown: () => void
}) => {
  const [step, setStep] = useState<0 | 1>(0)
  const [selectedService, setSelectedService] = useState<ServicesDropdownType>()

  return (
    <div className='mt-2'>
      <div className='border border-gray-500/20 px-2 py-4 text-sm bg-gray-50 space-y-2'>
        {step === 0 &&
          SERVICES_DROPDOWN_LINKS.map((item) => (
            <div
              key={item.service.title}
              className='flex items-center justify-between active:bg-gray-500/30 p-2'
              onClick={() => {
                setStep(1)
                setSelectedService(item)
              }}
            >
              <span>{item.service.title}</span>
              <MdKeyboardArrowRight />
            </div>
          ))}

        {step === 1 &&
          (selectedService ? (
            <>
              <span
                className='flex items-center mb-5 w-full text-primary'
                onClick={() => setStep(0)}
              >
                <MdChevronLeft className='text-2xl' />
                <span className=''>Back</span>
              </span>

              {selectedService.service.subServices.map((subItem) => (
                <Link
                  href={`/mobile/services/${selectedService.service.href}${subItem.href}`}
                  key={subItem.title}
                  className='flex items-center justify-between active:bg-gray-500/30 p-2'
                  onClick={() => setStep(0)}
                >
                  <span>{subItem.title}</span>
                  <MdKeyboardArrowRight />
                </Link>
              ))}
            </>
          ) : (
            <div>No Items to Show</div>
          ))}
      </div>
    </div>
  )
}

export default MobileServicesDropdown
