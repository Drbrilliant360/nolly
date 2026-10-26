import { services } from '../../data/services'
import { SectionContainer } from '../layout/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { SectionBackdrop } from '../ui/SectionBackdrop'
import { backdrops } from '../../data/backdrops'
import { ServiceCard } from '../portfolio/ServiceCard'

export function ServicesSection() {
  return (
    <SectionContainer
      id="services"
      aria-labelledby="services-heading"
      width="wide"
      className="pb-28 sm:pb-32 lg:pb-40"
      backdrop={<SectionBackdrop image={backdrops.zanzibarDhow} opacity={0.14} fade="up" position="center 70%" />}
    >
      <Reveal>
        <SectionHeading
          id="services-heading"
          eyebrow="Ways we can work together"
          title={
            <>
              Let&rsquo;s Turn Your Ideas into <span className="text-violet-deep">Engaging Content.</span>
            </>
          }
          lede="Creative support for brands, initiatives, and individuals looking to communicate more clearly and connect with their audiences."
        />
      </Reveal>
      <Reveal as="ul" items=":scope > li" stagger={70} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <li key={service.id} className="flex min-w-0">
            <ServiceCard service={service} index={i} />
          </li>
        ))}
      </Reveal>
    </SectionContainer>
  )
}
