import { createContext } from 'react'
import type { ServiceOption } from '../data/services'

export interface ContactContextValue {
  selectedService: ServiceOption | ''
  setSelectedService: (service: ServiceOption | '') => void
  /** Preselects a service, scrolls to the contact form and moves focus to it. */
  requestService: (service: ServiceOption) => void
}

export const ContactContext = createContext<ContactContextValue | null>(null)
