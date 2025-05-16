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
    href: '/services',
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
    href: '/services',
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

export const SERVICES_DROPDOWN_LINKS: ServicesDropdownType = [
  {
    service: {
      title: 'Tax Filing and Advisory',
      href: '/services/tax-filing-and-advisory',
      subServices: [
        {
          title: 'Income Tax Return Filing (Individuals, HUFs)',
          href: '#',
        },
        {
          title: 'Business Return Filing (Firms, Companies)',
          href: '#',
        },
        {
          title: 'TDS Return Filing',
          href: '#',
        },
        {
          title: 'Property TDS Return - Form 26QB',
          href: '#',
        },
        {
          title: 'Income Tax Notices & Response Handling',
          href: '#',
        },
        {
          title: 'TAN Registration',
          href: '#',
        },
      ],
    },
  },
  {
    service: {
      title: 'GST Services',
      href: '#',
      subServices: [
        {
          title: 'GST Registration',
          href: '#',
        },
        {
          title: 'LUT Registration ',
          href: '#',
        },
        {
          title: 'GST Return Filing ',
          href: '#',
        },
        {
          title: 'GST Annual Return (GSTR 9/9C)',
          href: '#',
        },
        {
          title: 'GST Cancellation / Final Return (GSTR 10)',
          href: '#',
        },
        {
          title: 'GST Notice Response',
          href: '#',
        },
      ],
    },
  },
  {
    service: {
      title: 'Business Registrations',
      href: '#',
      subServices: [
        {
          title: 'Proprietorship Firm ',
          href: '#',
        },
        {
          title: 'Partnership Firm ',
          href: '#',
        },
        {
          title: 'One Person Company (OPC)',
          href: '#',
        },
        {
          title: 'Limited Liability Partnership (LLP)',
          href: '#',
        },
        {
          title: 'Company Registration',
          href: '#',
        },
        {
          title: 'Trademark Registration',
          href: '#',
        },
        {
          title: 'Import Export Code ',
          href: '#',
        },
      ],
    },
  },
  {
    service: {
      title: 'Payroll & Compliance',
      href: '#',
      subServices: [
        {
          title: '360 degree Payroll Management',
          href: '#',
        },
        {
          title: 'PF / PT / ESIC Registration',
          href: '#',
        },
        {
          title: 'PF / PT / ESIC Return Filing ',
          href: '#',
        },
        {
          title: 'Shop & Establishment License',
          href: '#',
        },
        {
          title: 'Professional Tax Registration',
          href: '#',
        },
      ],
    },
  },
  {
    service: {
      title: 'Financial Planning',
      href: '#',
      subServices: [
        {
          title: 'GoalSmart - Financial Planning',
          href: '#',
        },
        {
          title: 'WealthEdge - Investment Planning',
          href: '#',
        },
        {
          title: 'RetireWell - Retirement Planning',
          href: '#',
        },
        {
          title: 'FinLite - DIY Financial Planning Kit',
          href: '#',
        },
        {
          title: 'Wealth360 - Family Concierge',
          href: '#',
        },
      ],
    },
  },
  {
    service: {
      title: 'Secretarial Practice',
      href: '#',
      subServices: [
        {
          title: 'ROC Annual Compliance (Companies & LLPs)',
          href: '#',
        },
        {
          title: 'Company/LLP/OPC Compliance',
          href: '#',
        },
        {
          title: 'DIN e-KYC',
          href: '#',
        },
        {
          title: 'Winding Up (Company / LLP)',
          href: '#',
        },
        {
          title: 'CXO Services / Virtual CFO',
          href: '#',
        },
      ],
    },
  },
]
