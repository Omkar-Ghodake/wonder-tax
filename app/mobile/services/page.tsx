import AssistantHeaderSm from '@/components/mobile/userInfoSteps/AssistantHeaderSm'
import Image from 'next/image'
import Link from 'next/link'

const SERVICES: {
  title: string[]
  image: string
  tag?: string
  href: string
}[] = [
  {
    title: ['Income Tax'],
    href: '/ITR',
    image: '/mobile/services/ITR.png',
    tag: 'POPULAR',
  },
  {
    title: ['GST'],
    href: '/GST',
    image: '',
    tag: '',
  },
  {
    title: ['Registration'],
    href: '/FIRM',
    image: '',
    tag: '',
  },
  {
    title: ['Payroll'],
    href: '/PFPT',
    image: '',
    tag: '',
  },
  {
    title: ['Financial Plan'],
    href: '/PKG',
    image: '',
    tag: '',
  },
  {
    title: ['Advisory', 'Compliance'],
    href: '/PLAN',
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
            href={`/mobile/services/${service.href}`}
            key={service.href}
            className='relative flex flex-col items-center w-[120px] h-[120px] justify-center p-3 bg-primary/40 rounded-md overflow-hidden'
          >
            <div className='flex flex-col items-center justify-between w-full h-full'>
              <div className='relative h-[68px] w-[51px]'>
                {/* <div className='itr-img'></div> */}
                {service.image && (
                  <Image src={service.image} alt={''} className='mb-2' fill />
                )}
              </div>

              <h2 className='text-sm font-semibold text-[#0B6488]'>
                {service.title.map((str) => (
                  <span key={str}>{str}</span>
                ))}
              </h2>

              {service.tag && (
                <span className='absolute inset-0 text-[6.84px] bg-green-500 text-white font-bold px-5 text-center py-[2px] w-fit h-fit -translate-x-[30%] -rotate-45 translate-y-[50%] tracking-[0]'>
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
