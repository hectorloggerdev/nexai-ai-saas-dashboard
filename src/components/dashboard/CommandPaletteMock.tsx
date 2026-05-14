import { Command, Search, Sparkles } from 'lucide-react'
export function CommandPaletteMock() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-electric to-cyanx text-white"><Command size={20} /></div><div><h2 className="text-xl font-bold">AI Command Palette</h2><p className="text-sm text-white/45">Premium dashboard interaction preview</p></div></div>
      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4"><div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3"><Search size={18} className="text-white/40" /><span className="text-sm text-white/45">Search actions, prompts, users...</span></div><div className="mt-4 space-y-2">{['Generate product hero image', 'Analyze uploaded screenshot', 'Create billing report'].map((item) => <div key={item} className="flex items-center justify-between rounded-2xl px-4 py-3 hover:bg-white/10"><div className="flex items-center gap-3"><Sparkles size={16} className="text-cyanx" /><span className="text-sm font-medium">{item}</span></div><span className="rounded-lg bg-white/10 px-2 py-1 text-xs text-white/45">⌘K</span></div>)}</div></div>
    </div>
  )
}
