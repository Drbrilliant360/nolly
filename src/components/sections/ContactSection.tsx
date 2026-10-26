import { Call02Icon, InstagramIcon, Linkedin02Icon, Location01Icon, Mail01Icon, WhatsappIcon } from '@hugeicons/core-free-icons'
import { profile } from '../../data/profile'
import { mailtoHref, telHref, whatsappHref } from '../../lib/links'
import { Container } from '../layout/SectionContainer'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SocialLink } from '../ui/SocialLink'
import { SectionBackdrop } from '../ui/SectionBackdrop'
import { backdrops } from '../../data/backdrops'
import { ContactForm } from './ContactForm'

const contactRows = [
  { icon: Mail01Icon, label: 'Email', value: profile.email, href: mailtoHref, external: false },
  { icon: Call02Icon, label: 'Phone / WhatsApp', value: profile.phoneDisplay, href: telHref, external: false },
  { icon: Location01Icon, label: 'Location', value: profile.location },
  { icon: Linkedin02Icon, label: 'LinkedIn', value: 'linkedin.com/in/restituta-kalanga-7a02923b3', href: profile.linkedin, external: true },
  { icon: InstagramIcon, label: 'Instagram', value: '@_.nolly_resty', href: profile.instagram, external: true },
]

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative -mt-10 sm:-mt-12 lg:-mt-16">
      <div className="bg-gradient-contact relative isolate overflow-hidden rounded-t-[2.5rem] text-white sm:rounded-t-[3.5rem]">
        <SectionBackdrop image={backdrops.darTowers} opacity={0.32} fade="up" position="center 60%" blend="luminosity" />
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-96 rounded-full bg-coral/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -left-20 bottom-0 size-80 rounded-full bg-violet/30 blur-3xl" />
        <Container width="wide" className="relative py-20 sm:py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal delay={120}>
              <p className="eyebrow text-pink-soft">Let&rsquo;s collaborate</p>
              <h2 id="contact-heading" className="heading-section mt-4 text-white">
                Have an Idea? Let&rsquo;s Create Something <span className="text-pink-soft">Meaningful.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[17px] leading-8 text-white/75">
                Whether you&rsquo;re promoting a program, building a brand, or exploring a new creative idea, I&rsquo;d love to
                hear what you&rsquo;re working on.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="inverse" icon={WhatsappIcon} iconPosition="left">
                  Chat on WhatsApp
                </Button>
                <Button href={mailtoHref} variant="inverse-outline" icon={Mail01Icon} iconPosition="left">
                  Email me
                </Button>
              </div>

              <dl className="mt-10 space-y-4">
                {contactRows.map((row) => (
                  <div key={row.label} className="flex items-start gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon icon={row.icon} size={19} />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">{row.label}</dt>
                      <dd className="mt-0.5 break-words text-[15px] font-medium">
                        {row.href ? (
                          <a
                            href={row.href}
                            {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="-my-2.5 inline-block py-2.5 underline-offset-4 transition-colors hover:text-pink-soft hover:underline"
                          >
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex gap-2">
                <SocialLink href={profile.linkedin} label="LinkedIn profile" icon={Linkedin02Icon} tone="dark" />
                <SocialLink href={profile.instagram} label="Instagram profile" icon={InstagramIcon} tone="dark" />
                <SocialLink href={whatsappHref} label="Chat on WhatsApp" icon={WhatsappIcon} tone="dark" />
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-6 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.5)] backdrop-blur-sm sm:p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">Send a message</h3>
                <p className="mt-1 text-sm text-white/65">Tell me about your idea and I&rsquo;ll get back to you.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  )
}
