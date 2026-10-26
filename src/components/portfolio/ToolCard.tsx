import type { Tool } from '../../data/tools'

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="lift flex h-full w-full flex-col items-start rounded-2xl border border-line bg-surface p-4 shadow-card hover:border-violet/40 hover:shadow-card-hover sm:p-5">
      <span
        className="inline-flex size-14 items-center justify-center rounded-2xl border border-line bg-white shadow-[inset_0_1px_0_rgb(255_255_255/0.8)]"
        style={tool.logoBackground ? { background: tool.logoBackground } : undefined}
      >
        <img src={tool.logo} alt="" width={32} height={32} loading="lazy" decoding="async" className="size-8 object-contain" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{tool.name}</h3>
      <p className="mt-1.5 text-sm leading-6 text-muted">{tool.description}</p>
    </div>
  )
}
