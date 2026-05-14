import { plans } from '../data/mockData'

export function Billing() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-cyanx">Billing</p>
        <h1 className="text-3xl font-bold">Plans & Subscription</h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="card">
            <h2 className="text-xl font-bold">{plan.name}</h2>
            <p className="mt-4 text-4xl font-black">{plan.price}<span className="text-sm font-medium text-white/45">/mo</span></p>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              {plan.features.map((f) => <li key={f}>✓ {f}</li>)}
            </ul>
            <button className="btn-primary mt-6 w-full">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  )
}
