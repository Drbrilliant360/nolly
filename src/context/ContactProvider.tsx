import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { ContactContext } from './ContactContext'
import type { ServiceOption } from '../data/services'
import { scrollToId } from '../lib/scroll'

export function ContactProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<ServiceOption | ''>('')

  const requestService = useCallback((service: ServiceOption) => {
    setSelectedService(service)
    scrollToId('contact')
    // Move focus to the select once the scroll has started so screen readers announce the preselection.
    window.setTimeout(() => {
      const select = document.getElementById('contact-service') as HTMLSelectElement | null
      select?.focus({ preventScroll: true })
    }, 350)
  }, [])

  const value = useMemo(
    () => ({ selectedService, setSelectedService, requestService }),
    [selectedService, requestService],
  )

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}
