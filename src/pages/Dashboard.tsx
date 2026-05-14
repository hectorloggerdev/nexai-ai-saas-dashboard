import { StatCard } from '../components/ui/StatCard'
import { PageHeader } from '../components/ui/PageHeader'
import { UsageChart } from '../components/dashboard/UsageChart'
import { RevenueChart } from '../components/dashboard/RevenueChart'
import { ActivityFeed } from '../components/dashboard/ActivityFeed'
import { ModelPerformance } from '../components/dashboard/ModelPerformance'
import { CommandPaletteMock } from '../components/dashboard/CommandPaletteMock'
import { conversations, stats } from '../data/mockData'
export function Dashboard() {
  return (
    <div className="space-y-6"><PageHeader eyebrow="Overview" title="AI Command Center" description="Monitor AI usage, model performance, revenue distribution, user activity, and product operations from a premium SaaS dashboard." action={<button className="btn-primary">Export Report</button>} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{stats.map((stat) => <StatCard key={stat.label} {...stat} />)}</div>
      <div className="grid gap-6 xl:grid-cols-[1.55fr_0.85fr]"><UsageChart /><RevenueChart /></div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"><ModelPerformance /><ActivityFeed /></div>
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"><CommandPaletteMock /><div className="card"><h2 className="text-xl font-bold">Recent Sessions</h2><div className="mt-5 grid gap-4">{conversations.map((item) => <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-semibold">{item.title}</p><div className="mt-2 flex justify-between text-xs text-white/45"><span>{item.model}</span><span>{item.time}</span></div></div>)}</div></div></div>
    </div>
  )
}
