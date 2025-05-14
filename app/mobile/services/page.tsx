import AssistantHeaderSm from '@/components/mobile/userInfoSteps/AssistantHeaderSm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SERVICES: { title: string; image: string; tag?: string; href: string }[] =
  [
    {
      title: 'Income Tax',
      href: '/services/income-tax',
      image: '',
      tag: 'POPULAR',
    },
    {
      title: 'GST',
      href: '/services/gst',
      image: '',
      tag: '',
    },
    {
      title: 'Registration',
      href: '/services/registration',
      image: '',
      tag: '',
    },
    {
      title: 'Payroll',
      href: '/services/payroll',
      image: '',
      tag: '',
    },
    {
      title: 'Start-up',
      href: '/services/start-up',
      image: '',
      tag: '',
    },
    {
      title: 'Advisory',
      href: '/services/advisory',
      image: '',
      tag: '',
    },
  ]

const Services = () => {
  return (
    <div className='p-5'>
      <AssistantHeaderSm
        title='Please select the service. you wish to avail'
        description='All our services are carefully crafted to provide you in-depth support and top service'
      />

      <div className='grid grid-cols-2 p-5 gap-5 '>
        {SERVICES.map((service) => (
          <Link
            href={service.href}
            key={service.title}
            className='relative flex flex-col items-center w-[120px] h-[120px] justify-center p-3 bg-primary/40 rounded-md overflow-hidden'
          >
            <div className='flex flex-col items-center justify-between w-full h-full'>
              <div className='h-[68px] w-[51px] border border-black/30'>
                {/* <Image
                    src={service.image}
                    alt={service.title}
                    className='mb-2'
                    fill
                  /> */}
              </div>

              <h2 className='text-sm font-semibold text-[#0B6488]'>
                {service.title}
              </h2>

              {service.tag && (
                <span className='absolute inset-0 text-[6.84px] bg-[#75C6E8] text-white font-bold px-5 text-center py-[2px] w-fit h-fit -translate-x-[30%] -rotate-45 translate-y-[50%] tracking-[0]'>
                  {service.tag}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services
