import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import type { ContentPillar } from '../../data/contentPillars'
import { pillarIcons } from '../../lib/icons'
import { cn } from '../../lib/cn'
import { Icon } from '../ui/Icon'

interface ContentPillarCardProps {
  pillar: ContentPillar
  open: boolean
  onToggle: () => void
}

export function ContentPillarCard({ pillar, open, onToggle }: ContentPillarCardProps) {
  const panelId = `pillar-panel-${pillar.number}`
  const buttonId = `pillar-button-${pillar.number}`
  return (
    <li
      className={cn(
        'rounded-2xl border transition-colors duration-300',
        open ? 'border-violet/30 bg-surface shadow-card' : 'border-line bg-surface/60 hover:bg-surface',
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-3 rounded-2xl px-4 py-4 text-left sm:gap-4 sm:px-6"
        >
          {/* The index is decorative; it is dropped on the narrowest phones so long titles keep their room. */}
          <span aria-hidden="true" className={cn('hidden shrink-0 font-display text-sm font-bold tabular-nums xs:inline', open ? 'text-coral-deep' : 'text-muted')}>
            {pillar.number}
          </span>
          <span className={cn('inline-flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors', open ? 'bg-violet text-white' : 'bg-lavender text-violet-deep')}>
            <Icon icon={pillarIcons[pillar.icon]} size={19} />
          </span>
          <span className="min-w-0 flex-1 wrap-break-word font-display text-[17px] font-semibold tracking-tight text-ink sm:text-lg">{pillar.title}</span>
          <Icon icon={ArrowDown01Icon} size={20} className={cn('shrink-0 text-muted transition-transform duration-300', open && 'rotate-180 text-violet-deep')} />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className="expander" data-open={open}>
        <div>
          <p className="px-4 pb-5 pl-[4.25rem] text-[15px] leading-7 text-muted sm:px-6 sm:pl-[5rem]">{pillar.description}</p>
        </div>
      </div>
    </li>
  )
}
