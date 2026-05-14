type StatCardProps = {
  label: string
  value: string
  change: string
}

export function StatCard({ label, value, change }: StatCardProps) {
  const positive = !change.startsWith('-')

  return (
    <div className="card">
      <p className="text-sm text-white/50">{label}</p>

      <div className="mt-4 flex items-end justify-between">
        <h3 className="text-3xl font-bold text-white">{value}</h3>

        <span
          className={`badge ${
            positive
              ? 'bg-emerald-400/10 text-emerald-300'
              : 'bg-rose-400/10 text-rose-300'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  )
}