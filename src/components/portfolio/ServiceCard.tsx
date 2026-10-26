import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import type { Service } from '../../data/services'
import { useContact } from '../../hooks/useContact'
import { serviceIcons } from '../../lib/icons'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { requestService } = useContact()
  return (
    <div className="lift flex h-full w-full min-w-0 flex-col rounded-[1.5rem] border border-line bg-surface p-6 shadow-card hover:border-violet/40 hover:shadow-card-hover sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-lavender text-violet-deep">
          <Icon icon={serviceIcons[service.icon]} size={24} />
        </span>
        <span className="font-display text-sm font-bold text-muted tabular-nums">0{index + 1}</span>
      </div>
      <h3 className="heading-card mt-5">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-muted">{service.description}</p>
      <div className="mt-auto pt-6">
        <Button variant="ghost" size="sm" icon={ArrowRight01Icon} nudge wrap onClick={() => requestService(service.formValue as never)} className="-ml-3">
          {service.ctaLabel}
        </Button>
      </div>
    </div>
  )
}
