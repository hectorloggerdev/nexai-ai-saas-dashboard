import { Link } from 'react-router-dom'

export function Register() {
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <section className="card w-full max-w-md">
        <h1 className="text-3xl font-bold">Create account</h1>
        <p className="mt-2 text-white/45">Start building with NexAI.</p>
        <div className="mt-6 space-y-4">
          <input className="input" placeholder="Full name" />
          <input className="input" placeholder="Email address" />
          <input className="input" placeholder="Password" type="password" />
          <Link to="/dashboard" className="btn-primary block text-center">Create Account</Link>
        </div>
      </section>
    </main>
  )
}
