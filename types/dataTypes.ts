import { ComponentType, ReactElement } from 'react'

export type HomeLanding2DataType = { title: string; desc: string }

export type HomeServicesType = {
  title: string
  description: string
  href: string
}

export type HomeBenefitsType = {
  title: string
  description: string
  icon: string
}

export type HomeHowItWorksType = {
  step: string
  icon: string
}

export type HomeTestimonialsType = {
  quote: string
  author: string
  content: string
  image: string
}

export type HomeStatsType = {
  value: string
  label: string
  description: string
}

export type AboutInfoGraphics = {
  title: string
  description: string
  image: string
}

export type NavLinkType = {
  label: string
  href: string
  isLink: boolean
  isDropdown: boolean
  icon?: ReactElement
  dropdownType?: 'services' | 'about' | 'tools'
}

export type ServicesDropdownType = {
  service: {
    title: ServicesType
    href: string
    subText: string
    subServices: {
      title: string
      href: string
    }[]
  }
}

export type ServicesType =
  | 'Tax Filing and Advisory'
  | 'GST Services'
  | 'Business Registrations'
  | 'Payroll & Compliance'
  | 'Financial Planning'
  | 'Secretarial Practice'

export type ServerActionReturn = {
  success: boolean
  message: string
  data?: any
}

export type LoadingStateType = {
  loader: 'spinner' | null
  msg: string | null
}
