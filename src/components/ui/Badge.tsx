import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Tone = 'lavender' | 'pink' | 'neutral' | 'outline' | 'dark' | 'success' | 'violet'

const tones: Record<Tone, string> = {
  lavender: 'bg-lavender text-violet-deep',
  pink: 'bg-pink-soft text-coral-deep',
  neutral: 'bg-bg text-ink border border-line',
  outline: 'bg-transparent text-muted border border-line',
  dark: 'bg-white/10 text-white border border-white/15',
  success: 'bg-success/10 text-success',
  violet: 'bg-violet text-white',
}

interface BadgeProps {
  tone?: Tone
  className?: string
  children: ReactNode
  uppercase?: boolean
}

export function Badge({ tone = 'lavender', className, children, uppercase = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold leading-5',
        uppercase && 'uppercase tracking-[0.12em] text-[11px]',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
