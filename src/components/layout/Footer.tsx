import { InstagramIcon, Linkedin02Icon, Mail01Icon } from '@hugeicons/core-free-icons'
import { backdropCredits } from '../../data/backdrops'
import { navigation } from '../../data/navigation'
import { profile } from '../../data/profile'
import { mailtoHref } from '../../lib/links'
import { Container } from './SectionContainer'
import { Monogram } from '../ui/Monogram'
import { SocialLink } from '../ui/SocialLink'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Monogram size="md" />
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">{profile.name}</p>
                <p className="text-sm text-muted">{profile.title}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm font-display text-xl font-medium tracking-tight text-ink/90">{profile.closingLine}</p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2.5 pointer-coarse:space-y-0">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="inline-flex items-center text-[15px] text-ink/80 underline-offset-4 transition-colors hover:text-violet-deep hover:underline pointer-coarse:min-h-11">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5 text-[15px] pointer-coarse:space-y-0">
              <li>
                <a href={mailtoHref} className="inline-flex items-center break-all text-ink/80 underline-offset-4 transition-colors hover:text-violet-deep hover:underline pointer-coarse:min-h-11">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-ink/80 underline-offset-4 transition-colors hover:text-violet-deep hover:underline pointer-coarse:min-h-11">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-ink/80 underline-offset-4 transition-colors hover:text-violet-deep hover:underline pointer-coarse:min-h-11">
                  Instagram
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <SocialLink href={profile.linkedin} label="LinkedIn profile" icon={Linkedin02Icon} />
              <SocialLink href={profile.instagram} label="Instagram profile" icon={InstagramIcon} />
              <SocialLink href={mailtoHref} label="Send an email" icon={Mail01Icon} external={false} />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>{profile.location}</p>
        </div>
        <p className="mt-4 text-xs leading-5 text-muted">
          Background photography of Tanzania by{' '}
          {backdropCredits.map((item, i) => (
            <span key={item.id}>
              <a href={item.credit.href} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-violet-deep hover:underline">
                {item.credit.photographer}
              </a>
              {i < backdropCredits.length - 2 ? ', ' : i === backdropCredits.length - 2 ? ' and ' : ''}
            </span>
          ))}{' '}
          via Unsplash and Pexels. Tool logos are trademarks of their respective owners.
        </p>
      </Container>
    </footer>
  )
}
