import { Download, Eye } from 'lucide-react'
import Reveal from '../components/Reveal'
import { links } from '../data/portfolio'

export default function ResumeCta() {
  return (
    <section aria-labelledby="resume-h" className="py-10">
      <div className="container-x">
        <Reveal>
          <div className="card relative overflow-hidden p-8 text-center sm:p-14">
            <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
            <h2 id="resume-h" className="relative font-display text-3xl font-semibold sm:text-4xl">Want to see the complete journey?</h2>
            <p className="relative mx-auto mt-3 max-w-lg text-muted">Explore my experience, projects, skills and academic journey in detail.</p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <a href={links.resume} download className="btn btn-primary"><Download size={16} />Download Resume</a>
              <a href={links.resume} target="_blank" rel="noreferrer" className="btn btn-ghost"><Eye size={16} />View Resume</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
