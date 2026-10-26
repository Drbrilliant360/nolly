import { ArrowRight01Icon, Location01Icon } from '@hugeicons/core-free-icons'
import { profile } from '../../data/profile'
import { aboutCapabilities } from '../../data/skills'
import { SectionContainer } from '../layout/SectionContainer'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionBackdrop } from '../ui/SectionBackdrop'
import { backdrops } from '../../data/backdrops'

const bio = [
  'My name is Restituta Kalanga, a Tanzania-based aspiring Social Media Manager and Digital Content Creator with an interest in digital media, creative storytelling, and online brand promotion.',
  'I have been involved in creating promotional content for Letis Platform and NEDA Pay, developing digital content ideas for social media. I am interested in using creative communication and digital tools to help brands share their messages, connect with their audiences, and promote their initiatives.',
  'My approach focuses on creating engaging content, communicating messages clearly, and making digital information more accessible to the intended audience. I am continuing to develop my skills in content creation, video editing, graphic design, and digital media management.',
  'I am open to opportunities that will allow me to gain practical experience, collaborate with brands, and grow professionally in the digital media industry.',
]

export function AboutSection() {
  return (
    <SectionContainer
      id="about"
      aria-labelledby="about-heading"
      backdrop={<SectionBackdrop image={backdrops.darAerial} opacity={0.11} fade="down" position="center 30%" />}
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">A little about me</p>
            <h2 id="about-heading" className="heading-section mt-4">
              Creativity with a <span className="text-violet-deep">Purpose.</span>
            </h2>
            <p className="lede mt-6 max-w-md">
              I help brands and programs share their message through promotional content, storytelling, and clear digital
              communication.
            </p>
            <div className="mt-8">
              <Button href="#work" variant="secondary" icon={ArrowRight01Icon} nudge>
                See selected work
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[1.75rem] border border-line bg-surface p-7 shadow-card sm:p-10">
            <div className="space-y-5 text-[16px] leading-[1.8] text-ink/85 sm:text-[17px]">
              {bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-7">
              {aboutCapabilities.map((capability, i) => (
                <Badge key={capability} tone={i === 1 ? 'pink' : 'lavender'} className="px-3.5 py-1.5 text-[13px]">
                  {capability}
                </Badge>
              ))}
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted">
              <Icon icon={Location01Icon} size={16} />
              {profile.location}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  )
}
