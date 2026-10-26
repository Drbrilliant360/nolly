import { ArrowUpRight01Icon, InstagramIcon } from '@hugeicons/core-free-icons'
import { moments } from '../../data/moments'
import { profile } from '../../data/profile'
import { SectionContainer } from '../layout/SectionContainer'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

/** Community and event photos from Instagram, laid out as a masonry of cards that link back to each post. */
export function MomentsSection() {
  return (
    <SectionContainer id="moments" aria-labelledby="moments-heading" width="wide">
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="moments-heading"
            eyebrow="Community & events"
            title={
              <>
                Learning in the <span className="text-violet-deep">Room.</span>
              </>
            }
            lede="Forums, innovation weeks and youth programmes across Tanzania, as documented on Instagram."
          />
          <Button href={profile.instagram} target="_blank" rel="noopener noreferrer" variant="secondary" icon={ArrowUpRight01Icon} nudge className="lg:mb-1">
            Follow on Instagram
          </Button>
        </div>
      </Reveal>

      {/* Two compact columns on phones (image + title), fuller cards from the sm breakpoint up. */}
      <Reveal items=":scope > div" stagger={60} className="mt-10 columns-2 gap-3 sm:mt-12 sm:gap-5 lg:columns-3 xl:columns-4 [&>*]:mb-3 sm:[&>*]:mb-5 [&>*]:break-inside-avoid">
        {moments.map((moment) => (
          <div key={moment.id}>
            <a
              href={moment.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lift press-soft group block overflow-hidden rounded-2xl border border-line bg-surface shadow-card hover:border-violet/40 hover:shadow-card-hover sm:rounded-[1.5rem]"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: `${moment.width} / ${moment.height}` }}>
                <img
                  src={moment.src}
                  alt={moment.alt}
                  width={moment.width}
                  height={moment.height}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-(--ease-soft) group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-3 sm:p-5">
                <p className="eyebrow hidden text-[11px] sm:block">{moment.meta}</p>
                <h3 className="font-display text-sm font-semibold leading-snug tracking-tight text-ink group-hover:text-violet-deep sm:mt-2 sm:text-lg">{moment.title}</h3>
                <p className="mt-1.5 hidden text-sm leading-6 text-muted sm:block">{moment.caption}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-violet-deep sm:mt-3">
                  <Icon icon={InstagramIcon} size={14} />
                  View post
                </span>
              </div>
            </a>
          </div>
        ))}
      </Reveal>
    </SectionContainer>
  )
}
