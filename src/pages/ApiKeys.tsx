import { KeyRound } from 'lucide-react'

export function ApiKeys() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">API Keys</h1>
      <div className="card">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/10 p-4"><KeyRound /></div>
            <div>
              <p className="font-semibold">Production API Key</p>
              <p className="text-sm text-white/45">nex_sk_live_••••••••••••••••••••</p>
            </div>
          </div>
          <button className="btn-secondary">Regenerate</button>
        </div>
      </div>
    </div>
  )
}
