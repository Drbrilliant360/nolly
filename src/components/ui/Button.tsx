import { useState, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type PointerEvent, type ReactNode } from 'react'
import type { IconSvgElement } from '@hugeicons/react'
import { Loading03Icon } from '@hugeicons/core-free-icons'
import { Icon } from './Icon'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse' | 'inverse-outline' | 'brand'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  icon?: IconSvgElement
  iconPosition?: 'left' | 'right'
  /** Animate a trailing arrow icon on hover. Shorthand for `iconMotion="nudge"`. */
  nudge?: boolean
  /** How the icon moves on hover: slide sideways, bob up and down (for downward arrows), or stay still. */
  iconMotion?: 'nudge' | 'bounce' | 'none'
  /** Let long labels wrap onto several lines instead of forcing a single line. */
  wrap?: boolean
  /** Show a ripple from the pointer on press. On by default for filled variants. */
  ripple?: boolean
  loading?: boolean
  className?: string
  children: ReactNode
}

type AnchorProps = BaseProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>
type NativeButtonProps = BaseProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

export type ButtonProps = AnchorProps | NativeButtonProps

const variants: Record<Variant, string> = {
  primary:
    'sheen bg-violet text-white hover:bg-violet-deep shadow-[0_10px_24px_-12px_rgb(118_85_232/0.6)] hover:shadow-[0_16px_32px_-12px_rgb(87_55_200/0.7)]',
  brand: 'sheen bg-gradient-brand text-white hover:brightness-105 shadow-[0_10px_24px_-12px_rgb(118_85_232/0.6)] hover:shadow-[0_16px_32px_-12px_rgb(118_85_232/0.7)]',
  secondary:
    'bg-surface text-ink border border-line hover:border-violet/50 hover:bg-lavender/40 hover:text-violet-deep shadow-card hover:shadow-card-hover [--ripple-color:rgb(118_85_232/0.14)]',
  ghost: 'bg-transparent text-violet-deep hover:text-violet hover:bg-lavender/70 [--ripple-color:rgb(118_85_232/0.14)]',
  inverse: 'sheen bg-white text-night hover:bg-pink-soft shadow-[0_12px_28px_-12px_rgb(0_0_0/0.45)] hover:shadow-[0_16px_32px_-12px_rgb(0_0_0/0.5)] [--sheen-color:rgb(118_85_232/0.12)] [--ripple-color:rgb(118_85_232/0.16)]',
  'inverse-outline': 'bg-white/5 text-white border border-white/30 hover:bg-white/12 hover:border-white/60 [--ripple-color:rgb(255_255_255/0.22)]',
}

/** Filled variants ripple by default; outlined and ghost ones opt in. */
const ripplesByDefault: Record<Variant, boolean> = { primary: true, brand: true, inverse: true, secondary: true, ghost: false, 'inverse-outline': true }

const sizes: Record<Size, string> = {
  sm: 'text-sm gap-2',
  md: 'text-[15px] gap-2.5',
  lg: 'text-base gap-3',
}

/* Padding and height are kept apart from `sizes` because `cn` concatenates classes without
   resolving conflicts, so a variant or option that needs different values must swap them in. */
const paddings: Record<Size, string> = { sm: 'px-4', md: 'px-6', lg: 'px-7' }
/* Small buttons grow to a 44px target on touch screens. */
const heights: Record<Size, string> = { sm: 'h-10 pointer-coarse:h-11', md: 'h-12', lg: 'h-13' }
const wrapHeights: Record<Size, string> = { sm: 'min-h-10 py-2 pointer-coarse:min-h-11', md: 'min-h-12 py-2.5', lg: 'min-h-13 py-3' }

const iconMotions = {
  nudge: 'group-hover:translate-x-1',
  bounce: 'group-hover:icon-bob',
  none: '',
} as const

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    nudge = false,
    iconMotion = nudge ? 'nudge' : 'none',
    wrap = false,
    ripple = ripplesByDefault[variant],
    loading = false,
    className,
    children,
    ...rest
  } = props

  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const spawnRipple = (event: PointerEvent<HTMLElement>) => {
    if (!ripple || event.button !== 0) return
    const rect = event.currentTarget.getBoundingClientRect()
    const id = performance.now()
    setRipples((current) => [...current.slice(-2), { id, x: event.clientX - rect.left, y: event.clientY - rect.top }])
  }
  const rippleLayer = ripple
    ? ripples.map((item) => (
        <span
          key={item.id}
          aria-hidden="true"
          className="ripple"
          style={{ left: item.x, top: item.y }}
          onAnimationEnd={() => setRipples((current) => current.filter((r) => r.id !== item.id))}
        />
      ))
    : null

  const classes = cn(
    'lift press group relative inline-flex items-center justify-center overflow-hidden rounded-full font-sans font-semibold select-none',
    wrap ? 'whitespace-normal text-left' : 'whitespace-nowrap',
    'disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0 aria-disabled:cursor-not-allowed aria-disabled:opacity-60',
    'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-violet',
    variants[variant],
    sizes[size],
    variant === 'ghost' ? 'px-3' : paddings[size],
    wrap ? wrapHeights[size] : heights[size],
    className,
  )

  const iconEl = loading ? (
    <Icon icon={Loading03Icon} size={18} className="relative shrink-0 animate-spin" />
  ) : icon ? (
    <Icon icon={icon} size={18} className={cn('relative shrink-0 transition-transform duration-300', iconMotions[iconMotion])} />
  ) : null

  const content = (
    <>
      {rippleLayer}
      {iconPosition === 'left' && iconEl}
      <span className="relative">{children}</span>
      {iconPosition === 'right' && iconEl}
    </>
  )

  if ('href' in props && props.href !== undefined) {
    const { href, onPointerDown, ...anchorRest } = rest as AnchorProps
    return (
      <a
        href={href}
        className={classes}
        {...anchorRest}
        onPointerDown={(event) => {
          spawnRipple(event)
          onPointerDown?.(event)
        }}
      >
        {content}
      </a>
    )
  }

  const { disabled, type = 'button', onPointerDown, ...buttonRest } = rest as NativeButtonProps
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...buttonRest}
      onPointerDown={(event) => {
        spawnRipple(event)
        onPointerDown?.(event)
      }}
    >
      {content}
    </button>
  )
}
