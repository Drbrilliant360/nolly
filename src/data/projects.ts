export type AccentTheme = 'lavender' | 'coral' | 'neutral'

export type ResultStatus = 'verified' | 'pending' | 'unavailable'

export interface VerifiedResult {
  metric: string
  value: string
  period: string
  source: string
  comparison?: string
}

export interface GalleryItem {
  type: 'image' | 'video'
  src: string
  /** Poster frame shown before a video plays. */
  poster?: string
  alt: string
  caption: string
  width: number
  height: number
  /** Where the asset was originally published. */
  source?: { label: string; href: string }
}

export interface Project {
  id: string
  slug: string
  title: string
  shortTitle: string
  organization: string
  category: string
  contentType: string
  shortDescription: string
  objective: string
  audience: string
  challenge: string
  angle: string
  concept: string
  message: string
  callToAction?: string
  contribution: string[]
  contentThemes: string[]
  platforms: string[]
  deliverables: string[]
  /** Path to a real preview image. Empty string renders the labelled illustrative preview. */
  previewImage: string
  gallery: GalleryItem[]
  /** Small print shown under a populated gallery. */
  galleryNote?: string
  results: VerifiedResult[]
  resultStatus: ResultStatus
  resultNote?: string
  featured: boolean
  accentTheme: AccentTheme
  isPersonal?: boolean
}

export const projects: Project[] = [
  {
    id: 'letis',
    slug: 'letis-platform',
    title: 'Letis Platform — Under30 Digital Skills Promotion',
    shortTitle: 'Letis Platform',
    organization: 'Letis Platform',
    category: 'Program Promotion / Digital Skills',
    contentType: 'Promotional video, content hooks, scripts and visual ideas',
    shortDescription:
      'Promotional video and content concepts designed to help communicate the Letis Under30 program and encourage young people to explore digital skills.',
    objective:
      'Help promote the Letis Under30 program and encourage young people to explore opportunities to develop digital skills.',
    audience: 'Young people under 30',
    challenge:
      'Make a digital-skills program feel approachable and worth the time of a young audience that scrolls quickly and sees many opportunities every day.',
    angle:
      'Lead with the practical, everyday value of each skill, from designing a poster in Canva to building a CV, so the program feels immediately useful.',
    concept:
      'Short, clear promotional pieces organised around individual skill themes, each with its own opening hook and a simple visual idea.',
    message: 'Digital skills are within reach, and the Under30 program is a practical place to start.',
    callToAction: 'Explore the Under30 program and start building digital skills.',
    contribution: ['Promotional content ideas', 'Content hooks', 'Scripts', 'On-camera presenting', 'Visual concepts'],
    contentThemes: ['Canva', 'AI tools', 'Cloud tools', 'CV creation', 'Poster design', 'Digital skills opportunities'],
    platforms: ['Instagram'],
    deliverables: ['Talk-to-camera promotional video', 'Promotional content concepts', 'Opening hooks', 'Short scripts', 'Visual concept directions'],
    previewImage: '/media/letis-under30-cover.jpg',
    gallery: [
      {
        type: 'video',
        src: '/media/letis-under30-promo.mp4',
        poster: '/media/letis-under30-poster.jpg',
        alt: 'Restituta presenting the Letis Under30 programme to camera',
        caption:
          'Letis Under30 promotional video. A talk-to-camera piece introducing the programme to people under 30 who want to build a future in the digital economy (1 min 18 s).',
        width: 720,
        height: 1280,
        source: { label: 'Instagram', href: 'https://www.instagram.com/p/DcktENFMjSG/' },
      },
      {
        type: 'video',
        src: '/media/her-campus-ai.mp4',
        poster: '/media/her-campus-ai-poster.jpg',
        alt: 'Restituta speaking to camera, with subtitles, about using AI as a tool',
        caption:
          'Her Campus Programme feature by Letis Platforms: a short subtitled piece on embracing AI as a tool for solving problems and creating opportunities (30 s).',
        width: 720,
        height: 1280,
        source: { label: 'Instagram', href: 'https://www.instagram.com/p/DbsuCbJNQeT/' },
      },
      {
        type: 'image',
        src: '/media/letis-feedback.jpg',
        alt: 'Letis Platforms feedback graphic quoting an Instagram review by Restituta Kalanga',
        caption: 'Review feature published by Letis Platforms, quoting Restituta on how the platform turns access into action for young people.',
        width: 1120,
        height: 1400,
        source: { label: 'Instagram', href: 'https://www.instagram.com/p/DdO5ToPogQs/' },
      },
      {
        type: 'image',
        src: '/media/her-campus-welcome.jpg',
        alt: 'Her Campus Programme welcome graphic featuring Restituta Kalanga, IFM Dar es Salaam',
        caption: 'Welcome feature as a Her Campus Programme Leader for the IFM Dar es Salaam campus, part of the Letis Universe community.',
        width: 1120,
        height: 1400,
        source: { label: 'Instagram', href: 'https://www.instagram.com/p/Da7wj6FNVRH/' },
      },
    ],
    galleryNote: 'Published assets from Instagram. Each item links to the original post.',
    results: [],
    resultStatus: 'pending',
    resultNote:
      'The content contributed to audience interest in the program. Published reach, engagement and registration figures have not yet been verified, so no numbers are shown here.',
    featured: true,
    accentTheme: 'lavender',
  },
  {
    id: 'neda-pay',
    slug: 'neda-pay',
    title: 'NEDA Pay — Digital Payment Content',
    shortTitle: 'NEDA Pay',
    organization: 'NEDA Pay',
    category: 'Digital Payments / Short-Form Video',
    contentType: 'Promotional short-form video content',
    shortDescription:
      'Promotional video content developed to help audiences understand digital payment services, wallet usage, and international money transfers.',
    objective:
      'Help audiences better understand digital payment services and wallet-related topics through accessible promotional video content.',
    audience: 'People new to, or curious about, digital payments and wallet services',
    challenge:
      'Digital payments can sound technical. The content needed to explain wallet use and transfers in plain language without overwhelming the viewer.',
    angle: 'Explain one idea per video, in everyday language, with a clear opening question or scenario.',
    concept:
      'Short vertical videos built around a simple script: a relatable opening, one clear explanation, and a closing prompt.',
    message: 'Digital payments can be simple to understand and use.',
    contribution: ['Promotional video concepts', 'Script development', 'Video content', 'Video editing (as reported by the portfolio owner)'],
    contentThemes: ['Digital payment services', 'Wallet usage', 'International money transfers'],
    platforms: ['Short-form video'],
    deliverables: ['Promotional video concepts', 'Video scripts', 'Edited short-form video content'],
    previewImage: '',
    gallery: [],
    results: [],
    resultStatus: 'pending',
    resultNote:
      'Campaign performance figures are being compiled. Publication dates and outcomes have not been verified, so none are claimed here.',
    featured: true,
    accentTheme: 'coral',
  },
  {
    id: 'personal',
    slug: 'personal-creative-experiments',
    title: 'Personal Creative Experiments',
    shortTitle: 'Personal Experiments',
    organization: 'Personal creative development',
    category: 'Personal Projects / Content Development',
    contentType: 'Captions, hooks, promotional concepts and video ideas',
    shortDescription:
      'Developing ideas for TikTok, Instagram, and LinkedIn through captions, hooks, promotional concepts, and video ideas.',
    objective: 'Explore content concepts, hooks, captions, and video ideas for digital platforms.',
    audience: 'Young professionals, creatives and anyone curious about digital media',
    challenge:
      'Each platform rewards a different tone and format. The experiments explore how one idea can be reshaped for TikTok, Instagram and LinkedIn.',
    angle: 'Treat every idea as a small test: write the hook first, then shape the format around it.',
    concept:
      'A running collection of captions, hooks and video outlines, used to practise clear messaging and platform-specific storytelling.',
    message: 'Good content starts with a clear idea and a hook that earns attention honestly.',
    contribution: ['Content concepts', 'Captions', 'Hooks', 'Promotional ideas', 'Video concepts'],
    contentThemes: ['Digital skills', 'Creative process', 'Personal growth', 'Youth opportunities'],
    platforms: ['TikTok', 'Instagram', 'LinkedIn'],
    deliverables: ['Caption drafts', 'Hook collections', 'Video outlines', 'Promotional concept notes'],
    previewImage: '',
    gallery: [
      {
        type: 'video',
        src: '/media/motivation-swahili.mp4',
        poster: '/media/motivation-swahili-poster.jpg',
        alt: 'Restituta speaking to camera in Swahili about motivation and consistency',
        caption:
          '“Acha excuses na anza kufanya kweli.” A Swahili talk-to-camera piece on acting without waiting for motivation (2 min 18 s).',
        width: 720,
        height: 1280,
        source: { label: 'Instagram', href: 'https://www.instagram.com/p/Dc8voR6MQic/' },
      },
    ],
    galleryNote: 'A published experiment from Instagram, linked to the original post.',
    results: [],
    resultStatus: 'unavailable',
    resultNote:
      'These are personal creative experiments rather than client campaigns, so no performance figures are presented.',
    featured: true,
    accentTheme: 'neutral',
    isPersonal: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function findProjectBySlug(slug: string | null | undefined) {
  if (!slug) return undefined
  return projects.find((p) => p.slug === slug)
}
