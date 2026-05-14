import { ReactNode } from 'react'
type PageHeaderProps = { eyebrow?: string; title: string; description?: string; action?: ReactNode }
export function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && <p className="text-sm font-semibold text-cyanx">{eyebrow}</p>}
        <h1 className="mt-1 text-3xl font-bold md:text-4xl">{title}</h1>
        {description && <p className="mt-2 max-w-3xl text-sm leading-6 text-white/50">{description}</p>}
      </div>
      {action}
    </div>
  )
}
