import { Send, Sparkles } from 'lucide-react'

export function Chat() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
      <section className="card min-h-[72vh]">
        <div className="mb-6">
          <p className="text-sm font-semibold text-cyanx">AI Chat</p>
          <h1 className="text-3xl font-bold">Conversation Workspace</h1>
        </div>

        <div className="space-y-4">
          <div className="max-w-2xl rounded-2xl bg-white/5 p-4 text-white/75">
            Build a launch checklist for a new AI SaaS product.
          </div>
          <div className="ml-auto max-w-2xl rounded-2xl bg-gradient-to-r from-electric/80 to-cyanx/80 p-4">
            Here is a structured launch checklist covering positioning, onboarding, pricing, analytics, and retention loops.
          </div>
        </div>

        <div className="mt-8 flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
          <input className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-white/35" placeholder="Ask NexAI anything..." />
          <button className="btn-primary flex items-center gap-2">
            <Send size={16} />
            Send
          </button>
        </div>
      </section>

      <aside className="card">
        <Sparkles className="text-cyanx" />
        <h2 className="mt-4 text-xl font-bold">Prompt Templates</h2>
        <div className="mt-5 space-y-3">
          {['Marketing plan', 'Code review', 'UX audit', 'Landing copy'].map((x) => (
            <button key={x} className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-sm hover:bg-white/10">{x}</button>
          ))}
        </div>
      </aside>
    </div>
  )
}
