import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Reveal from '../components/Reveal'
import { isPlaceholder, links } from '../data/portfolio'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState<Errors>({})
  const [status, setStatus] = useState('')

  const cards = [
    { l: 'Email', t: links.email, h: `mailto:${links.email}`, i: <Mail size={18} /> },
    { l: 'GitHub', t: links.github, h: links.github, i: <Github size={18} /> },
    { l: 'LinkedIn', t: links.linkedin, h: links.linkedin, i: <Linkedin size={18} /> },
  ]

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const n: Errors = {}
    if (v.name.trim().length < 2) n.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) n.email = 'Enter a valid email address.'
    if (v.message.trim().length < 10) n.message = 'Write at least 10 characters.'
    setErr(n)
    if (Object.keys(n).length) return setStatus('')
    if (isPlaceholder(links.email)) return setStatus('Form is valid, but no email address is set yet. Add yours in src/data/portfolio.ts.')
    const body = `${v.message}\n\n— ${v.name} (${v.email})`
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent('Portfolio message from ' + v.name)}&body=${encodeURIComponent(body)}`
    setStatus('Opening your email app to send this message.')
  }

  const field = 'mt-1.5 w-full rounded-xl border border-line/20 bg-bg/60 px-4 py-3 text-sm outline-none transition focus:border-accent'

  return (
    <section id="contact" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Let's build something together.</h2>
          <p className="mt-4 max-w-md text-muted">I'm always open to learning, collaborating, building interesting projects and exploring new opportunities.</p>
          <ul className="mt-8 space-y-3">
            {cards.map((c) => (
              <li key={c.l}>
                <a href={isPlaceholder(c.t) ? undefined : c.h} target={c.l === 'Email' ? undefined : '_blank'} rel="noreferrer"
                  className={`card flex items-center gap-4 p-4 transition ${isPlaceholder(c.t) ? 'placeholder' : 'hover:border-accent/40'}`}>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-line/10 text-accent">{c.i}</span>
                  <span><span className="block text-sm font-medium">{c.l}</span><span className="block break-all text-sm text-muted">{c.t}</span></span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="card space-y-5 p-6 sm:p-8">
            {(['name', 'email', 'message'] as const).map((k) => (
              <div key={k}>
                <label htmlFor={k} className="text-sm font-medium capitalize">{k}</label>
                {k === 'message'
                  ? <textarea id={k} rows={5} className={field} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={`${k}-e`} />
                  : <input id={k} type={k === 'email' ? 'email' : 'text'} className={field} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={`${k}-e`} />}
                <p id={`${k}-e`} className="mt-1 min-h-[1rem] text-xs text-red-400" role="alert">{err[k]}</p>
              </div>
            ))}
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
            {status && <p className="text-sm text-muted" role="status">{status}</p>}
            <p className="text-xs text-muted">This form opens your email app. There is no server behind it.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
