export function Profile() {
  return (
    <div className="card max-w-3xl">
      <div className="flex items-center gap-5">
        <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-cyanx to-electric" />
        <div>
          <h1 className="text-3xl font-bold">Alex Morgan</h1>
          <p className="text-white/45">Founder · NexAI Workspace</p>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <input className="input" defaultValue="Alex Morgan" />
        <input className="input" defaultValue="alex@nexai.app" />
      </div>
      <button className="btn-primary mt-5">Update Profile</button>
    </div>
  )
}
