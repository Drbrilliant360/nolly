import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ContainerProps {
  className?: string
  children: ReactNode
  width?: 'default' | 'wide' | 'narrow'
}

const widths = { default: 'max-w-6xl', wide: 'max-w-7xl', narrow: 'max-w-4xl' }

export function Container({ className, children, width = 'default' }: ContainerProps) {
  return <div className={cn('mx-auto w-full px-5 sm:px-8 lg:px-10', widths[width], className)}>{children}</div>
}

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'id'> {
  id: string
  children: ReactNode
  /** Vertical rhythm: regular sections vs. compact supporting sections. */
  spacing?: 'default' | 'compact' | 'none'
  width?: ContainerProps['width']
  /** Decorative layer rendered behind the content, for example a SectionBackdrop photograph. */
  backdrop?: ReactNode
}

const spacings = { default: 'py-16 sm:py-24 lg:py-32', compact: 'py-12 sm:py-16 lg:py-24', none: '' }

export function SectionContainer({ id, children, className, spacing = 'default', width = 'default', backdrop, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn('relative isolate', spacings[spacing], className)} {...rest}>
      {backdrop}
      <Container width={width} className="relative z-10">
        {children}
      </Container>
    </section>
  )
}
