import { createContext } from 'react'

export interface ProjectModalContextValue {
  activeSlug: string | null
  openProject: (slug: string) => void
  closeProject: () => void
}

export const ProjectModalContext = createContext<ProjectModalContextValue | null>(null)
