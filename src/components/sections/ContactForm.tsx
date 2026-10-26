import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Alert02Icon, CheckmarkCircle02Icon, Copy01Icon, Mail01Icon, SentIcon } from '@hugeicons/core-free-icons'
import { profile } from '../../data/profile'
import { serviceOptions, type ServiceOption } from '../../data/services'
import { useContact } from '../../hooks/useContact'
import { buildMailto, buildPlainMessage, mailtoHref, type ContactMessage } from '../../lib/links'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { SelectField, TextAreaField, TextField } from '../ui/FormField'

type Status = 'idle' | 'submitting' | 'success' | 'mailto' | 'error'

interface FormValues {
  name: string
  email: string
  organization: string
  message: string
}

type Errors = Partial<Record<keyof FormValues | 'service', string>>

const endpoint = (import.meta.env.VITE_FORM_ENDPOINT ?? '').trim()
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: FormValues, service: string): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address, for example name@example.com.'
  if (!service) errors.service = 'Please choose the service you are interested in.'
  if (!values.message.trim()) errors.message = 'Please tell me a little about your project.'
  else if (values.message.trim().length < 20) errors.message = 'Please add a little more detail (at least 20 characters).'
  return errors
}

export function ContactForm() {
  const { selectedService, setSelectedService } = useContact()
  const [values, setValues] = useState<FormValues>({ name: '', email: '', organization: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)
  const [attempted, setAttempted] = useState(false)
  const inFlight = useRef(false)
  const statusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (status !== 'idle' && status !== 'submitting') statusRef.current?.focus()
  }, [status])

  const update = (field: keyof FormValues) => (event: { target: { value: string } }) => {
    const next = { ...values, [field]: event.target.value }
    setValues(next)
    if (attempted) setErrors(validate(next, selectedService))
  }

  const payload = (): ContactMessage => ({
    name: values.name.trim(),
    email: values.email.trim(),
    organization: values.organization.trim(),
    service: selectedService,
    message: values.message.trim(),
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inFlight.current) return
    setAttempted(true)
    const nextErrors = validate(values, selectedService)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus()
      return
    }

    const data = payload()

    if (!endpoint) {
      // No form backend configured: hand the message to the visitor's email app.
      window.location.href = buildMailto(data)
      setStatus('mailto')
      return
    }

    inFlight.current = true
    setStatus('submitting')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, source: 'portfolio-website' }),
      })
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
      setStatus('success')
      setValues({ name: '', email: '', organization: '', message: '' })
      setSelectedService('')
      setAttempted(false)
      setErrors({})
    } catch {
      setStatus('error')
    } finally {
      inFlight.current = false
    }
  }

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(buildPlainMessage(payload()))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="contact-form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="contact-name" label="Full name" name="name" autoComplete="name" value={values.name} onChange={update('name')} error={errors.name} required />
        <TextField
          id="contact-email"
          label="Email address"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={update('email')}
          error={errors.email}
          required
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="contact-organization"
          label="Organization or brand"
          name="organization"
          autoComplete="organization"
          optional
          value={values.organization}
          onChange={update('organization')}
        />
        <SelectField
          id="contact-service"
          label="Service of interest"
          name="service"
          options={serviceOptions}
          placeholder="Choose a service"
          value={selectedService}
          onChange={(event) => {
            const next = event.target.value as ServiceOption | ''
            setSelectedService(next)
            if (attempted) setErrors(validate(values, next))
          }}
          error={errors.service}
          required
        />
      </div>
      <TextAreaField
        id="contact-message"
        label="Project message"
        name="message"
        value={values.message}
        onChange={update('message')}
        error={errors.message}
        placeholder="Tell me about the program, brand or idea you are working on."
        required
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="inverse" size="lg" icon={SentIcon} loading={status === 'submitting'} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending' : 'Send My Message'}
        </Button>
        <p id="contact-form-note" className="text-sm leading-6 text-white/65">
          {endpoint
            ? 'Your message is delivered securely. I usually reply by email.'
            : 'This form opens your email app with the message prefilled. Sending happens from your email app.'}
        </p>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status === 'success' && (
          <div role="status" className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-white">
            <Icon icon={CheckmarkCircle02Icon} size={22} className="mt-0.5 text-[#8EE2B8]" />
            <div>
              <p className="font-semibold">Thanks, your message has been sent.</p>
              <p className="mt-1 text-sm text-white/75">I&rsquo;ll get back to you by email as soon as I can.</p>
            </div>
          </div>
        )}
        {status === 'mailto' && (
          <div role="status" className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white">
            <div className="flex items-start gap-3">
              <Icon icon={Mail01Icon} size={22} className="mt-0.5 text-pink-soft" />
              <div>
                <p className="font-semibold">Your email app should now be open with the message prefilled.</p>
                <p className="mt-1 text-sm leading-6 text-white/75">
                  Please press send there to deliver it. If nothing opened, copy the message and email it to{' '}
                  <a href={mailtoHref} className="font-medium text-white underline underline-offset-4">
                    {profile.email}
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button type="button" variant="inverse-outline" size="sm" icon={Copy01Icon} iconPosition="left" onClick={copyMessage}>
                {copied ? 'Copied' : 'Copy message'}
              </Button>
              <Button type="button" variant="inverse-outline" size="sm" icon={Mail01Icon} iconPosition="left" href={buildMailto(payload())}>
                Open email app again
              </Button>
            </div>
          </div>
        )}
        {status === 'error' && (
          <div role="alert" className="flex items-start gap-3 rounded-2xl border border-[#FFB4A8]/40 bg-[#FFB4A8]/10 p-4 text-white">
            <Icon icon={Alert02Icon} size={22} className="mt-0.5 text-[#FFB4A8]" />
            <div>
              <p className="font-semibold">Something went wrong and your message was not sent.</p>
              <p className="mt-1 text-sm leading-6 text-white/75">
                Your details are still here. Please try again, or email me directly at{' '}
                <a href={mailtoHref} className="font-medium text-white underline underline-offset-4">
                  {profile.email}
                </a>
                .
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}
