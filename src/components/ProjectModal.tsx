import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { isPlaceholder, type Project } from '../data/portfolio'

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-6"><h4 className="mb-2 font-display text-base font-semibold">{title}</h4>{children}</section>
)
const Text = ({ v }: { v: string }) => <p className={`text-sm leading-relaxed ${isPlaceholder(v) ? 'rounded-lg border border-dashed border-line/20 px-3 py-2 text-muted' : 'text-muted'}`}>{v}</p>

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!project) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [project, onClose])

  const link = (label: string, href: string, icon: React.ReactNode) =>
    isPlaceholder(href)
      ? <span className="btn btn-ghost cursor-not-allowed opacity-50" title="Add this link in src/data/portfolio.ts">{icon}{label}</span>
      : <a className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">{icon}{label}</a>

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div role="dialog" aria-modal="true" aria-label={project.name} onClick={(e) => e.stopPropagation()}
            initial={{ y: 24, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 24, scale: 0.97 }}
            className="card relative max-h-[88vh] w-full max-w-2xl overflow-y-auto !bg-surface p-6 sm:p-8">
            <button ref={closeRef} onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line/20 hover:bg-line/10"><X size={16} /></button>
            <p className="text-xs text-sand">{project.category}</p>
            <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
            <p className="mt-2 text-muted">{project.description}</p>
            <Block title="Problem"><Text v={project.problem} /></Block>
            <Block title="Solution"><Text v={project.solution} /></Block>
            <Block title="Key Features"><ul className="grid gap-1.5 text-sm text-muted sm:grid-cols-2">{project.features.map((f) => <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{f}</li>)}</ul></Block>
            <Block title="Technology"><div className="flex flex-wrap gap-1.5">{project.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div></Block>
            <Block title="My Role"><Text v={project.role} /></Block>
            <Block title="Challenges"><Text v={project.challenges} /></Block>
            <Block title="Outcome"><Text v={project.outcome} /></Block>
            <Block title="Links"><div className="flex flex-wrap gap-2">{link('GitHub', project.github, <Github size={15} />)}{link('Live Demo', project.demo, <ExternalLink size={15} />)}</div></Block>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
