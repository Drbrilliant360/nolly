import { useState } from 'react'
import { InformationCircleIcon } from '@hugeicons/core-free-icons'
import { contentPillars, sampleCalendar } from '../../data/contentPillars'
import { SectionContainer } from '../layout/SectionContainer'
import { Badge } from '../ui/Badge'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionBackdrop } from '../ui/SectionBackdrop'
import { backdrops } from '../../data/backdrops'
import { ContentPillarCard } from '../portfolio/ContentPillarCard'

export function ContentStrategySection() {
  const [openPillar, setOpenPillar] = useState(contentPillars[0]?.number ?? '')

  return (
    <SectionContainer
      id="process"
      aria-labelledby="process-heading"
      className="bg-surface/60"
      backdrop={<SectionBackdrop image={backdrops.kilimanjaro} opacity={0.24} fade="down" position="center 28%" />}
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal className="min-w-0">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Behind the content</p>
            <h2 id="process-heading" className="heading-section mt-4">
              Good Content Starts with a <span className="text-violet-deep">Clear Strategy.</span>
            </h2>
            <p className="lede mt-6 max-w-md">
              Every piece of content should have a purpose. My approach begins with understanding the audience, clarifying
              the message, and selecting a creative format that supports the communication goal.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-muted">Five content pillars</p>
          </div>
        </Reveal>

        <Reveal as="ul" items=":scope > li" stagger={80} delay={100} className="min-w-0 space-y-3">
          {contentPillars.map((pillar) => (
            <ContentPillarCard
              key={pillar.number}
              pillar={pillar}
              open={openPillar === pillar.number}
              onToggle={() => setOpenPillar((current) => (current === pillar.number ? '' : pillar.number))}
            />
          ))}
        </Reveal>
      </div>

      <Reveal className="mt-16 lg:mt-20">
        <div className="overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card">
          <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-xl font-semibold tracking-tight">Sample weekly content plan</h3>
                <Badge tone="pink" uppercase>
                  Sample planning concept
                </Badge>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                An illustrative example of how the pillars could be organised across a week. This is not a record of
                previously published content, and it has not been tested as a strategy.
              </p>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block">
            <table className="w-full text-left text-[15px]">
              <caption className="sr-only">Sample weekly content plan by day, pillar, format and objective</caption>
              <thead>
                <tr className="bg-bg text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  <th scope="col" className="px-8 py-3.5 font-semibold">Day</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Content pillar</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Format</th>
                  <th scope="col" className="px-8 py-3.5 font-semibold">Objective</th>
                </tr>
              </thead>
              <tbody>
                {sampleCalendar.map((row) => (
                  <tr key={row.day} className="border-t border-line">
                    <th scope="row" className="px-8 py-4 font-display font-semibold text-ink">{row.day}</th>
                    <td className="px-4 py-4 text-ink/85">{row.pillar}</td>
                    <td className="px-4 py-4">
                      <Badge tone="lavender">{row.format}</Badge>
                    </td>
                    <td className="px-8 py-4 text-muted">{row.objective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked list */}
          <ul className="divide-y divide-line md:hidden">
            {sampleCalendar.map((row) => (
              <li key={row.day} className="px-6 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display font-semibold">{row.day}</p>
                  <Badge tone="lavender">{row.format}</Badge>
                </div>
                <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
                  <dt className="text-muted">Pillar</dt>
                  <dd className="text-ink/85">{row.pillar}</dd>
                  <dt className="text-muted">Objective</dt>
                  <dd className="text-ink/85">{row.objective}</dd>
                </dl>
              </li>
            ))}
          </ul>

          <p className="flex items-start gap-2.5 border-t border-line bg-bg px-6 py-4 text-sm leading-6 text-muted sm:px-8">
            <Icon icon={InformationCircleIcon} size={18} className="mt-0.5 text-violet-deep" />
            Actual posting frequency and content pillars should be adapted to each client&rsquo;s objectives, audience, and
            platform.
          </p>
        </div>
      </Reveal>
    </SectionContainer>
  )
}
