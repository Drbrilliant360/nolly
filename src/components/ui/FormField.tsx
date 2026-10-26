import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

interface FieldShellProps {
  id: string
  label: string
  optional?: boolean
  error?: string
  hint?: string
}

const controlBase =
  'w-full rounded-xl border bg-white/95 px-4 text-ink placeholder:text-muted transition-colors focus:border-violet focus:outline-none focus:ring-4 focus:ring-violet/20'

function Label({ id, label, optional }: FieldShellProps) {
  return (
    <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white">
      {label}
      {optional && <span className="ml-1.5 font-normal text-white/60">(optional)</span>}
    </label>
  )
}

function Message({ id, error, hint }: FieldShellProps) {
  if (error) {
    return (
      <p id={`${id}-error`} role="alert" className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[#FFB4A8]">
        <span aria-hidden="true">•</span> {error}
      </p>
    )
  }
  if (hint) {
    return (
      <p id={`${id}-hint`} className="mt-2 text-sm text-white/60">
        {hint}
      </p>
    )
  }
  return null
}

function describedBy({ id, error, hint }: FieldShellProps) {
  if (error) return `${id}-error`
  if (hint) return `${id}-hint`
  return undefined
}

type TextFieldProps = FieldShellProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'>

export function TextField({ id, label, optional, error, hint, ...rest }: TextFieldProps) {
  const shell = { id, label, optional, error, hint }
  return (
    <div>
      <Label {...shell} />
      <input
        id={id}
        className={cn(controlBase, 'h-12', error ? 'border-[#FFB4A8]' : 'border-white/20')}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(shell)}
        {...rest}
      />
      <Message {...shell} />
    </div>
  )
}

type SelectFieldProps = FieldShellProps &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'className'> & { options: readonly string[]; placeholder?: string }

export function SelectField({ id, label, optional, error, hint, options, placeholder, ...rest }: SelectFieldProps) {
  const shell = { id, label, optional, error, hint }
  return (
    <div>
      <Label {...shell} />
      <div className="relative">
        <select
          id={id}
          className={cn(controlBase, 'h-12 appearance-none pr-10', error ? 'border-[#FFB4A8]' : 'border-white/20')}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(shell)}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <Message {...shell} />
    </div>
  )
}

type TextAreaFieldProps = FieldShellProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'className'>

export function TextAreaField({ id, label, optional, error, hint, ...rest }: TextAreaFieldProps) {
  const shell = { id, label, optional, error, hint }
  return (
    <div>
      <Label {...shell} />
      <textarea
        id={id}
        className={cn(controlBase, 'min-h-36 resize-y py-3', error ? 'border-[#FFB4A8]' : 'border-white/20')}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(shell)}
        {...rest}
      />
      <Message {...shell} />
    </div>
  )
}
