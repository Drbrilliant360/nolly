import { animate, onScroll, stagger, utils } from 'animejs'
import { prefersReducedMotion } from './motion'

export interface RevealOptions {
  /** Element whose position triggers the reveal. Defaults to the first target. */
  trigger?: Element | null
  /** Starting vertical offset in px. */
  y?: number
  /** Starting scale, for image "settle" effects. */
  scale?: number
  /** Delay before the first target starts, in ms. */
  delay?: number
  /** Gap between targets, in ms. */
  stagger?: number
  duration?: number
  ease?: string
  /** How far above the viewport bottom the trigger must rise before playing. */
  enter?: string
  /**
   * Remove inline transforms once the reveal has finished so CSS hover transforms
   * (for example `group-hover:scale-*`) are not overridden by a stale inline value.
   */
  clearTransform?: boolean
}

/**
 * Hides `targets`, then plays a fade-and-rise once when `trigger` scrolls into view.
 * Returns a cleanup that reverts everything (needed for React StrictMode's double effects).
 * Does nothing under reduced motion, leaving the elements visible.
 */
export function revealOnScroll(targets: HTMLElement[], options: RevealOptions = {}) {
  if (!targets.length || prefersReducedMotion()) return () => {}
  const { trigger = targets[0], y = 18, scale, delay = 0, stagger: each = 0, duration = 850, ease = 'outQuint', enter = 'bottom-=8% top', clearTransform = false } = options

  const initial = utils.set(targets, { opacity: 0, translateY: y, ...(scale ? { scale } : {}) })
  const observer = onScroll({ target: trigger ?? targets[0], enter, sync: 'play', repeat: false })
  const animation = animate(targets, {
    opacity: 1,
    translateY: 0,
    ...(scale ? { scale: 1 } : {}),
    duration,
    ease,
    delay: each ? stagger(each, { start: delay }) : delay,
    autoplay: observer,
    onComplete: () => {
      if (clearTransform) for (const el of targets) el.style.transform = ''
    },
  })

  return () => {
    observer.revert()
    animation.revert()
    initial.revert()
  }
}

/**
 * Drives a CSS custom property on `target` from `from` to `to` in step with scroll position,
 * between the moment the element's top passes `enter` and its bottom passes `leave`.
 */
export function scrollLinkedVar(target: HTMLElement, name: `--${string}`, from: number, to: number, enter = 'bottom-=15% top', leave = 'center bottom') {
  if (prefersReducedMotion()) {
    target.style.setProperty(name, String(to))
    return () => {
      target.style.removeProperty(name)
    }
  }
  const animation = animate(target, {
    [name]: [from, to],
    ease: 'linear',
    duration: 1000,
    autoplay: onScroll({ target, enter, leave, sync: true }),
  })
  return () => {
    animation.revert()
  }
}
