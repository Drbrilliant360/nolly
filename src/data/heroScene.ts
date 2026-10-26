/**
 * Content for the 3D hero scene. Each panel stands for one content category and
 * leads either to a case study or to the section of the page that covers it.
 */
export type ScenePanelId = 'digital-skills' | 'digital-payments' | 'creative-ideas' | 'storytelling' | 'content-strategy'

interface BasePanel {
  id: ScenePanelId
  category: string
  title: string
  /** Spoken label for assistive technology. */
  label: string
}

export interface ProjectPanel extends BasePanel {
  kind: 'project'
  slug: string
  /** A real asset from the project, or none when only an illustrative preview exists. */
  image?: { src: string; alt: string; width: number; height: number }
}

export interface AnchorPanel extends BasePanel {
  kind: 'anchor'
  href: `#${string}`
}

export type ScenePanel = ProjectPanel | AnchorPanel

export const scenePanels = {
  digitalSkills: {
    id: 'digital-skills',
    kind: 'project',
    category: 'Digital skills',
    title: 'Letis Under30',
    label: 'Letis Platform case study: digital skills promotion',
    slug: 'letis-platform',
    image: { src: '/media/letis-under30-cover.jpg', alt: 'Restituta presenting the Letis Under30 programme to camera', width: 1280, height: 1280 },
  },
  digitalPayments: {
    id: 'digital-payments',
    kind: 'project',
    category: 'Digital payments',
    title: 'NEDA Pay',
    label: 'NEDA Pay case study: short-form video on digital payments',
    slug: 'neda-pay',
  },
  creativeIdeas: {
    id: 'creative-ideas',
    kind: 'project',
    category: 'Creative ideas',
    title: 'Personal experiments',
    label: 'Personal creative experiments case study',
    slug: 'personal-creative-experiments',
    image: { src: '/media/motivation-swahili-poster.jpg', alt: 'Restituta speaking to camera in a Swahili motivation video', width: 720, height: 1280 },
  },
  storytelling: {
    id: 'storytelling',
    kind: 'anchor',
    category: 'Storytelling',
    title: 'Scripts & hooks',
    label: 'Jump to skills: scriptwriting and hooks',
    href: '#skills',
  },
  contentStrategy: {
    id: 'content-strategy',
    kind: 'anchor',
    category: 'Content strategy',
    title: 'Planning & campaigns',
    label: 'Jump to process: content strategy and planning',
    href: '#process',
  },
} as const satisfies Record<string, ScenePanel>
