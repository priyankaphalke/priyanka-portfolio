import { GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { education as e } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeading title="Education" />
        <ol className="relative ml-3 border-l border-line/15 pl-8">
          <Reveal>
            <li className="relative">
              <span className="absolute -left-[2.9rem] grid h-9 w-9 place-items-center rounded-full border border-line/20 bg-bg text-accent"><GraduationCap size={16} /></span>
              <h3 className="font-display text-xl font-semibold">{e.degree}</h3>
              <p className="text-sand">{e.school}</p>
              <p className="mt-1 text-sm text-muted">{e.affiliation}</p>
              <div className="mt-3 flex flex-wrap gap-2"><span className="chip">{e.period}</span><span className="chip">{e.status}</span></div>
            </li>
          </Reveal>
        </ol>
      </div>
    </section>
  )
}
