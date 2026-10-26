export interface Skill {
  id: string
  title: string
  description: string
  preview: 'idea' | 'poster' | 'script' | 'tools'
}

export const skills: Skill[] = [
  {
    id: 'ideation',
    title: 'Content Ideation',
    description:
      "Developing creative promotional ideas, content hooks, and storytelling concepts that help communicate a brand's message.",
    preview: 'idea',
  },
  {
    id: 'promotional',
    title: 'Promotional Content',
    description: 'Supporting program and brand promotion through content concepts, scripts, and visual communication.',
    preview: 'poster',
  },
  {
    id: 'scripts',
    title: 'Scriptwriting and Hooks',
    description:
      'Developing opening hooks, short scripts, and content angles designed to make digital messages more engaging.',
    preview: 'script',
  },
  {
    id: 'tools',
    title: 'Digital Creative Tools',
    description: 'Exploring digital tools for content planning, graphic design, and AI-assisted creative development.',
    preview: 'tools',
  },
]

export const aboutCapabilities = ['Creative storytelling', 'Promotional content', 'Digital communication'] as const
