import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading title="Skills" sub="Tools and technologies I work with and am learning." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className={i === 2 ? 'lg:col-span-2' : ''}>
              <div className="card h-full p-6">
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => <li key={s} className="rounded-lg border border-line/15 bg-bg/40 px-3 py-1.5 text-sm transition hover:border-accent/50 hover:text-accent">{s}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
