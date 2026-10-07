import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ light, toggle }: { light: boolean; toggle: () => void }) {
  return (
    <button onClick={toggle} aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className="grid h-9 w-9 place-items-center rounded-full border border-line/20 text-ink transition hover:bg-line/10">
      {light ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
