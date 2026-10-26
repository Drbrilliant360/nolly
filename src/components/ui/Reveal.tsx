import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay before the reveal starts, in ms. */
  delay?: number
  as?: 'div' | 'li' | 'ul' | 'ol' | 'article' | 'section'
  /**
   * CSS selector for descendants to reveal one after another instead of the wrapper itself,
   * for example `:scope > li` to stagger the cards of a grid.
   */
  items?: string
  /** Gap between staggered items, in ms. */
  stagger?: number
  /** Starting vertical offset in px. */
  y?: number
}

/**
 * Fades and lifts content into view once as it scrolls in, powered by Anime.js's scroll observer.
 * Under reduced motion the content simply renders in place.
 */
export function Reveal({ children, className, delay = 0, as = 'div', items, stagger = 80, y = 18 }: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ items, delay, stagger: items ? stagger : 0, y, clearTransform: true })
  const Tag = as
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  )
}
