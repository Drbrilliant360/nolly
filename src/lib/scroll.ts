import { prefersReducedMotion } from './motion'

/** Scrolls to an element by id, honouring the sticky nav offset and reduced-motion preference. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  return true
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}
