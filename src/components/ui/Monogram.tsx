import { profile } from '../../data/profile'
import { cn } from '../../lib/cn'

interface MonogramProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = { sm: 'size-9 text-[13px] rounded-lg', md: 'size-11 text-[15px] rounded-xl', lg: 'size-14 text-lg rounded-2xl' }

export function Monogram({ size = 'md', className }: MonogramProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'bg-gradient-brand inline-flex items-center justify-center font-display font-bold tracking-tight text-white shadow-[0_8px_20px_-10px_rgb(118_85_232/0.7)]',
        sizes[size],
        className,
      )}
    >
      {profile.initials}
    </span>
  )
}
