import { PlugZap } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { StatusBadge } from '../components/ui/StatusBadge'
import { integrations } from '../data/mockData'
export function Integrations() {
  return (
    <div className="space-y-6"><PageHeader eyebrow="Ecosystem" title="Integrations" description="Integration cards for AI providers, billing systems, authentication platforms, and team workflows." action={<button className="btn-primary">Add Integration</button>} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{integrations.map((item) => <div key={item.name} className="card"><div className="flex items-start justify-between gap-4"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10"><PlugZap className="text-cyanx" /></div><StatusBadge status={item.status} /></div><h2 className="mt-6 text-xl font-bold">{item.name}</h2><p className="mt-2 text-sm leading-6 text-white/50">{item.description}</p><button className="btn-secondary mt-5 w-full">Configure</button></div>)}</div>
    </div>
  )
}
