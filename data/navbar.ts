import { NavLinkType } from '@/types/dataTypes'

export const PRIMARY_NAVLINKS: NavLinkType[] = [
  {
    label: 'Services',
    href: '/services',
    isLink: false,
    isDropdown: true,
  },
  {
    label: 'How it Works',
    href: '/how-it-works',
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
