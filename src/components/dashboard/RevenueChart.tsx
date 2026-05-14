import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { revenueData } from '../../data/mockData'
const colors = ['#7C3AED', '#06B6D4', '#2DD4BF']
export function RevenueChart() {
  return (
    <div className="card">
      <div className="mb-5"><h2 className="text-xl font-bold">Revenue Split</h2><p className="mt-1 text-sm text-white/45">Monthly recurring revenue by plan</p></div>
      <div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={revenueData} dataKey="value" nameKey="name" innerRadius={62} outerRadius={92} paddingAngle={4}>{revenueData.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div>
      <div className="mt-4 grid grid-cols-3 gap-2">{revenueData.map((item, i) => <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"><div className="mx-auto mb-2 h-2 w-8 rounded-full" style={{ background: colors[i] }} /><p className="text-sm font-semibold">{item.value}%</p><p className="text-xs text-white/45">{item.name}</p></div>)}</div>
    </div>
  )
}
