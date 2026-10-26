import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { projects, findProjectBySlug } from '../../data/projects'
import { prefersReducedMotion } from '../../lib/motion'
import { profile } from '../../data/profile'
import { useProjectModal } from '../../hooks/useProjectModal'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { scrollToId } from '../../lib/scroll'
import { CaseStudyLayout } from './CaseStudyLayout'

const BASE_TITLE = `${profile.name} | ${profile.shortTitle}`

/** Accessible case-study overlay built on the native <dialog> element. */
export function CaseStudyModal() {
  const { activeSlug, openProject, closeProject } = useProjectModal()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const project = findProjectBySlug(activeSlug)
  const open = Boolean(project)

  useBodyScrollLock(open)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!project) {
      document.title = BASE_TITLE
      return
    }
    document.title = `${project.shortTitle} case study | ${profile.name}`
    const panel = scrollRef.current
    panel?.scrollTo({ top: 0 })
    const heading = document.getElementById('case-study-title')
    heading?.focus({ preventScroll: true })
    if (!panel || prefersReducedMotion()) return
    const entrance = animate(panel, {
      opacity: [0, 1],
      translateY: [28, 0],
      scale: [0.98, 1],
      duration: 560,
      ease: 'outQuint',
      onComplete: () => {
        panel.style.transform = ''
      },
    })
    return () => {
      entrance.revert()
    }
  }, [project])

  const index = project ? projects.findIndex((p) => p.id === project.id) : -1
  const prev = index > 0 ? projects[index - 1] : undefined
  const next = index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined

  const handleContact = () => {
    closeProject()
    window.setTimeout(() => scrollToId('contact'), 50)
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="case-study-title"
      onClose={closeProject}
      onCancel={(event) => {
        event.preventDefault()
        closeProject()
      }}
      onClick={(event) => {
        const target = event.target as HTMLElement
        if (target === event.currentTarget || target.dataset.backdrop !== undefined) closeProject()
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-night/55 sm:p-4 lg:p-8"
    >
      {project && (
        <div data-backdrop className="flex h-full w-full items-stretch justify-center">
          <div
            ref={scrollRef}
            className="h-full w-full max-w-5xl overflow-y-auto overscroll-contain bg-surface shadow-float sm:rounded-[1.75rem]"
          >
            <CaseStudyLayout
              project={project}
              headingId="case-study-title"
              onClose={closeProject}
              onPrev={prev ? () => openProject(prev.slug) : undefined}
              onNext={next ? () => openProject(next.slug) : undefined}
              prevTitle={prev?.shortTitle}
              nextTitle={next?.shortTitle}
              onContact={handleContact}
            />
          </div>
        </div>
      )}
    </dialog>
  )
}
