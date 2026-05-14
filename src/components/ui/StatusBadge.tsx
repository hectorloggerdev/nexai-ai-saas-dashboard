export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: 'bg-emerald-400/10 text-emerald-300', Paid: 'bg-emerald-400/10 text-emerald-300', Connected: 'bg-emerald-400/10 text-emerald-300',
    Ready: 'bg-cyan-400/10 text-cyan-300', Beta: 'bg-purple-400/10 text-purple-300', Pending: 'bg-amber-400/10 text-amber-300', Open: 'bg-amber-400/10 text-amber-300',
    Inactive: 'bg-white/10 text-white/55', Failed: 'bg-rose-400/10 text-rose-300', Warning: 'bg-amber-400/10 text-amber-300', Billing: 'bg-cyan-400/10 text-cyan-300', Security: 'bg-purple-400/10 text-purple-300', System: 'bg-white/10 text-white/55',
  }
  return <span className={`badge ${styles[status] || 'bg-white/10 text-white/55'}`}>{status}</span>
}
