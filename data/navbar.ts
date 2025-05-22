import ServicesDropdown from '@/layouts/navbar/ServicesDropdown'
import {
  NavLinkType,
  ServicesDropdownType,
  ToolsDropdownType,
} from '@/types/dataTypes'

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
    label: 'Tools',
    href: '',
    isLink: false,
    isDropdown: true,
    dropdownType: 'tools',
  },
  {
    label: 'Blogs',
    href: '/blogs',
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
    dropdownType: 'services',
  },
  {
    label: 'Tools',
    href: '/tools',
    isLink: true,
    isDropdown: false,
  },
  {
    label: 'Blogs',
    href: '/blogs',
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
      title: 'Tax Filing & Advisory',
      href: '/tax-filing-and-advisory',
      subText:
        'Professional tax services for individuals and businesses to optimize tax benefits and ensure compliance.',
      subServices: [
        {
          title: 'Income Tax Return Filing (Individuals, HUFs)',
          href: '/income-tax-return-filing',
        },
        {
          title: 'Business Return Filing (Firms, Companies)',
          href: '/temp2',
        },
        {
          title: 'TDS Return Filing',
          href: '/temp3',
        },
        {
          title: 'Property TDS Return - Form 26QB',
          href: '/temp4',
        },
        {
          title: 'Income Tax Notices & Response Handling',
          href: '/temp5',
        },
        {
          title: 'TAN Registration',
          href: '/temp6',
        },
      ],
    },
  },
  {
    service: {
      title: 'GST Services',
      href: '/gst',
      subText:
        'Comprehensive GST solutions for registration, regular filing, and compliance assistance.',
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
      subText:
        'End-to-end business registration services for various entity types and regulatory requirements.',
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
      title: 'Payroll & Labor Compliance',
      href: '/temp',
      subText:
        'Streamlined payroll management and labor compliance solutions for businesses of all sizes.',
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
      title: 'Financial Planning & Wealth Services',
      href: '/temp',
      subText:
        'Expert financial planning and wealth management services to secure your financial future.',
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
      title: ' Corporate & Secretarial Compliance',
      href: '/temp',
      subText:
        'Professional support for ongoing corporate compliance and secretarial requirements.',
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

export const TOOLS_DROPDOWN: ToolsDropdownType[] = [
  {
    title: 'Tax Calculator',
    shortDescription:
      'Calculate your income tax liability for the current financial year.',
    href: '/tax-calculator',
  },
  {
    title: 'Refund Status',
    shortDescription: 'Know your current refund status',
    href: '/user/refund-status',
  },
  {
    title: 'HRA Calculator',
    shortDescription: 'Calculate you House Rental Allowance exemption.',
    href: '/hra-calculator',
  },
  {
    title: 'EMI Calculator',
    shortDescription: 'Calculate EMI for your loan.',
    href: '/emi-calculator',
  },
  {
    title: 'SIP Calculator',
    shortDescription: 'Plan you investments with SIP calculator.',
    href: '/spi-calculator',
  },
  {
    title: 'Pan Aadhar Linking',
    shortDescription: 'Know you Pan Aadhar linking status',
    href: '/user/pan-aadhar-link',
  },
]
