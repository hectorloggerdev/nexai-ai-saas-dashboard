import { UploadCloud, Eye } from 'lucide-react'

export function Vision() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      <section className="card">
        <p className="text-sm font-semibold text-cyanx">Vision Analysis</p>
        <h1 className="mt-1 text-3xl font-bold">Analyze Images with AI</h1>
        <div className="mt-6 grid min-h-96 place-items-center rounded-3xl border border-dashed border-white/15 bg-white/5">
          <div className="text-center">
            <UploadCloud className="mx-auto text-cyanx" size={52} />
            <p className="mt-4 font-semibold">Drop image here</p>
            <p className="mt-1 text-sm text-white/45">PNG, JPG, WebP supported</p>
          </div>
        </div>
      </section>
      <aside className="card">
        <Eye className="text-cyanx" />
        <h2 className="mt-4 text-xl font-bold">Analysis Result</h2>
        <p className="mt-3 text-sm leading-6 text-white/55">Detected objects, scene summary, color palette, and possible product insights will appear here.</p>
      </aside>
    </div>
  )
}
