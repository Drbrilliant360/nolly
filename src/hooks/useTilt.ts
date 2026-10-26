import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/motion'

/**
 * Tilts an element towards the pointer in 3D while hovered, easing back when it leaves.
 * Uses the `transform` property only, so it composes with the `translate`-based `.lift` hover.
 * Fine pointers only; inert under reduced motion.
 */
export function useTilt<T extends HTMLElement>(maxTilt = 6) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0
    let frame = 0

    const tick = () => {
      x += (targetX - x) * 0.14
      y += (targetY - y) * 0.14
      el.style.transform = `perspective(900px) rotateX(${(-y * maxTilt).toFixed(3)}deg) rotateY(${(x * maxTilt).toFixed(3)}deg)`
      const settled = Math.abs(targetX - x) < 0.001 && Math.abs(targetY - y) < 0.001
      if (settled && targetX === 0 && targetY === 0) el.style.transform = ''
      frame = settled ? 0 : requestAnimationFrame(tick)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      targetY = ((event.clientY - rect.top) / rect.height) * 2 - 1
      schedule()
    }
    const onLeave = () => {
      targetX = 0
      targetY = 0
      schedule()
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
      el.style.transform = ''
    }
  }, [maxTilt])

  return ref
}
