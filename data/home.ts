import {
  HomeBenefitsType,
  HomeServicesType,
  HomeStatsType,
  HomeTestimonialsType,
  HomeLanding2DataType,
  HomeHowItWorksType,
} from '@/types/dataTypes'

export const LANDING2_DATA: HomeLanding2DataType[] = [
  {
    title: 'No endless waiting for refunds ',
    desc: 'Gone are the days of years of pending refunds. We will ensure you will get the maximum entitled refund on a timely basis.',
  },
  {
    title: 'No confusing paperwork',
    desc: 'Worried about all the never-ending paper work. Our experts are well equipped with technology based platforms to take care of all required documentation.',
  },
  {
    title: 'No complex fee structures',
    desc: 'Worried are complicated fee structure. We are committed to giving you the right plans at the best price.',
  },
]

export const KEY_SERVICES: HomeServicesType[] = [
  {
    title: 'Income Tax',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
    href: '/services/income-tax',
  },
  {
    title: 'GST',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
    href: '/services/income-tax',
  },
  {
    title: 'TDS',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
    href: '/services/income-tax',
  },
  {
    title: 'Company Incorporation',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
    href: '/services/income-tax',
  },
  {
    title: 'Payroll',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
    href: '/services/income-tax',
  },
  {
    title: 'Company Audit',
    description:
      "Wondertax is one of India's fastest-growing fintech company. A fast, reliable and easy-to-use platform to streamline.",
    href: '/services/income-tax',
  },
]

export const BENEFITS: HomeBenefitsType[] = [
  {
    title: 'One Stop Solution',
    description:
      'We are a one stop solution Provider for all your taxation, Financial and business needs.',
    icon: 'wc1.png',
  },
  {
    title: '100% Accuracy Guaranteed',
    description:
      'Our technology based platform and trained experts ensure 100% accuracy in delivering services.',
    icon: 'wc2.png',
  },
  {
    title: 'Fastest Tax Refunds',
    description:
      'We guarantee you the maximum eligible refunds without any follow ups with the department.',
    icon: 'wc3.png',
  },
  {
    title: 'Financial Dashboard',
    description:
      'We provide you with your own Personalized dashboard with all your financial information at one place.',
    icon: 'wc4.png',
  },
  {
    title: 'Privacy and Confidentiality',
    description:
      'We ensure strict adherence to our privacy and confidentiality norms to ensure that your data is safe and secure with us.',
    icon: 'wc5.png',
  },
  {
    title: 'Ease of doing Business',
    description:
      'Offload your financial and taxation department to us so that you can keep your focus on the main business.',
    icon: 'wc6.png',
  },
]

export const HOW_IT_WORKS: HomeHowItWorksType[] = [
  {
    step: 'Create your free account and log in Help us know you better by tell us little bit about yourself.',
    icon: 'hiw1.png',
  },
  {
    step: 'Choose from our wide range of services catering to all your needs or get help from our advisors to help you navigate.',
    icon: 'hiw2.png',
  },
  {
    step: 'Buy your plan, sit back and relax We will deliver the availed services on time without any hassle.',
    icon: 'hiw3.png',
  },
]

export const TESTIMONIALS: HomeTestimonialsType[] = [
  {
    quote: 'Quicker than all',
    author: 'Ashok Ram',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: 'profile1.jpg',
  },
  {
    quote: 'Peace of mind',
    author: 'Nandita Kumar',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: 'profile2.jpg',
  },
  {
    quote: 'Bye bye confusion',
    author: 'Stella John',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: 'profile3.jpg',
  },
]

export const STATS: HomeStatsType[] = [
  {
    value: '3140+',
    label: 'Trusted Clients',
    description: 'We have more than 10 years of experience in this sector',
  },
  {
    value: '5000+',
    label: 'Services Completed',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    value: '100%',
    label: 'Confidentiality',
    description:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
]
