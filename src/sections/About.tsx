import { Brain, Cloud, Code2, Database, GraduationCap, Layers } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolio'

const icons = [Brain, Database, Brain, Cloud, Layers, Code2]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-4 text-lg leading-relaxed text-muted">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="card divide-y divide-line/10">
              {profile.facts.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                  <dt className="text-sm text-muted">{k}</dt><dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal><h3 className="mb-5 flex items-center gap-2 font-display text-2xl font-semibold"><GraduationCap size={22} className="text-sand" />Currently Exploring</h3></Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {profile.exploring.map((e, i) => {
              const I = icons[i]
              return (
                <Reveal key={e} delay={i * 0.05}>
                  <li className="card flex items-center gap-3 p-4 transition hover:border-accent/40 hover:bg-surface"><I size={18} className="shrink-0 text-accent" /><span className="text-sm font-medium">{e}</span></li>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
