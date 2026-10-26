import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import type { GalleryItem } from '../../data/projects'
import { cn } from '../../lib/cn'
import { Icon } from '../ui/Icon'

/** One published asset inside a case study: a lazily loaded video with poster, or an image, at its natural aspect ratio. */
export function GalleryFigure({ item }: { item: GalleryItem }) {
  return (
    <figure className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <div className={cn('relative w-full', item.type === 'video' ? 'bg-night' : 'bg-bg')} style={{ aspectRatio: `${item.width} / ${item.height}` }}>
        {item.type === 'video' ? (
          <video
            controls
            preload="none"
            playsInline
            poster={item.poster}
            width={item.width}
            height={item.height}
            aria-label={item.alt}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      <figcaption className="flex flex-1 flex-col gap-2 p-4 text-sm leading-6 text-muted">
        <span>{item.caption}</span>
        {item.source && (
          <a
            href={item.source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-violet-deep hover:text-violet"
          >
            View on {item.source.label}
            <Icon icon={ArrowUpRight01Icon} size={14} />
          </a>
        )}
      </figcaption>
    </figure>
  )
}
