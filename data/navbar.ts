import ServicesDropdown from '@/layouts/navbar/ServicesDropdown'
import { NavLinkType, ServicesDropdownType } from '@/types/dataTypes'

export const PRIMARY_NAV_LINKS: NavLinkType[] = [
  {
    label: 'Home',
    href: '/',
    isLink: true,
    isDropdown: false,
  },
  {
    label: 'Services',
    href: '',
    isLink: false,
    isDropdown: true,
    dropdownType: 'services',
  },
  {
    label: 'Blogs',
    href: '/blogs',
    isLink: true,
    isDropdown: false,
  },
  {
    label: 'Tools',
    href: '/tools',
    isLink: true,
    isDropdown: false,
  },
  {
    label: 'About',
    href: '/about',
    isLink: true,
    isDropdown: false,
  },
]

export const PRIMARY_MOBILE_NAV_LINKS: NavLinkType[] = [
  {
    label: 'Home',
    href: '/',
    isLink: true,
    isDropdown: true,
  },
  {
    label: 'Services',
    href: '',
    isLink: false,
    isDropdown: true,
  },
  {
    label: 'Blogs',
    href: '/blogs',
    isLink: true,
    isDropdown: false,
  },
  {
    label: 'Tools',
    href: '/tools',
    isLink: true,
    isDropdown: false,
  },
  {
    label: 'About Us',
    href: '/about',
    isLink: true,
    isDropdown: false,
  },
]

export const SERVICES_DROPDOWN_LINKS: ServicesDropdownType[] = [
  {
    service: {
      title: 'Tax Filing and Advisory',
      href: '/tax-filing-and-advisory',
      subText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      subServices: [
        {
          title: 'Income Tax Return Filing (Individuals, HUFs)',
          href: '/temp',
        },
        {
          title: 'Business Return Filing (Firms, Companies)',
          href: '/temp',
        },
        {
          title: 'TDS Return Filing',
          href: '/temp',
        },
        {
          title: 'Property TDS Return - Form 26QB',
          href: '/temp',
        },
        {
          title: 'Income Tax Notices & Response Handling',
          href: '/temp',
        },
        {
          title: 'TAN Registration',
          href: '/temp',
        },
      ],
    },
  },
  {
    service: {
      title: 'GST Services',
      href: '/temp',
      subText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      subServices: [
        {
          title: 'GST Registration',
          href: '/temp',
        },
        {
          title: 'LUT Registration ',
          href: '/temp',
        },
        {
          title: 'GST Return Filing ',
          href: '/temp',
        },
        {
          title: 'GST Annual Return (GSTR 9/9C)',
          href: '/temp',
        },
        {
          title: 'GST Cancellation / Final Return (GSTR 10)',
          href: '/temp',
        },
        {
          title: 'GST Notice Response',
          href: '/temp',
        },
      ],
    },
  },
  {
    service: {
      title: 'Business Registrations',
      href: '/temp',
      subText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      subServices: [
        {
          title: 'Proprietorship Firm ',
          href: '/temp',
        },
        {
          title: 'Partnership Firm ',
          href: '/temp',
        },
        {
          title: 'One Person Company (OPC)',
          href: '/temp',
        },
        {
          title: 'Limited Liability Partnership (LLP)',
          href: '/temp',
        },
        {
          title: 'Company Registration',
          href: '/temp',
        },
        {
          title: 'Trademark Registration',
          href: '/temp',
        },
        {
          title: 'Import Export Code ',
          href: '/temp',
        },
      ],
    },
  },
  {
    service: {
      title: 'Payroll & Compliance',
      href: '/temp',
      subText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      subServices: [
        {
          title: '360 degree Payroll Management',
          href: '/temp',
        },
        {
          title: 'PF / PT / ESIC Registration',
          href: '/temp',
        },
        {
          title: 'PF / PT / ESIC Return Filing ',
          href: '/temp',
        },
        {
          title: 'Shop & Establishment License',
          href: '/temp',
        },
        {
          title: 'Professional Tax Registration',
          href: '/temp',
        },
      ],
    },
  },
  {
    service: {
      title: 'Financial Planning',
      href: '/temp',
      subText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      subServices: [
        {
          title: 'GoalSmart - Financial Planning',
          href: '/temp',
        },
        {
          title: 'WealthEdge - Investment Planning',
          href: '/temp',
        },
        {
          title: 'RetireWell - Retirement Planning',
          href: '/temp',
        },
        {
          title: 'FinLite - DIY Financial Planning Kit',
          href: '/temp',
        },
        {
          title: 'Wealth360 - Family Concierge',
          href: '/temp',
        },
      ],
    },
  },
  {
    service: {
      title: 'Secretarial Practice',
      href: '/temp',
      subText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      subServices: [
        {
          title: 'ROC Annual Compliance (Companies & LLPs)',
          href: '/temp',
        },
        {
          title: 'Company/LLP/OPC Compliance',
          href: '/temp',
        },
        {
          title: 'DIN e-KYC',
          href: '/temp',
        },
        {
          title: 'Winding Up (Company / LLP)',
          href: '/temp',
        },
        {
          title: 'CXO Services / Virtual CFO',
          href: '/temp',
        },
      ],
    },
  },
]
