export interface Tool {
  id: string
  name: string
  description: string
  /** Brand mark served from /public/logos. Logos remain the property of their respective owners. */
  logo: string
  /** Background behind the mark, so each logo sits on the surface its brand guidelines expect. */
  logoBackground?: string
}

/**
 * Tools identified by the portfolio owner as part of her creative toolkit.
 * Proficiency levels are intentionally not inferred or displayed.
 */
export const tools: Tool[] = [
  { id: 'canva', name: 'Canva', description: 'Visual content and promotional design.', logo: '/logos/canva.svg' },
  { id: 'capcut', name: 'CapCut', description: 'Video editing and short-form content workflows.', logo: '/logos/capcut.svg' },
  { id: 'photoshop', name: 'Adobe Photoshop', description: 'Image editing and graphic design.', logo: '/logos/photoshop.svg' },
  { id: 'ai-video', name: 'AI video tools', description: 'Exploring AI-assisted video creation.', logo: '/logos/ai-video.svg' },
  { id: 'chatgpt', name: 'ChatGPT', description: 'Supporting ideation, captions, hooks, and script development.', logo: '/logos/chatgpt.svg' },
]
