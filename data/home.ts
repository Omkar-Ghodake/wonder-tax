import {
  HomeBenefitsType,
  HomeServicesType,
  HomeStatsType,
  HomeTestimonialsType,
} from '@/types/dataTypes'

export const SERVICES: HomeServicesType[] = [
  {
    title: 'Income Tax',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
  },
  {
    title: 'GST',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
  },
  {
    title: 'TDS',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
  },
  {
    title: 'Company Incorporation',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
  },
  {
    title: 'Payroll',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
  },
  {
    title: 'Company Audit',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
  },
]

export const BENEFITS: HomeBenefitsType[] = [
  {
    title: 'One Stop Solution',
    description:
      'We are a one stop solution Provider for all your taxation, Financial and business needs.',
    icon: '/idea--1-.svg',
  },
  {
    title: '100% Accuracy Guaranteed',
    description:
      'Our technology based platform and trained experts ensure 100% accuracy in delivering services.',
    icon: '/target.svg',
  },
  {
    title: 'Fastest Tax Refunds',
    description:
      'We guarantee you the maximum eligible refunds without any follow ups with the department.',
    icon: '/rocket.svg',
  },
  {
    title: 'Financial Dashboard',
    description:
      'We provide you with your own Personalized dashboard with all your financial information at one place.',
    icon: '/group-9.png',
  },
  {
    title: 'Privacy and Confidentiality',
    description:
      'We ensure strict adherence to our privacy and confidentiality norms to ensure that your data is safe and secure with us.',
    icon: '/lock.svg',
  },
  {
    title: 'Ease of doing Business',
    description:
      'Offload your financial and taxation department to us so that you can keep your focus on the main business.',
    icon: '/vector-143.svg',
  },
]

export const TESTIMONIALS: HomeTestimonialsType[] = [
  {
    quote: 'Quicker than all',
    author: 'Ashok Ram',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    quote: 'Peace of mind',
    author: 'Nandita Kumar',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    quote: 'Bye bye confusion',
    author: 'Stella John',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
]

export const STATS: HomeStatsType[] = [
  { value: '3140+', label: 'Trusted Clients' },
  { value: '5000+', label: 'Services Completed' },
  { value: '100%', label: 'Confidentiality' },
]
