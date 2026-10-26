import { tools } from '../../data/tools'
import { SectionContainer } from '../layout/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { SectionBackdrop } from '../ui/SectionBackdrop'
import { backdrops } from '../../data/backdrops'
import { ToolCard } from '../portfolio/ToolCard'

export function ToolsSection() {
  return (
    <SectionContainer
      id="tools"
      aria-labelledby="tools-heading"
      spacing="compact"
      width="wide"
      backdrop={<SectionBackdrop image={backdrops.stoneTown} opacity={0.1} fade="left" position="center 30%" />}
    >
      <Reveal>
        <SectionHeading
          id="tools-heading"
          eyebrow="My creative toolkit"
          title={
            <>
              Tools That Support the <span className="text-violet-deep">Creative Process.</span>
            </>
          }
        />
      </Reveal>
      <Reveal as="ul" items=":scope > li" stagger={60} className="mt-10 grid gap-3 xs:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {tools.map((tool) => (
          <li key={tool.id} className="flex">
            <ToolCard tool={tool} />
          </li>
        ))}
      </Reveal>
    </SectionContainer>
  )
}
