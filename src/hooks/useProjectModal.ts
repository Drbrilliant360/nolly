import { useContext } from 'react'
import { ProjectModalContext } from '../context/ProjectModalContext'

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext)
  if (!ctx) throw new Error('useProjectModal must be used within ProjectModalProvider')
  return ctx
}
