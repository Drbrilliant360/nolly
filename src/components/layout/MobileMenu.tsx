import { useEffect, useRef } from 'react'
import { ArrowRight01Icon, InstagramIcon, Linkedin02Icon, Mail01Icon } from '@hugeicons/core-free-icons'
import { navigation } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { mailtoHref } from '../../lib/links'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { SocialLink } from '../ui/SocialLink'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  activeId: string | null
}

export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) return
    const first = panelRef.current?.querySelector<HTMLElement>('a, button')
    first?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) onClose()
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open, onClose])

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'fixed inset-x-0 top-(--nav-height) bottom-0 z-30 bg-night/30 transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!open}
        className={cn(
          'absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-var(--nav-height))] overflow-y-auto border-b border-line bg-bg px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-4 shadow-nav transition-[translate,opacity,visibility] duration-300 ease-(--ease-soft) sm:px-8 lg:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0',
        )}
      >
        <ul className="flex flex-col">
          {navigation.map((item, i) => (
            <li
              key={item.id}
              className={cn('transition-[translate,opacity] duration-300 ease-(--ease-soft)', open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0')}
              style={{ transitionDelay: open ? `${60 + i * 45}ms` : '0ms' }}
            >
              <a
                href={item.href}
                onClick={onClose}
                aria-current={activeId === item.id ? 'location' : undefined}
                className={cn(
                  'press-soft group flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-xl font-semibold tracking-tight transition-colors',
                  activeId === item.id ? 'bg-lavender text-violet-deep' : 'text-ink hover:bg-lavender/60 active:bg-lavender/60',
                )}
              >
                {item.label}
                <span aria-hidden="true" className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-violet-deep">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div
          className={cn('mt-6 flex flex-col gap-5 border-t border-line pt-6 transition-[translate,opacity] duration-300 ease-(--ease-soft)', open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0')}
          style={{ transitionDelay: open ? `${60 + navigation.length * 45}ms` : '0ms' }}
        >
          <Button href="#contact" onClick={onClose} icon={ArrowRight01Icon} nudge className="w-full">
            Let&rsquo;s Collaborate
          </Button>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-muted">{profile.location}</p>
            <div className="flex gap-2">
              <SocialLink href={profile.linkedin} label="LinkedIn profile" icon={Linkedin02Icon} />
              <SocialLink href={profile.instagram} label="Instagram profile" icon={InstagramIcon} />
              <SocialLink href={mailtoHref} label="Send an email" icon={Mail01Icon} external={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
