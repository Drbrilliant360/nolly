import { useLayoutEffect, useRef } from 'react'
import { certifications, experience } from '../../data/experience'
import { scrollLinkedVar } from '../../lib/scrollReveal'
import { SectionContainer } from '../layout/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { CertificationCard, ExperienceCard } from '../portfolio/ExperienceCard'

export function ExperienceSection() {
  // The connector line fills as the visitor scrolls down the timeline.
  const lineRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const el = lineRef.current
    if (!el) return
    return scrollLinkedVar(el, '--tl', 0, 1)
  }, [])

  return (
    <SectionContainer id="experience" aria-labelledby="experience-heading" className="bg-surface/60">
      <Reveal>
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience & learning"
          title={
            <>
              Learning Through <span className="text-violet-deep">Creative Practice.</span>
            </>
          }
        />
      </Reveal>
      <div className="mt-12 grid gap-10 md:grid-cols-[1.25fr_0.75fr] lg:gap-14">
        <div ref={lineRef} className="timeline-line relative">
          <Reveal as="ol" items=":scope > li" stagger={120} className="space-y-6">
            {experience.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div>
            <p className="eyebrow mb-4">Certifications</p>
            <div className="space-y-4">
              {certifications.map((item) => (
                <CertificationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  )
}
