import { Comment01Icon, FavouriteIcon, InstagramIcon, Linkedin02Icon, PlayIcon, TiktokIcon } from '@hugeicons/core-free-icons'
import type { Project } from '../../data/projects'
import { cn } from '../../lib/cn'
import { Icon } from '../ui/Icon'

interface ProjectPreviewProps {
  project: Project
  /** `card` keeps the composition compact; `full` is used inside the case study. */
  size?: 'card' | 'full'
  className?: string
}

function LetisPreview({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-lavender p-6 sm:p-8">
      <div aria-hidden="true" className="absolute -left-12 -top-12 size-48 rounded-full bg-violet/10" />
      <div aria-hidden="true" className="absolute -bottom-20 right-10 size-56 rounded-full bg-pink-soft/80" />
      <div className="relative w-full max-w-[22rem]">
        <div
          aria-hidden="true"
          className="absolute -right-5 -top-5 h-full w-[86%] rotate-[4deg] rounded-2xl bg-violet-deep p-5 text-white shadow-card"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">Program promotion</p>
        </div>
        <div className="relative rotate-[-2deg] rounded-2xl border border-white bg-surface p-5 shadow-float sm:p-6">
          <span className="inline-flex rounded-full bg-violet px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            Digital skills
          </span>
          <p className="mt-4 font-display text-2xl font-bold leading-[1.05] tracking-tight text-ink sm:text-[1.75rem]">
            Under30 Digital Skills
          </p>
          <p className="mt-2 text-sm text-muted">Practical skills, one theme at a time.</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.contentThemes.slice(0, 5).map((theme) => (
              <span key={theme} className="rounded-full bg-lavender px-2.5 py-1 text-[11px] font-semibold text-violet-deep">
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function NedaPreview() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#FFE4DF_0%,#FFB2A5_60%,#FF9A8B_100%)] p-6 pb-12">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="absolute -left-10 top-6 size-48 text-white/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 160c40-10 60-50 70-110" strokeDasharray="6 10" strokeLinecap="round" />
        <path d="M60 180c40-10 70-60 80-130" strokeDasharray="6 10" strokeLinecap="round" />
      </svg>
      <div aria-hidden="true" className="absolute -bottom-10 -right-10 size-44 rounded-full bg-white/30" />

      <div className="relative flex items-center gap-5 sm:gap-8">
        <div className="hidden max-w-[11rem] sm:block">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-night/70">Short-form video</p>
          <p className="mt-2 font-display text-[1.35rem] font-bold leading-[1.05] tracking-tight text-violet-deep lg:text-[1.6rem]">
            Digital payments, explained simply.
          </p>
          <p className="mt-2 text-sm text-night/80">One idea per video. Plain language.</p>
        </div>
        <div className="w-[7.5rem] rounded-[1.5rem] border border-white/80 bg-surface p-1.5 shadow-float sm:w-[8.5rem]">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[1.1rem] bg-night">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#493078_0%,#241638_100%)]" />
            <div aria-hidden="true" className="absolute left-1/2 top-3 h-1 w-10 -translate-x-1/2 rounded-full bg-white/30" />
            <span className="absolute left-1/2 top-[42%] inline-flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-night shadow-float">
              <Icon icon={PlayIcon} size={18} />
            </span>
            <div className="absolute inset-x-3 bottom-4 space-y-1.5">
              <span className="block h-1.5 w-full rounded-full bg-white/90" />
              <span className="block h-1.5 w-4/5 rounded-full bg-white/70" />
              <span className="block h-1.5 w-1/2 rounded-full bg-coral" />
            </div>
            <span className="absolute right-2 top-2 rounded-full bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-night">0:30</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PersonalPreview() {
  return (
    <div className="dots relative flex h-full w-full items-center justify-center overflow-hidden bg-bg p-6">
      <div aria-hidden="true" className="absolute -right-10 -top-10 size-40 rounded-full bg-lavender" />
      <div className="relative w-full max-w-[22rem]">
        <div className="grid grid-cols-[1.2fr_1fr] gap-3">
          <div className="rounded-2xl border border-line bg-surface p-4 shadow-card">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-[10px]">Caption</p>
              <Icon icon={InstagramIcon} size={14} className="text-muted" />
            </div>
            <p className="mt-2 text-[13px] font-medium leading-snug text-ink">
              Small skills add up. Here&rsquo;s the one I&rsquo;m practising this week.
            </p>
            <div className="mt-3 flex items-center gap-3 text-muted">
              <Icon icon={FavouriteIcon} size={14} />
              <Icon icon={Comment01Icon} size={14} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl bg-violet p-3.5 text-white shadow-card">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">Hook</p>
                <Icon icon={TiktokIcon} size={14} className="text-white/80" />
              </div>
              <p className="mt-1.5 text-[12px] font-semibold leading-snug">Start with the question your audience is already asking.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-3.5 shadow-card">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-[10px]">Video idea</p>
                <Icon icon={Linkedin02Icon} size={14} className="text-muted" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-pink-soft text-coral-deep">
                  <Icon icon={PlayIcon} size={11} />
                </span>
                <div className="flex-1 space-y-1" aria-hidden="true">
                  <span className="block h-1.5 w-full rounded-full bg-line" />
                  <span className="block h-1.5 w-2/3 rounded-full bg-line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectPreview({ project, size = 'card', className }: ProjectPreviewProps) {
  if (project.previewImage) {
    return (
      <img
        src={project.previewImage}
        alt={`${project.shortTitle} preview`}
        loading="lazy"
        decoding="async"
        className={cn('h-full w-full object-cover', className)}
      />
    )
  }

  return (
    <div className={cn('relative h-full w-full', className)}>
      {project.accentTheme === 'lavender' && <LetisPreview project={project} />}
      {project.accentTheme === 'coral' && <NedaPreview />}
      {project.accentTheme === 'neutral' && <PersonalPreview />}
      <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted backdrop-blur-sm">
        {size === 'full' ? 'Illustrative preview · not an original campaign asset' : 'Illustrative preview'}
      </span>
    </div>
  )
}
