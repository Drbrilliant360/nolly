import { featuredProjects } from '../../data/projects'
import { SectionContainer } from '../layout/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { ProjectCard } from '../portfolio/ProjectCard'

const layout = [
  { orientation: 'landscape', className: 'lg:col-span-2' },
  { orientation: 'portrait', className: 'lg:row-span-2' },
  { orientation: 'wide', className: 'md:col-span-2' },
] as const

export function FeaturedWorkSection() {
  return (
    <SectionContainer id="work" aria-labelledby="work-heading" width="wide">
      <Reveal>
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title={
            <>
              A Few Things I&rsquo;ve Helped <span className="text-violet-deep">Bring to Life.</span>
            </>
          }
          lede="A selection of promotional content, creative concepts, and digital storytelling projects."
        />
      </Reveal>
      <Reveal items=":scope > div" stagger={110} y={26} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => {
          const slot = layout[i % layout.length]
          return (
            <div key={project.id} className={`flex ${slot.className}`}>
              <ProjectCard project={project} orientation={slot.orientation} className="w-full" />
            </div>
          )
        })}
      </Reveal>
    </SectionContainer>
  )
}
