import { Image, Wand2 } from 'lucide-react'

export function ImageGenerator() {
  return (
    <div className="grid gap-6 xl:grid-cols-[420px_1fr]">
      <section className="card">
        <p className="text-sm font-semibold text-cyanx">AI Image</p>
        <h1 className="mt-1 text-3xl font-bold">Generate Visuals</h1>
        <textarea className="input mt-6 min-h-40" placeholder="Describe your image..." />
        <div className="mt-4 grid grid-cols-2 gap-3">
          <select className="input"><option>Square</option><option>Portrait</option><option>Landscape</option></select>
          <select className="input"><option>Realistic</option><option>3D</option><option>Illustration</option></select>
        </div>
        <button className="btn-primary mt-5 flex w-full items-center justify-center gap-2">
          <Wand2 size={18} />
          Generate Image
        </button>
      </section>

      <section className="card">
        <div className="grid gap-4 sm:grid-cols-2">
          {[1,2,3,4].map((i) => (
            <div key={i} className="grid aspect-square place-items-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
              <Image size={48} className="text-white/25" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
