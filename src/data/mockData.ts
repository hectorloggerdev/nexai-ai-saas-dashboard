export const stats = [
  { label: 'Total Requests', value: '128.4K', change: '+18.2%' },
  { label: 'Active Users', value: '12,840', change: '+9.4%' },
  { label: 'Image Generations', value: '34.2K', change: '+22.8%' },
  { label: 'API Cost', value: '$1,284', change: '-6.1%' },
]
export const usageData = [
  { name: 'Mon', chat: 420, image: 180, vision: 90 },
  { name: 'Tue', chat: 520, image: 240, vision: 110 },
  { name: 'Wed', chat: 610, image: 260, vision: 160 },
  { name: 'Thu', chat: 740, image: 330, vision: 180 },
  { name: 'Fri', chat: 820, image: 360, vision: 220 },
  { name: 'Sat', chat: 690, image: 300, vision: 190 },
  { name: 'Sun', chat: 930, image: 420, vision: 260 },
]
export const revenueData = [
  { name: 'Starter', value: 24 },
  { name: 'Pro', value: 52 },
  { name: 'Scale', value: 24 },
]
export const modelPerformance = [
  { model: 'NexAI Turbo', latency: '320ms', success: '99.2%', cost: '$0.002' },
  { model: 'Vision Core', latency: '840ms', success: '98.1%', cost: '$0.010' },
  { model: 'Image Pro', latency: '2.8s', success: '97.4%', cost: '$0.045' },
]
export const conversations = [
  { title: 'Landing page copy ideas', model: 'NexAI Pro', time: '2 min ago' },
  { title: 'Analyze uploaded product image', model: 'Vision Core', time: '24 min ago' },
  { title: 'Generate SaaS onboarding flow', model: 'NexAI Turbo', time: '1 hour ago' },
]
export const plans = [
  { name: 'Starter', price: '$19', features: ['10K AI requests', 'Basic analytics', 'Email support'] },
  { name: 'Pro', price: '$49', features: ['100K AI requests', 'Vision tools', 'Priority support'] },
  { name: 'Scale', price: '$149', features: ['Unlimited projects', 'Team seats', 'Advanced API limits'] },
]
export const users = [
  { name: 'Alex Morgan', email: 'alex@nexai.app', plan: 'Pro', status: 'Active', requests: '18,420', joined: 'Jan 12, 2026' },
  { name: 'Mina Carter', email: 'mina@orbit.ai', plan: 'Scale', status: 'Active', requests: '42,100', joined: 'Feb 04, 2026' },
  { name: 'Daniel Kim', email: 'daniel@flowlabs.io', plan: 'Starter', status: 'Pending', requests: '4,902', joined: 'Mar 18, 2026' },
  { name: 'Sara Wilson', email: 'sara@promptly.co', plan: 'Pro', status: 'Active', requests: '23,770', joined: 'Apr 08, 2026' },
  { name: 'Nora Stone', email: 'nora@visionx.dev', plan: 'Starter', status: 'Inactive', requests: '1,210', joined: 'May 01, 2026' },
]
export const invoices = [
  { id: 'INV-2026-001', customer: 'Alex Morgan', amount: '$49.00', status: 'Paid', date: 'May 01, 2026' },
  { id: 'INV-2026-002', customer: 'Mina Carter', amount: '$149.00', status: 'Paid', date: 'May 03, 2026' },
  { id: 'INV-2026-003', customer: 'Daniel Kim', amount: '$19.00', status: 'Open', date: 'May 06, 2026' },
  { id: 'INV-2026-004', customer: 'Sara Wilson', amount: '$49.00', status: 'Paid', date: 'May 09, 2026' },
  { id: 'INV-2026-005', customer: 'Nora Stone', amount: '$19.00', status: 'Failed', date: 'May 11, 2026' },
]
export const notifications = [
  { title: 'Usage limit reached', message: 'Vision Analysis is at 90% of monthly quota.', type: 'Warning', time: '8 min ago' },
  { title: 'New Pro subscription', message: 'Sara Wilson upgraded from Starter to Pro.', type: 'Billing', time: '23 min ago' },
  { title: 'API key rotated', message: 'Production API key was regenerated successfully.', type: 'Security', time: '1 hour ago' },
  { title: 'Image queue normalized', message: 'Delayed image jobs are now processed.', type: 'System', time: '2 hours ago' },
]
export const activity = [
  { user: 'Alex Morgan', action: 'generated 14 product images', time: '4 min ago' },
  { user: 'Mina Carter', action: 'created a new API key', time: '16 min ago' },
  { user: 'Sara Wilson', action: 'started a chat session', time: '31 min ago' },
  { user: 'Daniel Kim', action: 'uploaded a vision sample', time: '54 min ago' },
]
export const integrations = [
  { name: 'OpenAI', description: 'Chat and assistant model integration UI', status: 'Connected' },
  { name: 'Stripe', description: 'Billing and subscription-ready screens', status: 'Ready' },
  { name: 'Supabase', description: 'Auth/database integration placeholder', status: 'Ready' },
  { name: 'Slack', description: 'Notification workflow card', status: 'Beta' },
]
