import { AiMagicIcon, PaintBrush01Icon, TextFontIcon, Video01Icon } from '@hugeicons/core-free-icons'
import type { Skill } from '../../data/skills'
import { Icon } from '../ui/Icon'

function Lines({ widths, tone = 'bg-line' }: { widths: string[]; tone?: string }) {
  return (
    <div className="space-y-1.5" aria-hidden="true">
      {widths.map((w, i) => (
        <span key={i} className={`block h-1.5 rounded-full ${tone}`} style={{ width: w }} />
      ))}
    </div>
  )
}

function IdeaPreview() {
  return (
    <div className="bg-gradient-creative flex h-full items-center justify-center p-6">
      <div className="w-full max-w-[15rem] rotate-[-2deg] rounded-2xl border border-line bg-surface p-4 shadow-card">
        <p className="eyebrow text-[10px]">Content idea</p>
        <p className="mt-2 font-display text-[15px] font-semibold leading-snug tracking-tight">Skill spotlight: design a poster in Canva</p>
        <div className="mt-3">
          <Lines widths={['92%', '70%']} />
        </div>
        <div className="mt-3 flex gap-1.5">
          <span className="rounded-full bg-lavender px-2 py-0.5 text-[10px] font-semibold text-violet-deep">Carousel</span>
          <span className="rounded-full bg-pink-soft px-2 py-0.5 text-[10px] font-semibold text-coral-deep">Education</span>
        </div>
      </div>
    </div>
  )
}

function PosterPreview() {
  return (
    <div className="flex h-full items-center justify-center bg-lavender p-6">
      <div className="relative aspect-[3/4] w-full max-w-[10.5rem] overflow-hidden rounded-xl bg-violet-deep p-4 text-white shadow-card">
        <div className="absolute -right-6 -top-6 size-20 rounded-full bg-coral/90" />
        <div className="absolute -bottom-8 -left-6 size-24 rounded-full border-[6px] border-white/15" />
        <p className="relative text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70">Program promotion</p>
        <p className="relative mt-3 font-display text-lg font-bold leading-[1.1] tracking-tight">Explore digital skills.</p>
        <span className="relative mt-4 inline-block rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-violet-deep">Learn more</span>
      </div>
    </div>
  )
}

function ScriptPreview() {
  return (
    <div className="flex h-full items-center justify-center bg-pink-soft/70 p-6">
      <div className="w-full max-w-[15.5rem] rounded-2xl border border-line bg-surface p-4 shadow-card">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-[10px]">Script · 15s</p>
          <span className="rounded-full bg-bg px-2 py-0.5 text-[10px] font-semibold text-muted">Draft</span>
        </div>
        <div className="mt-3 rounded-lg bg-lavender px-3 py-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-violet-deep">Hook</p>
          <p className="mt-0.5 text-[12px] font-medium leading-snug text-ink">What if one free tool could change how your CV looks?</p>
        </div>
        <div className="mt-3 space-y-2.5">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted">Scene 1</p>
            <div className="mt-1">
              <Lines widths={['95%', '60%']} />
            </div>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted">Call to action</p>
            <div className="mt-1">
              <Lines widths={['75%']} tone="bg-coral/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ToolsPreview() {
  const tiles = [
    { icon: PaintBrush01Icon, label: 'Design', tone: 'bg-lavender text-violet-deep' },
    { icon: Video01Icon, label: 'Video', tone: 'bg-pink-soft text-coral-deep' },
    { icon: AiMagicIcon, label: 'AI', tone: 'bg-violet text-white' },
    { icon: TextFontIcon, label: 'Copy', tone: 'bg-surface text-ink border border-line' },
  ]
  return (
    <div className="bg-gradient-creative flex h-full items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-3">
        {tiles.map((tile, i) => (
          <div
            key={tile.label}
            className={`flex size-[4.25rem] flex-col items-center justify-center gap-1 rounded-2xl shadow-card ${tile.tone} ${i % 2 ? 'translate-y-3' : ''}`}
          >
            <Icon icon={tile.icon} size={22} />
            <span className="text-[10px] font-semibold">{tile.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkillPreview({ kind }: { kind: Skill['preview'] }) {
  switch (kind) {
    case 'idea':
      return <IdeaPreview />
    case 'poster':
      return <PosterPreview />
    case 'script':
      return <ScriptPreview />
    case 'tools':
      return <ToolsPreview />
  }
}
