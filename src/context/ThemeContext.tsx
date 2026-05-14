import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
type Theme = 'dark' | 'light'
type ThemeContextType = { theme: Theme; toggleTheme: () => void }
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  useEffect(() => { const saved = localStorage.getItem('theme') as Theme | null; const active = saved || 'dark'; setTheme(active); document.documentElement.classList.toggle('dark', active === 'dark') }, [])
  const toggleTheme = () => { const next = theme === 'dark' ? 'light' : 'dark'; setTheme(next); localStorage.setItem('theme', next); document.documentElement.classList.toggle('dark', next === 'dark') }
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
export function useTheme() { const ctx = useContext(ThemeContext); if (!ctx) throw new Error('useTheme must be used inside ThemeProvider'); return ctx }
