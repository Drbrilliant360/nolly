import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import type { Project } from '../../data/projects'
import { useProjectModal } from '../../hooks/useProjectModal'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTilt } from '../../hooks/useTilt'
import { cn } from '../../lib/cn'
import { Badge } from '../ui/Badge'
import { Icon } from '../ui/Icon'
import { ProjectPreview } from '../previews/ProjectPreview'

interface ProjectCardProps {
  project: Project
  /** Controls the preview aspect so the gallery can mix proportions. */
  orientation?: 'landscape' | 'portrait' | 'wide'
  className?: string
}

const aspects = {
  landscape: 'aspect-[4/3] sm:aspect-[16/10]',
  portrait: 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[22rem] lg:flex-1',
  wide: 'aspect-[4/3] sm:aspect-[21/10]',
}

export function ProjectCard({ project, orientation = 'landscape', className }: ProjectCardProps) {
  const { openProject } = useProjectModal()
  const tilt = useTilt<HTMLAnchorElement>(5)
  // The preview image settles from a slight zoom as the card reveals. The inline transform is
  // cleared afterwards so the CSS hover zoom on the parent keeps working.
  const preview = useScrollReveal<HTMLDivElement>({ y: 0, scale: 1.08, duration: 1200, ease: 'outCubic', clearTransform: true })
  const href = `?project=${project.slug}`

  return (
    <article className={cn('flex', className)}>
      <a
        ref={tilt}
        href={href}
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
          event.preventDefault()
          openProject(project.slug)
        }}
        aria-label={`View case study: ${project.title}`}
        className="lift press-soft group flex w-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card hover:border-violet/40 hover:shadow-card-hover focus-visible:outline-offset-4"
      >
        <div className={cn('relative overflow-hidden', aspects[orientation])}>
          <div className="absolute inset-0 transition-transform duration-500 ease-(--ease-soft) group-hover:scale-[1.03]">
            <div ref={preview} className="h-full w-full">
              <ProjectPreview project={project} />
            </div>
          </div>
        </div>
        <div className={cn('flex flex-col p-6 sm:p-7', orientation === 'portrait' ? 'lg:flex-none' : 'flex-1')}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone={project.accentTheme === 'coral' ? 'pink' : 'lavender'}>{project.category}</Badge>
            {project.isPersonal && <Badge tone="outline">Personal development</Badge>}
          </div>
          <h3 className="heading-card mt-4 text-ink group-hover:text-violet-deep">{project.title}</h3>
          <p className="mt-3 text-[15px] leading-7 text-muted">{project.shortDescription}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[15px] font-semibold text-violet-deep">
            View Case Study
            <Icon icon={ArrowUpRight01Icon} size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </a>
    </article>
  )
}
