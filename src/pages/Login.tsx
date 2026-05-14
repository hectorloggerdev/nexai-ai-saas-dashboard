import { Link } from 'react-router-dom'

export function Login() {
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <section className="card w-full max-w-md">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="mt-2 text-white/45">Sign in to your AI dashboard.</p>
        <div className="mt-6 space-y-4">
          <input className="input" placeholder="Email address" />
          <input className="input" placeholder="Password" type="password" />
          <Link to="/dashboard" className="btn-primary block text-center">Sign In</Link>
        </div>
        <p className="mt-6 text-center text-sm text-white/45">No account? <Link className="text-cyanx" to="/register">Create one</Link></p>
      </section>
    </main>
  )
}
