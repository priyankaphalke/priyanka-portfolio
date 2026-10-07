import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import photo from '../assets/priyanka.webp'
import { links, profile } from '../data/portfolio'

const pos = ['-left-3 top-10 sm:-left-8', '-right-2 top-24 sm:-right-8', '-left-2 bottom-28 sm:-left-10', '-right-3 bottom-12 sm:-right-6', 'left-1/3 -top-3']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" animate={{ x: [0, 40, 0], y: [0, 20, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sand/10 blur-3xl" animate={{ x: [0, -30, 0], y: [0, -30, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block rounded-full border border-line/15 bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur">{profile.badge}</span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            Hi, I'm Priyanka.<br />I build with AI, Data &amp; Code.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href={links.resume} download className="btn btn-ghost"><Download size={16} />Download Resume</a>
            <a href="#contact" className="group inline-flex items-center gap-1.5 px-2 text-sm font-semibold text-accent">Let's Connect <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>
          </div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-[340px] sm:max-w-sm" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-sand/30 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line/20 bg-surface shadow-2xl">
            <img src={photo} alt="Priyanka Phalke" width={518} height={632} fetchPriority="high" className="h-full w-full object-cover object-[50%_20%]" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
            <div className="absolute inset-x-3 bottom-3 rounded-xl border border-line/15 bg-bg/60 px-4 py-2.5 backdrop-blur-md">
              <p className="text-sm font-semibold">Priyanka Phalke</p>
              <p className="text-xs text-muted">B.E. Computer Engineering · AVCOE</p>
            </div>
          </div>
          {profile.floatingTags.map((t, i) => (
            <motion.span key={t} className={`absolute ${pos[i]} rounded-full border border-line/20 bg-surface/80 px-3 py-1 text-xs font-semibold shadow-lg backdrop-blur`}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ opacity: { delay: 0.8 + i * 0.12 }, scale: { delay: 0.8 + i * 0.12 }, y: { duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: 1 + i * 0.2 } }}>
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
