import Link from 'next/link'

type MainServices = 'ITR' | 'GST' | 'FIRM' | 'PFPT' | 'PKG' | 'PLAN'

const SERVICE_LIST: Record<
  MainServices,
  { image: string; list: { title: string; desc: string; href: string }[] }
> = {
  ITR: {
    image: '',
    list: [
      {
        title: 'Salary Returns',
        desc: 'For people with salary income',
        href: '/salary-return',
      },
      {
        title: 'Business Returns',
        desc: 'For people with business income',
        href: '/business-return',
      },
      {
        title: 'Foreign Income Returns',
        desc: 'Are you a salaried person? This is for you.',
        href: '/foreign-income-return',
      },
      {
        title: 'TDS/ TCS Returns',
        desc: 'Are you a salaried person? This is for you.',
        href: '/tds-return',
      },
      {
        title: 'Income Tax Notices',
        desc: 'Are you a salaried person? This is for you.',
        href: '/income-tax-notice',
      },
      {
        title: 'Return Rectification',
        desc: 'Are you a salaried person? This is for you.',
        href: '/return-rectification',
      },
    ],
  },
  GST: {
    image: '',
    list: [
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
    ],
  },
  FIRM: {
    image: '',
    list: [
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
    ],
  },
  PFPT: {
    image: '',
    list: [
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
    ],
  },
  PKG: {
    image: '',
    list: [
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
    ],
  },
  PLAN: {
    image: '',
    list: [
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
      { title: '', desc: '', href: '' },
    ],
  },
}

const ServiceList = ({ service }: { service: MainServices }) => {
  console.log(SERVICE_LIST[service])

  return (
    <div className='p-5 flex flex-col gap-4'>
      {SERVICE_LIST[service].list.map((item) => (
        <Link
          href={`/mobile/services/${service}${item.href}`}
          key={item.title}
          className='bg-primary/30 flex items-center p-2 rounded-md space-x-3'
        >
          <div className='w-[28.5px] h-[38px] border border-black/30'></div>

          <div>
            <h2 className='text-sm text-[#0B6488]'>{item.title}</h2>

            <p className='text-xs text-[#5C5D67]'>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ServiceList
