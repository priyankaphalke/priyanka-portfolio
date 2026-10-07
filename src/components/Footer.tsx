import { Github, Linkedin, Mail } from 'lucide-react'
import { isPlaceholder, links, profile } from '../data/portfolio'

export default function Footer() {
  const items = [
    { l: 'GitHub', h: links.github, i: <Github size={16} /> },
    { l: 'LinkedIn', h: links.linkedin, i: <Linkedin size={16} /> },
    { l: 'Email', h: isPlaceholder(links.email) ? links.email : `mailto:${links.email}`, i: <Mail size={16} /> },
  ]
  return (
    <footer className="border-t border-line/10 py-10">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-muted">{profile.tagline}</p>
        </div>
        <ul className="flex gap-4">
          {items.map((x) => (
            <li key={x.l}><a href={isPlaceholder(x.h) ? '#contact' : x.h} target={isPlaceholder(x.h) ? undefined : '_blank'} rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">{x.i}{x.l}</a></li>
          ))}
        </ul>
        <p className="text-sm text-muted">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
