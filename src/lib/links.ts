import { profile, whatsappIntro } from '../data/profile'

export const mailtoHref = `mailto:${profile.email}`

export const whatsappHref = `https://wa.me/${profile.phoneInternational}?text=${encodeURIComponent(whatsappIntro)}`

export const telHref = `tel:+${profile.phoneInternational}`

export interface ContactMessage {
  name: string
  email: string
  organization: string
  service: string
  message: string
}

/** Builds a mailto: URL with an encoded subject and body for the fallback submission path. */
export function buildMailto(data: ContactMessage) {
  const subject = `Portfolio enquiry: ${data.service}${data.organization ? ` — ${data.organization}` : ''}`
  const body = [
    `Hello Restituta,`,
    ``,
    data.message,
    ``,
    `—`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.organization ? `Organization: ${data.organization}` : null,
    `Service of interest: ${data.service}`,
  ]
    .filter((line) => line !== null)
    .join('\n')

  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function buildPlainMessage(data: ContactMessage) {
  return [
    `To: ${profile.email}`,
    `Subject: Portfolio enquiry: ${data.service}`,
    ``,
    data.message,
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.organization ? `Organization: ${data.organization}` : null,
    `Service of interest: ${data.service}`,
  ]
    .filter((line) => line !== null)
    .join('\n')
}
