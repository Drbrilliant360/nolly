import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, lede, align = 'left', tone = 'light', className, id }: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <p className={cn('eyebrow', dark && 'text-pink-soft')}>{eyebrow}</p>
      <h2 id={id} className={cn('heading-section mt-4', dark && 'text-white')}>
        {title}
      </h2>
      {lede && <p className={cn('lede mt-5', dark && 'text-white/75')}>{lede}</p>}
    </div>
  )
}
