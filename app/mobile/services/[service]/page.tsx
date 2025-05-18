'use client'

import ServiceList from '@/components/mobile/services/ServiceList'
import AssistantHeaderSm from '@/components/mobile/userInfoSteps/AssistantHeaderSm'
import ITRUserInfo from '@/components/mobile/userInfoSteps/ITRUserInfo'
import { redirect, useParams } from 'next/navigation'
import { useState } from 'react'
import { MdChevronLeft } from 'react-icons/md'

type MainServices = 'ITR' | 'GST' | 'FIRM' | 'PFPT' | 'PKG' | 'PLAN'

const Service = () => {
  const params = useParams()

  const [step, setStep] = useState<0 | 1 | 2>(0)

  const [userData, setUserData] = useState<{
    age: string
    incomeSources: string[]
  }>({ age: '', incomeSources: [] })

  const handleGoBack = () => {
    if (step === 0) {
      redirect('/mobile/services')
    } else if (step === 1) {
      setStep(0)
    } else if (step === 2) {
      setStep(1)
    }
  }

  return (
    <div className='p-5'>
      <span className='flex items-center mb-5 w-fit' onClick={handleGoBack}>
        <MdChevronLeft className='text-2xl' />
        <span className=''>Back</span>
      </span>

      {step === 2 && (
        <AssistantHeaderSm
          title='Choose from our Income Tax. services for you'
          description='All our services are carefully crafted to provide you in-depth support and top service'
        />
      )}

      {(params.service as MainServices) === 'ITR' && (
        <ITRUserInfo step={step} setStep={setStep} />
      )}

      {step === 2 && <ServiceList service={params.service as MainServices} />}
    </div>
  )
}

export default Service
