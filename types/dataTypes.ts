import { ReactElement } from 'react'

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
}
