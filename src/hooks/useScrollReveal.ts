import { useLayoutEffect, useRef } from 'react'
import { revealOnScroll, type RevealOptions } from '../lib/scrollReveal'

/**
 * Reveals the referenced element (or the descendants matching `items`) when it scrolls into view.
 * Runs in a layout effect so the hidden starting state is applied before first paint.
 */
export function useScrollReveal<T extends HTMLElement>(options: RevealOptions & { items?: string } = {}) {
  const ref = useRef<T>(null)
  const { items, trigger, y, scale, delay, stagger, duration, ease, enter, clearTransform } = options

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = items ? Array.from(el.querySelectorAll<HTMLElement>(items)) : [el]
    return revealOnScroll(targets, { trigger: trigger ?? el, y, scale, delay, stagger, duration, ease, enter, clearTransform })
  }, [items, trigger, y, scale, delay, stagger, duration, ease, enter, clearTransform])

  return ref
}
