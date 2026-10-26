import { skills } from '../../data/skills'
import { SectionContainer } from '../layout/SectionContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { SkillPreview } from '../previews/SkillPreviews'

export function SkillsSection() {
  return (
    <SectionContainer id="skills" aria-labelledby="skills-heading" width="wide">
      <Reveal>
        <SectionHeading
          id="skills-heading"
          eyebrow="What I bring"
          title={
            <>
              Creative Ideas. Clear Communication. <span className="text-violet-deep">Meaningful Content.</span>
            </>
          }
        />
      </Reveal>
      <Reveal as="ul" items=":scope > li" stagger={90} className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <li key={skill.id} className="flex">
            <article className="lift flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-card hover:border-violet/40 hover:shadow-card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <SkillPreview kind={skill.preview} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="heading-card">{skill.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-muted">{skill.description}</p>
              </div>
            </article>
          </li>
        ))}
      </Reveal>
    </SectionContainer>
  )
}
