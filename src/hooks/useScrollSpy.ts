import { useEffect, useState } from 'react'

/** Reads the sticky nav height from the design token so the spy agrees with `scroll-padding-top`. */
function navOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
  const nav = Number.parseFloat(raw) || 76
  // scroll-padding-top is nav + 16px; a little slack means a section that has just landed counts as active.
  return nav + 32
}

/** Tracks which section id is currently most visible beneath the sticky nav. */
export function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const offset = navOffset()
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 0) current = id
      }
      // Snap to the last section when the page is scrolled to the very bottom.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) current = ids[ids.length - 1] ?? current
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}
