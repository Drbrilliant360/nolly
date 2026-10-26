import { useCallback, useEffect, useRef, useState } from 'react'
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { navigation, sectionIds } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { scrollToTop } from '../../lib/scroll'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Monogram } from '../ui/Monogram'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    toggleRef.current?.focus()
  }, [])

  // Sections without their own nav item (skills, results, experience, moments, tools) highlight the nearest nav item above them.
  const navIds = new Set<string>(navigation.map((item) => item.id))
  const activeNav = (() => {
    const order = sectionIds as readonly string[]
    for (let i = order.indexOf(active); i >= 0; i--) if (navIds.has(order[i])) return order[i]
    return null
  })()

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 h-(--nav-height) border-b transition-[box-shadow,background-color,border-color] duration-300',
        scrolled || menuOpen
          ? 'border-line/80 bg-bg/92 shadow-nav backdrop-blur-md'
          : 'border-transparent bg-bg/70 backdrop-blur-sm',
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault()
            setMenuOpen(false)
            scrollToTop()
            window.history.replaceState(null, '', window.location.pathname + window.location.search)
          }}
          className="flex min-h-11 min-w-0 items-center gap-3 rounded-lg py-1"
          aria-label={`${profile.name}, back to top`}
        >
          <Monogram size="sm" />
          <span className="truncate font-display text-[17px] font-semibold tracking-tight text-ink">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const isActive = activeNav === item.id
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors',
                    isActive ? 'text-violet-deep' : 'text-ink/80 hover:text-violet-deep',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-violet transition-[opacity,scale] duration-300',
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50',
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Wrapper carries the responsive display so it cannot clash with Button's own display class. */}
          <div className="hidden md:contents">
            <Button href="#contact" size="sm" icon={ArrowRight01Icon} nudge>
              Let&rsquo;s Collaborate
            </Button>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="lift press inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink hover:border-violet/50 hover:text-violet-deep lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon icon={menuOpen ? Cancel01Icon : Menu01Icon} size={22} className={cn('transition-transform duration-300 ease-(--ease-soft)', menuOpen && 'rotate-90')} />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={closeMenu} activeId={activeNav} />
    </header>
  )
}
