export interface Service {
  id: string
  title: string
  description: string
  ctaLabel: string
  /** Value used in the contact form "Service of interest" select. */
  formValue: string
  icon: 'idea' | 'megaphone' | 'caption' | 'script' | 'design' | 'ai'
}

export const services: Service[] = [
  {
    id: 'ideation',
    title: 'Social Media Content Ideation',
    description: "Developing content ideas aligned with a brand's message and audience.",
    ctaLabel: 'Ask about content ideation',
    formValue: 'Content ideation',
    icon: 'idea',
  },
  {
    id: 'promotional',
    title: 'Promotional Content Development',
    description: 'Helping communicate programs, products, campaigns, and initiatives.',
    ctaLabel: 'Ask about promotional content',
    formValue: 'Promotional content',
    icon: 'megaphone',
  },
  {
    id: 'captions',
    title: 'Captions and Copywriting',
    description: 'Creating captions, hooks, and supporting copy for digital content.',
    ctaLabel: 'Ask about captions and copy',
    formValue: 'Captions and copywriting',
    icon: 'caption',
  },
  {
    id: 'scripts',
    title: 'Promotional Video Scripts',
    description: 'Developing short scripts, opening hooks, and video concepts.',
    ctaLabel: 'Ask about video scripts',
    formValue: 'Video scripts',
    icon: 'script',
  },
  {
    id: 'design',
    title: 'Graphic Design and Posters',
    description: 'Creating promotional visual concepts and designs.',
    ctaLabel: 'Ask about graphic design',
    formValue: 'Graphic design',
    icon: 'design',
  },
  {
    id: 'digital-support',
    title: 'Creative Digital Support',
    description: 'Supporting content development with digital creative tools and AI-assisted ideation.',
    ctaLabel: 'Ask about creative support',
    formValue: 'Other collaboration',
    icon: 'ai',
  },
]

export const serviceOptions = [
  'Content ideation',
  'Promotional content',
  'Captions and copywriting',
  'Video scripts',
  'Graphic design',
  'Other collaboration',
] as const

export type ServiceOption = (typeof serviceOptions)[number]
