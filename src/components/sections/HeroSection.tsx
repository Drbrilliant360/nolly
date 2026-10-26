import { ArrowDown01Icon, ArrowRight01Icon, InstagramIcon, Linkedin02Icon, Location01Icon } from '@hugeicons/core-free-icons'
import { profile } from '../../data/profile'
import { useHeroIntro } from '../../hooks/useHeroIntro'
import { Container } from '../layout/SectionContainer'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { SocialLink } from '../ui/SocialLink'
import { HeroScene } from '../previews/HeroScene'

export function HeroSection() {
  const intro = useHeroIntro<HTMLElement>()
  return (
    <section
      ref={intro}
      id="top"
      className="relative overflow-hidden pb-16 pt-[calc(var(--nav-height)+2rem)] sm:pb-24 sm:pt-[calc(var(--nav-height)+4rem)] lg:pb-32 lg:pt-[calc(var(--nav-height)+5.5rem)]"
    >
      <div aria-hidden="true" className="bg-gradient-hero absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-b from-transparent to-bg" />
      <div aria-hidden="true" className="absolute -left-32 top-24 -z-10 size-72 rounded-full bg-pink-soft/60 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 top-10 -z-10 size-80 rounded-full bg-lavender/80 blur-3xl" />

      <Container width="wide">
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="max-w-2xl">
            <div data-hero="pill" className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-card">
                <span aria-hidden="true" className="size-2 rounded-full bg-success" />
                {profile.availability}
              </span>
            </div>
            <p data-hero="eyebrow" className="eyebrow mt-6">
              Digital content <span aria-hidden="true">•</span> Creative storytelling <span aria-hidden="true">•</span> Social media
            </p>

            <h1 className="heading-hero mt-5 max-w-[900px]">
              {/* Two natural lines, each animated as a block. The text itself is never split, so it reads as one sentence. */}
              <span data-hero="line" className="block">
                Creative Content That
              </span>
              <span data-hero="line" className="swash block">
                Makes Brands{' '}
                <span className="relative inline-block">
                  Stand&nbsp;Out.
                  <span aria-hidden="true" data-hero="highlight" className="hl-fill bg-gradient-brand absolute inset-0 bg-clip-text text-transparent">
                    Stand&nbsp;Out.
                  </span>
                </span>
                <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path data-hero="swash" d="M2 9C50 2 150 2 198 7" fill="none" stroke="#FF725E" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p data-hero="tagline" className="mt-5 font-display text-xl font-medium tracking-tight text-ink/90 sm:mt-7 sm:text-2xl">
              {profile.tagline}
            </p>

            <p data-hero="lede" className="lede mt-4 max-w-xl sm:mt-5">
              I&rsquo;m Restituta Kalanga, a Tanzania-based aspiring social media manager and digital content creator passionate
              about storytelling, promotional content, and helping brands connect with their audiences.
            </p>

            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-9">
              <Button href="#work" size="lg" icon={ArrowDown01Icon} iconMotion="bounce" data-hero="cta" className="w-full xs:w-auto">
                Explore My Work
              </Button>
              <Button href="#contact" size="lg" variant="secondary" icon={ArrowRight01Icon} nudge data-hero="cta" className="w-full xs:w-auto">
                Let&rsquo;s Collaborate
              </Button>
            </div>

            <div data-hero="meta" className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-9">
              <div className="flex gap-2">
                <SocialLink href={profile.linkedin} label="LinkedIn profile" icon={Linkedin02Icon} />
                <SocialLink href={profile.instagram} label="Instagram profile" icon={InstagramIcon} />
              </div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                <Icon icon={Location01Icon} size={16} />
                Based in {profile.location}
              </p>
            </div>
          </div>

          <div data-hero="scene" className="px-3 pt-6 sm:px-0 sm:pt-8 lg:pl-8 lg:pt-0">
            <HeroScene />
          </div>
        </div>
      </Container>
    </section>
  )
}
