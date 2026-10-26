import type { CSSProperties } from 'react'
import type { Backdrop } from '../../data/backdrops'
import { cn } from '../../lib/cn'

type Fade = 'down' | 'up' | 'left' | 'right' | 'edges' | 'none'

interface SectionBackdropProps {
  image: Backdrop
  /** How strongly the photograph shows through. Keep low on light sections so text contrast holds. */
  opacity?: number
  /** Which way the photograph fades out so it never competes with the section's content. */
  fade?: Fade
  /** CSS object-position, for choosing which part of the photograph stays visible. */
  position?: string
  blend?: CSSProperties['mixBlendMode']
  className?: string
}

const fades: Record<Fade, string | undefined> = {
  down: 'linear-gradient(to bottom, rgb(0 0 0) 0%, rgb(0 0 0 / 0.6) 45%, transparent 100%)',
  up: 'linear-gradient(to top, rgb(0 0 0) 0%, rgb(0 0 0 / 0.6) 45%, transparent 100%)',
  left: 'linear-gradient(to left, rgb(0 0 0) 0%, rgb(0 0 0 / 0.5) 40%, transparent 85%)',
  right: 'linear-gradient(to right, rgb(0 0 0) 0%, rgb(0 0 0 / 0.5) 40%, transparent 85%)',
  edges: 'radial-gradient(ellipse at center, rgb(0 0 0) 30%, transparent 75%)',
  none: undefined,
}

/**
 * A decorative, full-bleed photograph behind a section. It is purely atmospheric:
 * hidden from assistive technology, never interactive, and loaded lazily.
 */
export function SectionBackdrop({ image, opacity = 0.16, fade = 'down', position = 'center', blend, className }: SectionBackdropProps) {
  const mask = fades[fade]
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 z-0 overflow-hidden', className)}>
      <img
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="h-full w-full select-none object-cover"
        style={{ opacity, objectPosition: position, mixBlendMode: blend, maskImage: mask, WebkitMaskImage: mask }}
      />
    </div>
  )
}
