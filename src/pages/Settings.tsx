export function Settings() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <section className="card">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="mt-6 space-y-4">
          <input className="input" placeholder="Workspace name" defaultValue="NexAI Workspace" />
          <input className="input" placeholder="Support email" defaultValue="support@nexai.app" />
          <button className="btn-primary">Save Changes</button>
        </div>
      </section>
      <section className="card">
        <h2 className="text-xl font-bold">Notifications</h2>
        <div className="mt-6 space-y-3 text-sm text-white/60">
          <label className="flex items-center justify-between rounded-2xl bg-white/5 p-4">Usage alerts <input type="checkbox" defaultChecked /></label>
          <label className="flex items-center justify-between rounded-2xl bg-white/5 p-4">Billing receipts <input type="checkbox" defaultChecked /></label>
          <label className="flex items-center justify-between rounded-2xl bg-white/5 p-4">Product updates <input type="checkbox" /></label>
        </div>
      </section>
    </div>
  )
}
