import { motion } from 'framer-motion'
import { ArrowUpRight, Leaf, Sprout, Sun, TrendingUp } from 'lucide-react'
import type { Project } from '../data/portfolio'

const icons = { sprout: Sprout, sun: Sun, trending: TrendingUp, leaf: Leaf }

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const Icon = icons[project.icon]
  return (
    <motion.button onClick={onOpen} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="card group flex h-full flex-col overflow-hidden text-left" aria-label={`Open details for ${project.name}`}>
      <div className="relative h-44 overflow-hidden border-b border-line/10">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.hue} transition duration-500 group-hover:scale-110`} />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgb(var(--line)/0.35)_1px,transparent_1px)] [background-size:18px_18px]" />
        <Icon className="absolute bottom-4 left-5 text-ink/80 transition duration-500 group-hover:scale-110" size={40} strokeWidth={1.25} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-sand">{project.category}</p>
        <div className="mt-1 flex items-center justify-between">
          <h3 className="font-display text-xl font-semibold">{project.name}</h3>
          <ArrowUpRight size={20} className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5 opacity-70 transition group-hover:opacity-100">
          {project.tech.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
      </div>
    </motion.button>
  )
}
