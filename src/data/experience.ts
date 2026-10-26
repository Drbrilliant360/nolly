export interface Experience {
  id: string
  organization: string
  role: string
  description: string
  /** Dates are intentionally omitted until confirmed. */
  period?: string
  projectSlug?: string
}

export const experience: Experience[] = [
  {
    id: 'letis',
    organization: 'Letis Platform',
    role: 'Promotional Content Creation',
    description:
      'Contributed promotional content ideas, hooks, scripts, and visual concepts to support communication about the Letis Under30 digital-skills program.',
    projectSlug: 'letis-platform',
  },
  {
    id: 'her-campus',
    organization: 'Letis Platforms · Her Campus Programme',
    role: 'Her Campus Programme Leader',
    description:
      'Selected as a Her Campus Programme Leader for the IFM Dar es Salaam campus, representing the programme in short-form video features on digital skills, leadership and AI as a creative tool.',
    period: '2026',
  },
  {
    id: 'neda-pay',
    organization: 'NEDA Pay',
    role: 'Digital Content Creation',
    description:
      'Contributed to promotional video content intended to help audiences understand digital payment services, wallet use, and international transfers.',
    projectSlug: 'neda-pay',
  },
]

export interface Certification {
  id: string
  title: string
  issuer?: string
  date?: string
  /** Image on the card: the certificate itself, or a published programme feature while the certificate is pending. */
  imageSrc: string
  imageAlt?: string
  width?: number
  height?: number
  /** Small print under the image: what it shows, or what is still to come. */
  note?: string
  detailsPending: boolean
}

export const certifications: Certification[] = [
  {
    id: 'liberty-sparks',
    title: 'Uhuru Women’s Economic Forum 2026',
    issuer: 'Liberty Sparks Academy',
    date: 'April 2026',
    imageSrc: '/media/liberty-sparks-certificate.jpg',
    imageAlt: 'Liberty Sparks Academy certificate of participation presented to Restituta Kalanga for the Uhuru Women’s Economic Forum 2026',
    width: 1080,
    height: 820,
    note: 'Certificate of participation, as shared on Instagram.',
    detailsPending: false,
  },
  {
    id: 'her-campus',
    title: 'Her Campus Programme',
    issuer: 'Letis Platforms',
    date: '2026',
    imageSrc: '/media/her-campus-welcome.jpg',
    imageAlt: 'Her Campus Programme welcome feature for Restituta Kalanga, IFM Dar es Salaam',
    width: 1120,
    height: 1400,
    note: 'Programme welcome feature. The certificate will be added once issued.',
    detailsPending: true,
  },
]
