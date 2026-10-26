import { ArrowUpRight01Icon, Certificate01Icon } from '@hugeicons/core-free-icons'
import type { Certification, Experience } from '../../data/experience'
import { useProjectModal } from '../../hooks/useProjectModal'
import { cn } from '../../lib/cn'
import { Badge } from '../ui/Badge'
import { Icon } from '../ui/Icon'

export function ExperienceCard({ item }: { item: Experience }) {
  const { openProject } = useProjectModal()
  return (
    <li className="relative pl-10 sm:pl-12">
      <span aria-hidden="true" className="absolute left-0 top-1.5 inline-flex size-6 items-center justify-center rounded-full border-2 border-violet bg-surface">
        <span className="size-2 rounded-full bg-violet" />
      </span>
      <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">{item.organization}</p>
          {item.period && <Badge tone="outline">{item.period}</Badge>}
        </div>
        <h3 className="heading-card mt-2">{item.role}</h3>
        <p className="mt-3 text-[15px] leading-7 text-muted">{item.description}</p>
        {item.projectSlug && (
          <button
            type="button"
            onClick={() => openProject(item.projectSlug!)}
            className="group -mb-2 mt-3 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-violet-deep hover:text-violet"
          >
            View case study
            <Icon icon={ArrowUpRight01Icon} size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        )}
      </div>
    </li>
  )
}

export function CertificationCard({ item }: { item: Certification }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-pink-soft text-coral-deep">
          <Icon icon={Certificate01Icon} size={22} />
        </span>
        <div>
          <h3 className="font-display text-base font-semibold tracking-tight lg:text-lg">{item.title}</h3>
          {(item.issuer || item.date) && <p className="text-sm text-muted">{[item.issuer, item.date].filter(Boolean).join(' · ')}</p>}
        </div>
      </div>
      <div className={cn('mt-5 overflow-hidden rounded-xl border border-line bg-bg', !item.imageSrc && 'border-dashed')}>
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt={item.imageAlt ?? `${item.title} certificate`}
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
            style={item.width && item.height ? { aspectRatio: `${item.width} / ${item.height}` } : undefined}
          />
        ) : (
          <div className="dots flex aspect-[4/3] flex-col items-center justify-center gap-2 p-6 text-center">
            <Icon icon={Certificate01Icon} size={28} className="text-muted/70" />
            <p className="text-sm font-semibold text-ink">Certificate image to be added</p>
            <p className="text-xs text-muted">Details to be added</p>
          </div>
        )}
      </div>
      {item.note && <p className="mt-3 text-xs leading-5 text-muted">{item.note}</p>}
    </div>
  )
}
