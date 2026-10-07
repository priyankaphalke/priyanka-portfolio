import { Award } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { achievements, certifications, isPlaceholder } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-x">
        <SectionHeading title="Achievements" sub="Only confirmed highlights appear here. Placeholders are marked with dashed borders." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.category} delay={(i % 3) * 0.06}>
              <div className={`card h-full p-6 ${isPlaceholder(a.text) || a.text.startsWith('Add') ? 'placeholder' : ''}`}>
                <h3 className="font-display text-lg font-semibold">{a.category}</h3>
                <p className="mt-2 text-sm text-muted">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading title="Certifications" />
          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="card placeholder h-full p-6">
                  <Award size={20} className="text-sand" />
                  <h3 className="mt-3 font-medium text-muted">{c.name}</h3>
                  <dl className="mt-3 space-y-1 text-sm text-muted">
                    <div className="flex justify-between"><dt>Organisation</dt><dd>{c.org}</dd></div>
                    <div className="flex justify-between"><dt>Year</dt><dd>{c.year}</dd></div>
                    <div className="flex justify-between"><dt>Credential</dt><dd>{isPlaceholder(c.credential) ? 'Add link' : <a className="text-accent" href={c.credential}>View</a>}</dd></div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
