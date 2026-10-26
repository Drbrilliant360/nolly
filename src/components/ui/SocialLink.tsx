import type { IconSvgElement } from '@hugeicons/react'
import { Icon } from './Icon'
import { cn } from '../../lib/cn'

interface SocialLinkProps {
  href: string
  label: string
  icon: IconSvgElement
  tone?: 'light' | 'dark'
  external?: boolean
  className?: string
}

export function SocialLink({ href, label, icon, tone = 'light', external = true, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'lift press group inline-flex size-11 items-center justify-center rounded-full border transition-colors',
        tone === 'light'
          ? 'border-line bg-surface text-ink hover:border-violet/50 hover:text-violet-deep'
          : 'border-white/20 bg-white/5 text-white hover:bg-white/15',
        className,
      )}
    >
      <Icon icon={icon} size={20} className="transition-transform duration-300 group-hover:scale-110" />
    </a>
  )
}
