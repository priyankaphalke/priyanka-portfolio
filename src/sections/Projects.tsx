import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { projects, type Project } from '../data/portfolio'

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null)
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading title="Things I've Built" sub="Projects where I've turned ideas into working solutions." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => <Reveal key={p.id} delay={(i % 2) * 0.08}><ProjectCard project={p} onOpen={() => setSel(p)} /></Reveal>)}
        </div>
      </div>
      <ProjectModal project={sel} onClose={() => setSel(null)} />
    </section>
  )
}
