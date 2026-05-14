import { DataTable } from '../components/ui/DataTable'
import { StatusBadge } from '../components/ui/StatusBadge'
import { invoices } from '../data/mockData'
export function Invoices(){return <div className="space-y-6"><div><p className="text-sm font-semibold text-cyanx">Revenue</p><h1 className="text-3xl font-bold">Invoices</h1><p className="mt-2 text-sm text-white/45">Billing history UI for AI SaaS products.</p></div><DataTable title="Invoice History" description="Mock billing records designed for SaaS admin panels." data={invoices} columns={[{header:'Invoice ID',accessor:'id'},{header:'Customer',accessor:'customer'},{header:'Amount',accessor:'amount'},{header:'Status',accessor:'status',render:v=><StatusBadge status={v}/>},{header:'Date',accessor:'date'}]}/></div>}
