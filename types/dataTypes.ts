import Tools from '@/app/tools/page'
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
  description: string[]
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
  | 'Tax Filing & Advisory'
  | 'GST Services'
  | 'Business Registrations'
  | 'Payroll & Labor Compliance'
  | 'Financial Planning & Wealth Services'
  | ' Corporate & Secretarial Compliance'

export type ToolsDropdownType = {
  title: Tools
  shortDescription: string
  href: string
}

export type Tools =
  | 'Tax Calculator'
  | 'Refund Status'
  | 'HRA Calculator'
  | 'EMI Calculator'
  | 'SIP Calculator'
  | 'Pan Aadhar Linking'

export type ServerActionReturn = {
  success: boolean
  message: string
  data?: any
}

export type LoadingStateType = {
  loader: 'spinner' | null
  msg: string | null
}

export type FormErrorType = {
  inputName: string | null
  errorMsg: string | null
}

export type PlanType = {
  title: string
  sellingPrice: number
  originalPrice?: number
  features: string[]
}

export type SubPlansType = {
  individual: PlanType[]
  couple: PlanType[]
}

export type ITRFilingPlansType = {
  monthly: SubPlansType
  annual: SubPlansType
}

export type BusinessReturnFilingPlansType = PlanType[]

export type IncomeTaxNoticesPlansType = PlanType[]

export type TANRegistrationPlansType = PlanType[]

export type TDSReturnsFilingPlansType = PlanType[]

export type FinancialPlanningPlansType = PlanType[]
