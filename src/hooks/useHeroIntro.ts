import { useLayoutEffect, useRef } from 'react'
import { createTimeline, spring, stagger, svg, utils } from 'animejs'
import { prefersReducedMotion } from '../lib/motion'

/**
 * The opening sequence for the hero, as an Anime.js timeline:
 * pill and eyebrow fade in, the two headline lines rise one after the other, "Stand Out" takes a
 * violet-to-coral highlight while the swash underline draws itself, then the tagline, lede,
 * call-to-action buttons (on a spring), meta row and the 3D scene follow.
 *
 * Elements opt in with `data-hero="<role>"`. Text is never split, so screen readers hear the
 * headline exactly as written. Under reduced motion nothing runs and everything is visible.
 */
export function useHeroIntro<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return

    const q = (role: string) => Array.from(root.querySelectorAll<HTMLElement>(`[data-hero="${role}"]`))
    const pill = q('pill')
    const eyebrow = q('eyebrow')
    const lines = q('line')
    const highlight = q('highlight')
    const swash = root.querySelector<SVGPathElement>('[data-hero="swash"]')
    const tagline = q('tagline')
    const lede = q('lede')
    const ctas = q('cta')
    const meta = q('meta')
    const scene = q('scene')

    const rising = [...pill, ...eyebrow, ...lines, ...tagline, ...lede, ...meta]
    const initial = [
      utils.set(rising, { opacity: 0, translateY: 24 }),
      utils.set(ctas, { opacity: 0, translateY: 18, scale: 0.94 }),
      utils.set(scene, { opacity: 0, translateY: 30, scale: 0.96 }),
      utils.set(highlight, { '--hl': '100%' }),
    ]
    const drawable = swash ? svg.createDrawable(swash) : []
    if (drawable.length) utils.set(drawable, { draw: '0 0' })

    const tl = createTimeline({ defaults: { ease: 'outQuint', duration: 700 } })
      .add(pill, { opacity: 1, translateY: 0 }, 0)
      .add(eyebrow, { opacity: 1, translateY: 0, duration: 550 }, 90)
      .add(lines, { opacity: 1, translateY: 0, duration: 750, delay: stagger(130) }, 170)
      .add(highlight, { '--hl': '0%', duration: 650, ease: 'inOutQuart' }, 560)
      .add(tagline, { opacity: 1, translateY: 0 }, 620)
      .add(lede, { opacity: 1, translateY: 0 }, 730)
      .add(ctas, { opacity: 1, translateY: 0, scale: 1, ease: spring({ stiffness: 170, damping: 17 }), delay: stagger(90) }, 840)
      .add(meta, { opacity: 1, translateY: 0 }, 960)
      .add(scene, { opacity: 1, translateY: 0, scale: 1, duration: 1000 }, 320)
    if (drawable.length) tl.add(drawable, { draw: '0 1', duration: 750, ease: 'inOutSine' }, 680)

    // Once settled, drop the identity transforms so hover and press effects use their own.
    tl.then(() => {
      for (const el of [...rising, ...ctas, ...scene]) el.style.transform = ''
    })

    return () => {
      tl.revert()
      for (const s of initial) s.revert()
    }
  }, [])

  return ref
}
