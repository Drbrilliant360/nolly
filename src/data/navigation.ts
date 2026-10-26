export interface NavItem {
  label: string
  href: `#${string}`
  id: string
}

export const navigation: NavItem[] = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Process', href: '#process', id: 'process' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

/** Every anchored section in page order, used for scroll-spy. */
export const sectionIds = [
  'top',
  'about',
  'skills',
  'work',
  'process',
  'results',
  'experience',
  'moments',
  'tools',
  'services',
  'contact',
] as const
