'use client'

import ServiceList from '@/components/mobile/services/ServiceList'
import AssistantHeaderSm from '@/components/mobile/userInfoSteps/AssistantHeaderSm'
import { useParams } from 'next/navigation'
import React from 'react'

type MainServices = 'ITR' | 'GST' | 'FIRM' | 'PFPT' | 'PKG' | 'PLAN'

const Service = () => {
  const params = useParams()

  return (
    <div className='p-5'>
      <AssistantHeaderSm
        title='Choose from our Income Tax. services for you'
        description='All our services are carefully crafted to provide you in-depth support and top service'
      />

      <ServiceList service={params.service as MainServices} />
    </div>
  )
}

export default Service
