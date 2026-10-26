import { Camera01Icon } from '@hugeicons/core-free-icons'
import { profile } from '../../data/profile'
import { Icon } from '../ui/Icon'

/**
 * Renders the genuine portrait when `profile.portraitSrc` is set,
 * otherwise a designed placeholder that is clearly not a photograph.
 *
 * The portrait is a background-removed cutout (transparent PNG, bottom edge flush with the
 * subject), so it is composed onto the brand gradient with a violet disc behind the subject.
 */
export function Portrait() {
  if (profile.portraitSrc) {
    return (
      <div className="bg-gradient-creative dots relative flex h-full w-full items-end justify-center">
        <div aria-hidden="true" className="absolute -right-10 -top-10 size-44 rounded-full bg-pink-soft/90" />
        <div aria-hidden="true" className="absolute -bottom-16 -left-10 size-56 rounded-full bg-lavender" />
        <div aria-hidden="true" className="absolute left-1/2 top-[44%] size-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/20" />
        <div aria-hidden="true" className="absolute left-1/2 top-[44%] size-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet" />
        <img
          src={profile.portraitSrc}
          alt={profile.portraitAlt}
          width={610}
          height={850}
          className="relative h-full max-h-[84%] w-full select-none object-contain object-bottom sm:max-h-none"
          fetchPriority="high"
          decoding="async"
          draggable={false}
        />
      </div>
    )
  }

  return (
    <div className="bg-gradient-creative dots relative flex h-full w-full flex-col justify-between p-5 sm:p-6" aria-hidden="true">
      <div className="absolute -right-10 -top-10 size-44 rounded-full bg-pink-soft/90" />
      <div className="absolute -bottom-16 -left-10 size-56 rounded-full bg-lavender" />
      <div className="absolute left-1/2 top-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/15" />
      <div className="absolute left-1/2 top-1/2 size-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-coral/25" />

      <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-muted">
        <Icon icon={Camera01Icon} size={14} />
        Portrait coming soon
      </span>

      <p className="bg-gradient-brand relative self-center bg-clip-text font-display text-[clamp(5rem,22vw,9rem)] font-bold leading-none tracking-[-0.06em] text-transparent">
        {profile.initials}
      </p>

      <div className="relative">
        <p className="font-display text-lg font-semibold tracking-tight text-ink">{profile.name}</p>
        <p className="text-sm text-muted">{profile.shortTitle}</p>
      </div>
    </div>
  )
}
