export function Usage() {
  const items = [
    ['AI Chat', '8,420 / 10,000', '84%'],
    ['Image Generation', '620 / 1,000', '62%'],
    ['Vision Analysis', '340 / 500', '68%'],
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Usage & Limits</h1>
      <div className="grid gap-4">
        {items.map(([label, value, percent]) => (
          <div key={label} className="card">
            <div className="flex justify-between">
              <p className="font-semibold">{label}</p>
              <p className="text-white/50">{value}</p>
            </div>
            <div className="mt-4 h-3 rounded-full bg-white/10">
              <div className="h-3 rounded-full bg-gradient-to-r from-electric to-cyanx" style={{ width: percent }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
