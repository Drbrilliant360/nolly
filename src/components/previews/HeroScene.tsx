import type { CSSProperties, MouseEvent, ReactNode } from 'react'
import {
  ArrowUpRight01Icon,
  Comment01Icon,
  FavouriteIcon,
  InstagramIcon,
  Mortarboard01Icon,
  PenTool03Icon,
  PlayIcon,
  Target02Icon,
  Wallet01Icon,
} from '@hugeicons/core-free-icons'
import { scenePanels, type ScenePanel } from '../../data/heroScene'
import { profile } from '../../data/profile'
import { useProjectModal } from '../../hooks/useProjectModal'
import { useSceneParallax } from '../../hooks/useSceneParallax'
import { cn } from '../../lib/cn'
import { Icon } from '../ui/Icon'
import { Portrait } from './Portrait'

/* ------------------------------------------------------------------ helpers */

/** Float timing per element so nothing moves in lockstep. Rotation range is in degrees. */
const float = (duration: number, delay: number, sway = 1.2) =>
  ({ '--float-dur': `${duration}s`, '--float-delay': `${delay}s`, '--float-rot-a': `${-sway}deg`, '--float-rot-b': `${sway}deg` }) as CSSProperties

interface LayerProps {
  /** Depth in px along the camera axis. Positive is towards the viewer. */
  d: number
  className?: string
  decorative?: boolean
  children: ReactNode
}

/** An absolutely positioned slice of the scene at a given depth. */
function Layer({ d, className, decorative, children }: LayerProps) {
  return (
    <div aria-hidden={decorative || undefined} className={cn('layer absolute', className)} style={{ '--d': d } as CSSProperties}>
      {children}
    </div>
  )
}

/** Soft, pointer-following highlight for glossy surfaces. */
function Glare() {
  return <span aria-hidden="true" className="glare pointer-events-none absolute inset-0 rounded-[inherit]" />
}

/** The interactive wrapper for a panel: a real link that opens the case study or jumps to a section. */
function PanelLink({ panel, className, children }: { panel: ScenePanel; className?: string; children: ReactNode }) {
  const { openProject } = useProjectModal()
  const href = panel.kind === 'project' ? `?project=${panel.slug}` : panel.href
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (panel.kind !== 'project') return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
    event.preventDefault()
    openProject(panel.slug)
  }
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={panel.label}
      className={cn(
        'press-soft group relative block transition-transform duration-500 ease-(--ease-soft) hover:scale-[1.045] focus-visible:scale-[1.045] focus-visible:outline-offset-4',
        className,
      )}
    >
      {children}
    </a>
  )
}

/* ------------------------------------------------------------------- panels */

function DigitalSkillsPanel() {
  const panel = scenePanels.digitalSkills
  return (
    <PanelLink panel={panel} className="rounded-2xl">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-float">
        <img src={panel.image.src} alt="" width={panel.image.width} height={panel.image.height} loading="eager" decoding="async" className="aspect-square w-full object-cover" />
        <div className="flex items-center justify-between gap-2.5 p-2 sm:p-3">
          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-lavender text-violet-deep sm:size-8">
            <Icon icon={Mortarboard01Icon} size={16} />
          </span>
          <div className="hidden min-w-0 flex-1 sm:block">
            <p className="eyebrow truncate text-[10px]">{panel.category}</p>
            <p className="truncate font-display text-sm font-semibold leading-tight tracking-tight text-ink">{panel.title}</p>
          </div>
          <Icon icon={ArrowUpRight01Icon} size={16} className="shrink-0 text-violet-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <Glare />
      </div>
    </PanelLink>
  )
}

function DigitalPaymentsPanel() {
  const panel = scenePanels.digitalPayments
  return (
    <PanelLink panel={panel} className="rounded-[1.25rem]">
      <div className="relative rounded-[1.25rem] border border-line bg-surface p-1.5 shadow-float">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[0.9rem] bg-[linear-gradient(180deg,#493078_0%,#241638_100%)]">
          <div aria-hidden="true" className="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 rounded-full bg-white/25" />
          <span className="absolute left-1.5 top-4 inline-flex size-6 items-center justify-center rounded-lg bg-white/15 text-pink-soft sm:left-2 sm:top-5 sm:size-7">
            <Icon icon={Wallet01Icon} size={14} />
          </span>
          <span className="absolute left-1/2 top-[46%] inline-flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-night shadow-float transition-transform duration-300 group-hover:scale-110 sm:size-10">
            <Icon icon={PlayIcon} size={15} />
          </span>
          <div aria-hidden="true" className="absolute inset-x-2 bottom-7 space-y-1 sm:inset-x-2.5 sm:bottom-8 sm:space-y-1.5">
            <span className="block h-1 w-full rounded-full bg-white/85 sm:h-1.5" />
            <span className="block h-1 w-4/5 rounded-full bg-white/60 sm:h-1.5" />
            <span className="block h-1 w-1/2 rounded-full bg-coral sm:h-1.5" />
          </div>
          <span className="absolute inset-x-1.5 bottom-1.5 whitespace-nowrap rounded-md bg-white/15 px-1 py-0.5 text-center text-[7px] font-semibold uppercase tracking-[0.08em] text-white/80 sm:text-[8px] sm:tracking-[0.1em]">
            <span className="sm:hidden">Mock-up</span>
            <span className="hidden sm:inline">Illustrative</span>
          </span>
          <Glare />
        </div>
        <p className="mt-1.5 truncate text-center text-[9px] font-semibold text-ink sm:text-[11px]">{panel.title}</p>
        <p className="mb-0.5 hidden truncate text-center text-[9px] text-muted sm:block">{panel.category}</p>
      </div>
    </PanelLink>
  )
}

function CreativeIdeasPanel() {
  const panel = scenePanels.creativeIdeas
  return (
    <PanelLink panel={panel} className="rounded-2xl">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-float">
        <div className="flex items-center gap-1.5 px-2 py-1.5 sm:gap-2 sm:px-2.5 sm:py-2">
          <span className="bg-gradient-brand inline-flex size-5 items-center justify-center rounded-full text-[7px] font-bold text-white sm:size-6 sm:text-[8px]">{profile.initials}</span>
          <span className="hidden min-w-0 flex-1 truncate text-[11px] font-semibold text-ink sm:block">@_.nolly_resty</span>
          <Icon icon={InstagramIcon} size={13} className="ml-auto shrink-0 text-muted sm:ml-0" />
        </div>
        <img src={panel.image.src} alt="" width={panel.image.width} height={panel.image.height} loading="eager" decoding="async" className="aspect-[4/5] w-full object-cover object-top" />
        <div className="flex items-center gap-2 px-2.5 py-2 sm:gap-2.5 sm:px-3">
          <Icon icon={FavouriteIcon} size={14} className="text-coral-deep" />
          <Icon icon={Comment01Icon} size={14} className="text-muted" />
          <span className="eyebrow ml-auto hidden truncate text-[10px] sm:inline">{panel.category}</span>
        </div>
        <Glare />
      </div>
    </PanelLink>
  )
}

function Chip({ panel, icon, tone }: { panel: ScenePanel; icon: typeof PenTool03Icon; tone: 'violet' | 'coral' }) {
  return (
    <PanelLink panel={panel} className="rounded-full">
      <div className="relative flex items-center gap-2.5 overflow-hidden rounded-full border border-line bg-surface py-2 pl-2 pr-4 shadow-float">
        <span className={cn('inline-flex size-8 items-center justify-center rounded-full', tone === 'violet' ? 'bg-lavender text-violet-deep' : 'bg-pink-soft text-coral-deep')}>
          <Icon icon={icon} size={16} />
        </span>
        <span className="leading-tight">
          <span className="block text-[12px] font-semibold text-ink">{panel.category}</span>
          <span className="block text-[11px] text-muted">{panel.title}</span>
        </span>
        <Glare />
      </div>
    </PanelLink>
  )
}

/* -------------------------------------------------------------------- scene */

/**
 * A miniature creative studio: the real portrait in the centre with the content categories
 * floating around it as clickable panels. Depth and parallax are CSS 3D transforms driven by
 * useSceneParallax, so the scene is ordinary, accessible DOM rather than a canvas.
 */
export function HeroScene() {
  const scene = useSceneParallax<HTMLDivElement>({ maxTilt: 7 })

  return (
    <div ref={scene} className="scene relative mx-auto w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-none">
      <div className="stage relative aspect-[4/5]">
        {/* Background forms, far behind the portrait */}
        <Layer d={-120} decorative className="-right-8 -top-8 size-40 sm:-right-14 sm:-top-10 sm:size-56">
          <div className="floaty h-full w-full rounded-[2.5rem] bg-lavender" style={float(12, 0.6, 2.5)} />
        </Layer>
        <Layer d={-90} decorative className="-bottom-8 -left-6 size-32 sm:-left-12 sm:size-44">
          <div className="floaty h-full w-full rounded-full bg-pink-soft" style={float(10, 1.4, 2)} />
        </Layer>

        {/* The portrait card */}
        <Layer d={0} className="inset-x-[14%] bottom-[7%] top-[3%]">
          <div className="floaty relative h-full w-full overflow-hidden rounded-[2rem] border border-white/70 bg-surface shadow-float" style={float(9, 0, 0.35)}>
            <Portrait />
            <Glare />
          </div>
        </Layer>

        {/* Content panels, in front of the portrait */}
        <Layer d={70} className="-left-2 top-[3%] w-20 sm:-left-8 sm:w-40 lg:w-44">
          <div className="floaty" style={float(7.5, 0.3)}>
            <DigitalSkillsPanel />
          </div>
        </Layer>
        <Layer d={100} className="-right-1 top-[2%] w-[4.25rem] sm:-right-8 sm:w-24 lg:w-[6.75rem]">
          <div className="floaty" style={float(6.5, 1.1, 1.6)}>
            <DigitalPaymentsPanel />
          </div>
        </Layer>
        <Layer d={55} className="-bottom-[3%] -right-2 w-20 sm:-right-10 sm:w-36 lg:w-40">
          <div className="floaty" style={float(8.5, 2, 1)}>
            <CreativeIdeasPanel />
          </div>
        </Layer>
        <Layer d={115} className="-left-6 bottom-[27%] hidden sm:block">
          <div className="floaty" style={float(7, 0.8, 1.4)}>
            <Chip panel={scenePanels.storytelling} icon={PenTool03Icon} tone="violet" />
          </div>
        </Layer>
        <Layer d={40} className="-bottom-4 left-[24%] hidden sm:block">
          <div className="floaty" style={float(9.5, 1.7, 1)}>
            <Chip panel={scenePanels.contentStrategy} icon={Target02Icon} tone="coral" />
          </div>
        </Layer>

        {/* Small geometric accents at mixed depths */}
        <Layer d={130} decorative className="right-[28%] -top-3 size-5 sm:size-7">
          <div className="floaty h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffb9ad,#ff725e_60%,#d9553f)] shadow-[0_6px_14px_-6px_rgb(255_114_94/0.7)]" style={float(5.5, 0.2, 0)} />
        </Layer>
        <Layer d={-60} decorative className="left-[6%] -top-5 size-14 sm:left-[8%] sm:size-20">
          <div className="spin-slow h-full w-full rounded-full border-[5px] border-violet/25 sm:border-[6px]" style={{ '--spin-dur': '26s' } as CSSProperties} />
        </Layer>
        <Layer d={150} decorative className="left-[46%] bottom-[12%] size-2.5 sm:size-3">
          <div className="floaty h-full w-full rounded-full bg-violet shadow-[0_0_12px_rgb(118_85_232/0.6)]" style={float(4.8, 1.3, 0)} />
        </Layer>
        <Layer d={120} decorative className="right-[5%] top-[45%] hidden size-9 sm:block">
          <div className="spin-slow bg-gradient-brand h-full w-full rounded-xl opacity-90 shadow-float" style={{ '--spin-dur': '38s' } as CSSProperties} />
        </Layer>
        <Layer d={-40} decorative className="left-[18%] bottom-[4%] size-10 sm:size-12">
          <div className="floaty h-full w-full rounded-full border border-coral/30" style={float(8, 0.9, 0)} />
        </Layer>
      </div>
    </div>
  )
}
