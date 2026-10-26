import { ChartIncreaseIcon } from '@hugeicons/core-free-icons'
import { metrics } from '../../data/metrics'
import { metricIcons } from '../../lib/icons'
import { SectionContainer } from '../layout/SectionContainer'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { SectionBackdrop } from '../ui/SectionBackdrop'
import { backdrops } from '../../data/backdrops'
import { MetricPlaceholder } from '../portfolio/MetricPlaceholder'

export function AnalyticsSection() {
  return (
    <SectionContainer
      id="results"
      aria-labelledby="results-heading"
      width="wide"
      backdrop={<SectionBackdrop image={backdrops.kitenge} opacity={0.09} fade="edges" position="center" />}
    >
      <Reveal>
        <SectionHeading
          id="results-heading"
          eyebrow="Measuring what matters"
          title={
            <>
              Creative Work Should Have a <span className="text-violet-deep">Purpose.</span>
            </>
          }
          lede="Content performance can help reveal what audiences find useful, what encourages engagement, and where communication can improve."
        />
      </Reveal>

      <Reveal items=":scope > div" stagger={70} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.id} className="flex">
            <MetricPlaceholder
              name={metric.name}
              definition={metric.definition}
              icon={metricIcons[metric.icon]}
              verified={metric.verified}
              className="w-full"
            />
          </div>
        ))}
        <div className="flex">
          <div className="bg-gradient-creative flex w-full flex-col justify-between rounded-2xl border border-line p-5">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-surface text-violet-deep shadow-card">
              <Icon icon={ChartIncreaseIcon} size={20} />
            </span>
            <div className="pt-6">
              <h3 className="font-display text-lg font-semibold tracking-tight">A framework, not a scoreboard</h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                Performance reporting becomes available when verified platform insights and campaign records are supplied.
                Each metric is then shown with its measurement period and source platform.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
