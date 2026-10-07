import { Briefcase, Plus } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { experience, hackathons, isPlaceholder } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading title="Experience" />
        <ol className="relative ml-3 space-y-8 border-l border-line/15 pl-8">
          {experience.map((e) => (
            <Reveal key={e.role}>
              <li className="relative">
                <span className="absolute -left-[2.9rem] grid h-9 w-9 place-items-center rounded-full border border-line/20 bg-bg text-accent"><Briefcase size={16} /></span>
                <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                <p className="text-sand">{e.org}</p>
                <p className={`mt-1 text-sm ${isPlaceholder(e.period) ? 'text-muted/70' : 'text-muted'}`}>{e.period}</p>
                <ul className="mt-3 flex flex-wrap gap-2">{e.focus.map((f) => <li key={f} className="chip">{f}</li>)}</ul>
              </li>
            </Reveal>
          ))}
          <li className="relative">
            <span className="absolute -left-[2.9rem] grid h-9 w-9 place-items-center rounded-full border border-dashed border-line/30 bg-bg text-muted"><Plus size={16} /></span>
            <p className="text-sm text-muted">Add your next experience in <code>src/data/portfolio.ts</code>.</p>
          </li>
        </ol>

        <div className="mt-20">
          <SectionHeading title="Hackathons & Events" sub="Events I've taken part in and built for." />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {hackathons.map((h, i) => (
              <Reveal key={h} delay={(i % 3) * 0.06}>
                <li className="card group flex h-full items-center justify-between gap-3 p-5 transition hover:border-accent/40">
                  <span className="font-medium">{h}</span>
                  <span className="chip shrink-0">Participated</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
