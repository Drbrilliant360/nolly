import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ProjectModalContext } from './ProjectModalContext'
import { findProjectBySlug } from '../data/projects'

const PARAM = 'project'

function readSlugFromUrl() {
  const slug = new URLSearchParams(window.location.search).get(PARAM)
  return findProjectBySlug(slug)?.slug ?? null
}

/**
 * Keeps the open case study in sync with `?project=<slug>` so links are shareable
 * and a refresh or direct visit restores the same view without any server routing.
 */
export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(() => readSlugFromUrl())

  useEffect(() => {
    // A slug that matches no project is dropped from the URL rather than left dangling.
    const url = new URL(window.location.href)
    if (url.searchParams.has(PARAM) && !readSlugFromUrl()) {
      url.searchParams.delete(PARAM)
      window.history.replaceState(null, '', url)
    }
  }, [])

  useEffect(() => {
    const onPopState = () => setActiveSlug(readSlugFromUrl())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const openProject = useCallback((slug: string) => {
    if (!findProjectBySlug(slug)) return
    const url = new URL(window.location.href)
    const alreadyOpen = url.searchParams.get(PARAM) !== null
    url.searchParams.set(PARAM, slug)
    url.hash = ''
    if (alreadyOpen) window.history.replaceState(null, '', url)
    else window.history.pushState(null, '', url)
    setActiveSlug(slug)
  }, [])

  const closeProject = useCallback(() => {
    const url = new URL(window.location.href)
    if (url.searchParams.has(PARAM)) {
      url.searchParams.delete(PARAM)
      window.history.replaceState(null, '', url)
    }
    setActiveSlug(null)
  }, [])

  const value = useMemo(() => ({ activeSlug, openProject, closeProject }), [activeSlug, openProject, closeProject])

  return <ProjectModalContext.Provider value={value}>{children}</ProjectModalContext.Provider>
}
