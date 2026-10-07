import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { links, nav, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const ids = nav.map((n) => n.toLowerCase())

export default function Navbar({ light, toggle }: { light: boolean; toggle: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'border-b border-line/10 bg-bg/75 backdrop-blur-lg' : ''}`}>
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <a href="#home" className="font-display text-lg font-semibold">{profile.name}</a>
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n, i) => (
            <li key={n}>
              <a href={`#${ids[i]}`} aria-current={active === ids[i] ? 'true' : undefined}
                className={`relative rounded-full px-3 py-1.5 text-sm transition ${active === ids[i] ? 'text-ink' : 'text-muted hover:text-ink'}`}>
                {active === ids[i] && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-line/10" />}
                {n}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={links.resume} target="_blank" rel="noreferrer" className="btn btn-ghost hidden !py-1.5 sm:inline-flex">Resume</a>
          <ThemeToggle light={light} toggle={toggle} />
          <button className="grid h-9 w-9 place-items-center rounded-full border border-line/20 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
            <ul className="container-x grid gap-1 pb-5">
              {nav.map((n, i) => (
                <li key={n}><a href={`#${ids[i]}`} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-2.5 ${active === ids[i] ? 'bg-line/10 text-ink' : 'text-muted'}`}>{n}</a></li>
              ))}
              <li><a href={links.resume} target="_blank" rel="noreferrer" className="block rounded-lg px-3 py-2.5 text-muted">Resume</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
