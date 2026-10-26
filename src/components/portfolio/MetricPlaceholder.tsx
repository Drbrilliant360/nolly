import type { IconSvgElement } from '@hugeicons/react'
import type { VerifiedMetric } from '../../data/metrics'
import { Icon } from '../ui/Icon'
import { cn } from '../../lib/cn'

interface MetricPlaceholderProps {
  name: string
  definition: string
  icon: IconSvgElement
  /** When provided, the verified value is shown with its period and source. */
  verified?: VerifiedMetric
  className?: string
}

/**
 * Reusable metric tile. Shows an honest empty state until verified data exists,
 * then renders the value together with its measurement period and source platform.
 */
export function MetricPlaceholder({ name, definition, icon, verified, className }: MetricPlaceholderProps) {
  return (
    <div className={cn('lift flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-card hover:border-violet/30', className)}>
      <div className="flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-lavender text-violet-deep">
          <Icon icon={icon} size={20} />
        </span>
        <h3 className="font-display text-lg font-semibold tracking-tight">{name}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{definition}</p>
      <div className="mt-auto pt-5">
        {verified ? (
          <dl className="rounded-xl bg-bg p-3.5">
            <dt className="sr-only">Verified value</dt>
            <dd className="font-display text-2xl font-bold tracking-tight text-ink">{verified.value}</dd>
            <dt className="sr-only">Measurement period</dt>
            <dd className="mt-1 text-xs text-muted">{verified.period}</dd>
            <dt className="sr-only">Source</dt>
            <dd className="text-xs text-muted">Source: {verified.source}</dd>
            {verified.comparison && (
              <>
                <dt className="sr-only">Comparison</dt>
                <dd className="mt-1 text-xs font-medium text-success">{verified.comparison}</dd>
              </>
            )}
          </dl>
        ) : (
          <div className="flex items-center gap-2 rounded-xl border border-dashed border-line bg-bg px-3.5 py-3">
            <span aria-hidden="true" className="size-2 rounded-full bg-line" />
            <p className="text-xs font-medium text-muted">Awaiting verified data</p>
          </div>
        )}
      </div>
    </div>
  )
}
