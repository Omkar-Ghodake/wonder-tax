'use client'

import { SERVICES_DROPDOWN_LINKS } from '@/data/navbar'
import { ServicesType } from '@/types/dataTypes'
import Link from 'next/link'
import React, { useState } from 'react'

const ServicesDropdown = () => {
  const [selectedService, setSelectedService] = useState<any>()

  return (
    <div className='fixed left-1/2 -translate-x-1/2 bg-white border top-[10vh] hidden md:block'>
      <div className='side-bar'>
        {SERVICES_DROPDOWN_LINKS.map((item) => (
          <div
            className={``}
            onClick={() => setSelectedService(item.service.subServices)}
          >
            {item.service.title}
          </div>
        ))}
      </div>

      <div className='content p-5'>
        <div>
          <h2 className='title'></h2>

          <p className='sub-text'></p>
        </div>

        <div className='sub-services'></div>
      </div>
    </div>
  )
}

export default ServicesDropdown
