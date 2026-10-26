import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import { cn } from '../../lib/cn'

interface IconProps {
  icon: IconSvgElement
  size?: number
  strokeWidth?: number
  className?: string
  /** Supply a label only when the icon conveys meaning on its own. */
  label?: string
}

/** Thin wrapper around Hugeicons (https://hugeicons.com) with sensible defaults for this site. */
export function Icon({ icon, size = 20, strokeWidth = 1.75, className, label }: IconProps) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={cn('shrink-0', className)}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      focusable="false"
    />
  )
}
