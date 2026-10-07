import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from '../hooks/useTheme'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Achievements from '../sections/Achievements'
import Education from '../sections/Education'
import ResumeCta from '../sections/ResumeCta'
import Contact from '../sections/Contact'

export default function Home() {
  const { light, toggle } = useTheme()
  const [top, setTop] = useState(false)
  useEffect(() => {
    const on = () => setTop(window.scrollY > 600)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-bg focus:px-4 focus:py-2">Skip to content</a>
      <Navbar light={light} toggle={toggle} />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Achievements /><Education /><ResumeCta /><Contact />
      </main>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
        className={`fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-line/20 bg-surface/80 backdrop-blur transition ${top ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <ArrowUp size={18} />
      </button>
    </>
  )
}
