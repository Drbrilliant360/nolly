import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/motion'

interface Options {
  /** Maximum stage tilt in degrees. */
  maxTilt?: number
  /** Also expose scroll progress through the first viewport as `--scroll`. */
  scroll?: boolean
}

/**
 * Drives a CSS 3D scene from the pointer and scroll position.
 *
 * Writes custom properties onto the returned element: `--rx`/`--ry` (stage rotation),
 * `--px`/`--py` (normalised pointer, -1..1, for per-layer parallax), `--lx`/`--ly`
 * (light position for glare) and `--scroll` (0..1). Values ease towards their targets
 * on an animation frame so the camera feels weighted rather than glued to the cursor.
 * Pointer tracking only runs for fine pointers; nothing runs under reduced motion.
 */
export function useSceneParallax<T extends HTMLElement>({ maxTilt = 7, scroll = true }: Options = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const area = (el.closest('section') as HTMLElement | null) ?? el

    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0
    let targetLx = 50
    let targetLy = 40
    let lx = 50
    let ly = 40
    let scrollProgress = 0
    let frame = 0

    const tick = () => {
      x += (targetX - x) * 0.08
      y += (targetY - y) * 0.08
      lx += (targetLx - lx) * 0.08
      ly += (targetLy - ly) * 0.08
      el.style.setProperty('--rx', `${(-y * maxTilt).toFixed(3)}deg`)
      el.style.setProperty('--ry', `${(x * maxTilt).toFixed(3)}deg`)
      el.style.setProperty('--px', x.toFixed(4))
      el.style.setProperty('--py', y.toFixed(4))
      el.style.setProperty('--lx', `${lx.toFixed(2)}%`)
      el.style.setProperty('--ly', `${ly.toFixed(2)}%`)
      el.style.setProperty('--scroll', scrollProgress.toFixed(4))
      const settled = Math.abs(targetX - x) < 0.0005 && Math.abs(targetY - y) < 0.0005 && Math.abs(targetLx - lx) < 0.01 && Math.abs(targetLy - ly) < 0.01
      frame = settled ? 0 : requestAnimationFrame(tick)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1
      targetX = Math.max(-1.2, Math.min(1.2, nx))
      targetY = Math.max(-1.2, Math.min(1.2, ny))
      targetLx = 50 + targetX * 35
      targetLy = 40 + targetY * 35
      schedule()
    }
    const onLeave = () => {
      targetX = 0
      targetY = 0
      targetLx = 50
      targetLy = 40
      schedule()
    }
    const onScroll = () => {
      scrollProgress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.8)))
      schedule()
    }

    if (finePointer) {
      area.addEventListener('pointermove', onMove)
      area.addEventListener('pointerleave', onLeave)
    }
    if (scroll) {
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    }
    return () => {
      area.removeEventListener('pointermove', onMove)
      area.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [maxTilt, scroll])

  return ref
}
