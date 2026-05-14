import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'
export function AppLayout(){const[sidebarOpen,setSidebarOpen]=useState(false);return <div className="min-h-screen"><Sidebar open={sidebarOpen} onClose={()=>setSidebarOpen(false)}/><main className="lg:pl-72"><Topbar onMenuClick={()=>setSidebarOpen(true)}/><div className="p-4 lg:p-8"><Outlet/></div></main></div>}
