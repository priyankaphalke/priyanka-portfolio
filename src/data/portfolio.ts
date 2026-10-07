// ============================================================
//  EDIT YOUR CONTENT HERE. Anything starting with "YOUR_" or
//  "Add ..." is a placeholder and is shown as such on the site.
// ============================================================

export const profile = {
  name: 'Priyanka Phalke',
  badge: 'Computer Engineering Student • AI & Data Enthusiast',
  tagline: 'Building. Learning. Experimenting.',
  intro:
    'Computer Engineering student passionate about Artificial Intelligence, Data Science, Software Development and building technology that solves real-world problems.',
  about: [
    "I'm a third-year Computer Engineering student at Amrutvahini College of Engineering, passionate about turning ideas into practical technology solutions.",
    'My interests span Artificial Intelligence, Data Science, Web Development, Cloud Computing and UI/UX. I enjoy learning new technologies, participating in hackathons, building projects and experimenting with ideas that can solve real-world problems.',
    "I'm constantly learning, building and looking for opportunities where I can grow while creating meaningful technology.",
  ],
  facts: [
    ['Name', 'Priyanka Phalke'],
    ['Education', 'B.E. Computer Engineering'],
    ['College', 'Amrutvahini College of Engineering'],
    ['Year', '3rd Year'],
    ['Graduation', '2028'],
    ['Location', 'Maharashtra, India'],
  ] as [string, string][],
  floatingTags: ['AI', 'Python', 'Data Science', 'React', 'AWS'],
  exploring: ['AI / ML', 'Data Science', 'Agentic AI', 'Cloud Computing', 'Full-Stack Development', 'DSA'],
}

export const links = {
  github: 'YOUR_GITHUB_URL',
  linkedin: 'YOUR_LINKEDIN_URL',
  email: 'YOUR_EMAIL',
  resume: '/resume.pdf', // replace public/resume.pdf with your real resume
}

export const isPlaceholder = (v?: string) => !v || v.startsWith('YOUR_') || v.startsWith('Add ')

export const skills = [
  { title: 'Programming', items: ['Python', 'Java', 'C/C++'] },
  { title: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'] },
  { title: 'AI & Data', items: ['Python', 'Pandas', 'NumPy', 'Data Science', 'Machine Learning', 'AI/ML', 'LLMs', 'Agentic AI'] },
  { title: 'Cloud & Backend', items: ['AWS', 'Supabase', 'PostgreSQL', 'REST APIs'] },
  { title: 'Tools & Design', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva', 'n8n', 'Lovable', 'Antigravity'] },
]

export interface Project {
  id: string
  name: string
  category: string
  description: string
  tech: string[]
  features: string[]
  hue: string // gradient for the card visual
  icon: 'sprout' | 'sun' | 'trending' | 'leaf'
  problem: string
  solution: string
  role: string
  challenges: string
  outcome: string
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    id: 'krishisaar',
    name: 'KrishiSaar AI',
    category: 'AI • Agriculture • Full Stack',
    description:
      'An AI-powered agricultural intelligence platform designed to help farmers make better farming decisions through a unified digital platform.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'AI', 'PWA'],
    features: ['Farm Diary', 'Crop management', 'Expense tracking', 'Income tracking', 'Analytics', 'Reminders', 'Multilingual interface', 'Farmer-focused UX'],
    hue: 'from-emerald-500/40 via-teal-500/20 to-transparent',
    icon: 'sprout',
    problem: 'Farmers often manage crops, expenses and decisions across scattered tools, making informed farming decisions harder.',
    solution: 'A unified digital platform that brings farm records, finances and AI-assisted guidance together with a farmer-focused, multilingual interface.',
    role: 'Add your role here (e.g. frontend, design, AI integration).',
    challenges: 'Add the challenges you faced here.',
    outcome: 'Add the real outcome here. Only include results you can verify.',
    github: 'YOUR_GITHUB_URL',
    demo: 'YOUR_LIVE_DEMO_URL',
  },
  {
    id: 'heatshield',
    name: 'HeatShield AI',
    category: 'AI • Climate Tech',
    description:
      'An AI-powered hyperlocal urban heat-risk decision-support platform designed to help users understand and respond to extreme heat.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'AI'],
    features: ['Heat risk analysis', 'Hyperlocal insights', 'Decision support', 'AI recommendations', 'Interactive dashboard'],
    hue: 'from-orange-500/40 via-amber-500/20 to-transparent',
    icon: 'sun',
    problem: 'Extreme urban heat affects neighbourhoods differently, but people rarely get local, actionable guidance.',
    solution: 'A decision-support platform that analyses heat risk at a hyperlocal level and offers AI recommendations through an interactive dashboard.',
    role: 'Add your role here.',
    challenges: 'Add the challenges you faced here.',
    outcome: 'Add the real outcome here. Only include results you can verify.',
    github: 'YOUR_GITHUB_URL',
    demo: 'YOUR_LIVE_DEMO_URL',
  },
  {
    id: 'ascend',
    name: 'Ascend',
    category: 'AI • Productivity • UI/UX',
    description:
      'An AI-powered Personal Growth OS designed to help users manage goals, habits, reflections and personal development.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Supabase'],
    features: ['Goals', 'Habits', 'Reflections', 'Personal development'],
    hue: 'from-indigo-500/40 via-violet-500/20 to-transparent',
    icon: 'trending',
    problem: 'Add the problem Ascend addresses in your own words.',
    solution: 'A Personal Growth OS that keeps goals, habits and reflections in one place, supported by AI.',
    role: 'Add your role here.',
    challenges: 'Add the challenges you faced here.',
    outcome: 'Add the real outcome here. Only include results you can verify.',
    github: 'YOUR_GITHUB_URL',
    demo: 'YOUR_LIVE_DEMO_URL',
  },
  {
    id: 'nutribox',
    name: 'NutriBox',
    category: 'Product • Health • Startup',
    description:
      'A healthy vegetarian meal subscription concept designed to provide convenient and nutritious meal options for students and young professionals.',
    tech: ['Product concept', 'Startup idea'],
    features: ['Vegetarian meal subscription', 'Built for students and young professionals'],
    hue: 'from-lime-500/40 via-green-500/20 to-transparent',
    icon: 'leaf',
    problem: 'Students and young professionals need convenient, nutritious meal options.',
    solution: 'A healthy vegetarian meal subscription concept.',
    role: 'Add your role here.',
    challenges: 'Add the challenges you faced here.',
    outcome: 'This is a concept. Add any real progress here.',
    github: 'YOUR_GITHUB_URL',
    demo: 'YOUR_LIVE_DEMO_URL',
  },
]

export const experience = [
  {
    role: 'Data Science Intern',
    org: 'Codomax',
    period: 'Add dates',
    focus: ['Data Science', 'Python', 'Data Analysis', 'Practical project development'],
  },
]

export const hackathons = [
  'Smart India Hackathon',
  'Google DevFest',
  'Paytm Build for India AI Hackathon',
  "L'Oréal Brandstorm",
  'PU Code Hackathon',
  'TBO VoyageHack',
  'AI Volution',
]

export const education = {
  degree: 'B.E. Computer Engineering',
  school: 'Amrutvahini College of Engineering',
  affiliation: 'Affiliated to Savitribai Phule Pune University',
  period: '2024 — 2028',
  status: 'Currently in 3rd Year',
}

export const achievements = [
  { category: 'Hackathons', text: 'Participated in the events listed under Experience. Add results only when confirmed.' },
  { category: 'Projects', text: 'Built KrishiSaar AI, HeatShield AI and Ascend. Add verified outcomes here.' },
  { category: 'Scholarships', text: 'Add scholarships here.' },
  { category: 'Certifications', text: 'See the certifications below.' },
  { category: 'Technical Events', text: 'Add technical events you attended or organised.' },
  { category: 'Research', text: 'Add research work or papers here.' },
]

export const certifications = [
  { name: 'Add certification name', org: 'Add organisation', year: 'Add year', credential: 'YOUR_CREDENTIAL_URL' },
  { name: 'Add certification name', org: 'Add organisation', year: 'Add year', credential: 'YOUR_CREDENTIAL_URL' },
  { name: 'Add certification name', org: 'Add organisation', year: 'Add year', credential: 'YOUR_CREDENTIAL_URL' },
]

export const nav = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Education', 'Contact']
