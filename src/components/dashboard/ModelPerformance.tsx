import { modelPerformance } from '../../data/mockData'
export function ModelPerformance() {
  return (
    <div className="card">
      <div className="mb-5"><h2 className="text-xl font-bold">Model Performance</h2><p className="mt-1 text-sm text-white/45">Latency, reliability, and unit cost overview</p></div>
      <div className="space-y-3">{modelPerformance.map((item) => <div key={item.model} className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-4 sm:items-center"><div><p className="font-semibold">{item.model}</p><p className="text-xs text-white/40">Production route</p></div><div><p className="text-xs text-white/40">Latency</p><p className="font-semibold">{item.latency}</p></div><div><p className="text-xs text-white/40">Success</p><p className="font-semibold text-emerald-300">{item.success}</p></div><div><p className="text-xs text-white/40">Avg Cost</p><p className="font-semibold">{item.cost}</p></div></div>)}</div>
    </div>
  )
}
