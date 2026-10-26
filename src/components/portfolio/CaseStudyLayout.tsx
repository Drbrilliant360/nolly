import { ArrowLeft01Icon, ArrowRight01Icon, Cancel01Icon, Mail01Icon } from '@hugeicons/core-free-icons'
import type { Project } from '../../data/projects'
import { metricIcons } from '../../lib/icons'
import { cn } from '../../lib/cn'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { ProjectPreview } from '../previews/ProjectPreview'
import { GalleryFigure } from './GalleryFigure'
import { MetricPlaceholder } from './MetricPlaceholder'
import type { ReactNode } from 'react'
import { UserMultipleIcon } from '@hugeicons/core-free-icons'

interface CaseStudyLayoutProps {
  project: Project
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  onContact: () => void
  prevTitle?: string
  nextTitle?: string
  headingId: string
}

const bands: Record<Project['accentTheme'], string> = {
  lavender: 'bg-[linear-gradient(135deg,#EEE8FF_0%,#F6F1FF_60%,#FFE4DF_100%)]',
  coral: 'bg-[linear-gradient(135deg,#FFE4DF_0%,#FFF1EC_55%,#EEE8FF_100%)]',
  neutral: 'bg-[linear-gradient(135deg,#FFF9F5_0%,#F7F1FF_100%)]',
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{label}</dt>
      <dd className="mt-1 text-[15px] font-medium leading-6 text-ink">{value}</dd>
    </div>
  )
}

function Block({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={cn('border-t border-line py-10 first:border-t-0', className)}>
      <h3 className="eyebrow mb-6">{title}</h3>
      {children}
    </section>
  )
}

export function CaseStudyLayout({ project, onClose, onPrev, onNext, onContact, prevTitle, nextTitle, headingId }: CaseStudyLayoutProps) {
  return (
    <article className="bg-surface text-ink">
      {/* A. Introduction */}
      <header className={cn('relative px-6 pb-10 pt-6 sm:px-10 sm:pt-8', bands[project.accentTheme])}>
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-violet-deep hover:text-violet"
          >
            <Icon icon={ArrowLeft01Icon} size={18} />
            Back to all projects
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="lift press inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink hover:border-violet/50 hover:text-violet-deep"
          >
            <Icon icon={Cancel01Icon} size={20} />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge tone={project.accentTheme === 'coral' ? 'pink' : 'lavender'}>{project.category}</Badge>
          {project.isPersonal && <Badge tone="outline">Personal creative development</Badge>}
        </div>
        <h2 id={headingId} tabIndex={-1} className="mt-4 max-w-3xl font-display text-[clamp(1.75rem,1.3rem+1.8vw,2.75rem)] font-bold leading-[1.08] tracking-tight outline-none">
          {project.title}
        </h2>

        <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Meta label="Organization" value={project.organization} />
          <Meta label="Category" value={project.category} />
          <Meta label="Target audience" value={project.audience} />
          <Meta label="Content type" value={project.contentType} />
        </dl>
      </header>

      <div className="px-6 sm:px-10">
        {/* B. Objective */}
        <Block title="Project objective">
          <p className="max-w-3xl font-display text-[clamp(1.25rem,1.1rem+0.8vw,1.75rem)] font-medium leading-snug tracking-tight text-ink">
            {project.objective}
          </p>
        </Block>

        {/* C. Creative approach */}
        <Block title="Creative approach">
          <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            <div>
              <dt className="font-display text-base font-semibold">The audience</dt>
              <dd className="mt-1.5 text-[15px] leading-7 text-muted">{project.audience}</dd>
            </div>
            <div>
              <dt className="font-display text-base font-semibold">The communication challenge</dt>
              <dd className="mt-1.5 text-[15px] leading-7 text-muted">{project.challenge}</dd>
            </div>
            <div>
              <dt className="font-display text-base font-semibold">The content angle</dt>
              <dd className="mt-1.5 text-[15px] leading-7 text-muted">{project.angle}</dd>
            </div>
            <div>
              <dt className="font-display text-base font-semibold">The creative concept</dt>
              <dd className="mt-1.5 text-[15px] leading-7 text-muted">{project.concept}</dd>
            </div>
            <div>
              <dt className="font-display text-base font-semibold">The intended message</dt>
              <dd className="mt-1.5 text-[15px] leading-7 text-muted">{project.message}</dd>
            </div>
            {project.callToAction && (
              <div>
                <dt className="font-display text-base font-semibold">The call to action</dt>
                <dd className="mt-1.5 text-[15px] leading-7 text-muted">{project.callToAction}</dd>
              </div>
            )}
          </dl>

          <div className="mt-8 grid gap-6 rounded-2xl bg-bg p-5 sm:grid-cols-2 sm:p-6">
            <div>
              <p className="text-sm font-semibold">My contribution</p>
              <ul className="mt-3 space-y-2">
                {project.contribution.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-6 text-muted">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Content themes</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.contentThemes.map((theme) => (
                  <Badge key={theme} tone="neutral">
                    {theme}
                  </Badge>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold">Platforms</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.platforms.map((platform) => (
                  <Badge key={platform} tone="lavender">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Block>

        {/* D. Deliverables */}
        <Block title="Deliverables">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <ul className="space-y-3">
              {project.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-[15px] font-medium">
                  <span aria-hidden="true" className="inline-flex size-6 items-center justify-center rounded-full bg-lavender text-[11px] font-bold text-violet-deep">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div>
              {project.gallery.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((item) => (
                    <GalleryFigure key={item.src} item={item} />
                  ))}
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-line">
                  <div className="aspect-[4/3]">
                    <ProjectPreview project={project} size="full" />
                  </div>
                </div>
              )}
              <p className="mt-3 text-xs leading-5 text-muted">
                {project.gallery.length > 0
                  ? (project.galleryNote ?? 'Published assets. Each item links to its original post.')
                  : 'The original content files are not included yet. This preview illustrates the creative direction and will be replaced with the actual campaign assets.'}
              </p>
            </div>
          </div>
        </Block>

        {/* E. Results */}
        <Block title="Results">
          {project.resultStatus === 'verified' && project.results.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.results.map((result) => (
                <MetricPlaceholder
                  key={result.metric}
                  name={result.metric}
                  definition=""
                  icon={metricIcons[result.metric.toLowerCase() as keyof typeof metricIcons] ?? UserMultipleIcon}
                  verified={{ value: result.value, period: result.period, source: result.source, comparison: result.comparison }}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-bg p-6">
              <p className="font-display text-lg font-semibold tracking-tight">
                {project.resultStatus === 'pending' ? 'Campaign performance figures are being compiled.' : 'No performance figures are presented for this project.'}
              </p>
              {project.resultNote && <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{project.resultNote}</p>}
            </div>
          )}
        </Block>

        {/* F. Navigation */}
        <nav aria-label="Case study navigation" className="border-t border-line py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="sm" icon={ArrowLeft01Icon} iconPosition="left" onClick={onPrev} disabled={!onPrev} aria-label={prevTitle ? `Previous project: ${prevTitle}` : 'No previous project'}>
                Previous
              </Button>
              <Button variant="secondary" size="sm" icon={ArrowRight01Icon} nudge onClick={onNext} disabled={!onNext} aria-label={nextTitle ? `Next project: ${nextTitle}` : 'No next project'}>
                Next
              </Button>
            </div>
            <Button size="sm" icon={Mail01Icon} iconPosition="left" onClick={onContact}>
              Start a conversation
            </Button>
          </div>
          {(prevTitle || nextTitle) && (
            <p className="mt-3 text-xs text-muted">
              {prevTitle && <span>Previous: {prevTitle}</span>}
              {prevTitle && nextTitle && <span aria-hidden="true"> · </span>}
              {nextTitle && <span>Next: {nextTitle}</span>}
            </p>
          )}
        </nav>
      </div>
    </article>
  )
}
