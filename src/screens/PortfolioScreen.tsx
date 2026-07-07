import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, BrainCircuit, Download, FileText, Lock, Radar, Shield, TerminalSquare } from 'lucide-react'
import { Card, Header } from '../components/Card'

const focusAreas = [
  {
    title: 'SOC and Blue Team Thinking',
    description: 'Security operations mindset with attention to structured triage, alert awareness, and clear defensive workflow.',
    details: ['Alert awareness', 'Threat awareness', 'Defensive readiness'],
  },
  {
    title: 'Web and API Security',
    description: 'Practical exposure to application-layer security, validation, and professional reporting.',
    details: ['Testing mindset', 'API security', 'Vulnerability communication'],
  },
  {
    title: 'Documentation and Reporting',
    description: 'A strong emphasis on writing clear findings, explaining risk, and supporting decision-making.',
    details: ['Structured reporting', 'Risk communication', 'Evidence-based notes'],
  },
  {
    title: 'Engineering-Led Problem Solving',
    description: 'A methodical approach shaped by engineering fundamentals and analytical thinking.',
    details: ['Analytical thinking', 'Problem structuring', 'Continuous learning'],
  },
]

const skills = [
  {
    category: 'SOC & Blue Team',
    description: 'Focused on detection workflow, operational thinking, and practical defensive readiness.',
    items: ['SIEM workflows', 'Alert triage', 'Threat detection', 'Log analysis'],
    confidence: 'High',
  },
  {
    category: 'Web & API Security',
    description: 'Hands-on validation of application-layer risks and secure design review.',
    items: ['OWASP testing', 'API security', 'Authentication flaws', 'Input validation'],
    confidence: 'High',
  },
  {
    category: 'Networking & Systems',
    description: 'A practical understanding of the infrastructure layer that supports security operations.',
    items: ['TCP/IP', 'DNS', 'HTTP', 'Linux & Windows fundamentals'],
    confidence: 'Medium-High',
  },
  {
    category: 'Scripting & Automation',
    description: 'Practical scripting for analysis, reporting, and repetitive security tasks.',
    items: ['Python', 'Bash', 'Automation', 'Report writing'],
    confidence: 'Medium',
  },
]

const projects = [
  {
    title: 'Threat Detection Lab',
    problem: 'Translate security theory into repeatable workflows that can be explained and reused.',
    objective: 'Build a structured detection environment supported by evidence-based reporting.',
    tools: ['Splunk', 'Sigma', 'Python', 'Linux'],
    impact: 'Strengthened documentation habits and improved clarity around suspicious activity.',
  },
  {
    title: 'API Security Assessment',
    problem: 'Validate common API weaknesses that can remain hidden until tested directly.',
    objective: 'Map abuse cases, confirm findings, and communicate remediation guidance clearly.',
    tools: ['Burp Suite', 'Postman', 'OWASP API Top 10', 'Documentation'],
    impact: 'Turned technical findings into a professional security narrative with practical context.',
  },
  {
    title: 'VAPT Reporting Sprint',
    problem: 'Bridge the gap between vulnerability discovery and decision-ready communication.',
    objective: 'Package findings into a clear flow of risk, evidence, and recommended remediation.',
    tools: ['Web Security', 'Reporting', 'Risk Analysis', 'Collaboration'],
    impact: 'Demonstrated analytical depth, writing quality, and structured security reasoning.',
  },
]

const certifications = [
  { name: 'Certified SOC Analyst', status: 'In Progress' },
  { name: 'Web Security Fundamentals', status: 'Completed' },
  { name: 'API Security Essentials', status: 'Completed' },
  { name: 'Security Documentation & Reporting', status: 'Completed' },
]

const roadmap = [
  'Threat intelligence and detection engineering',
  'SOC operations and incident response',
  'Cloud security fundamentals',
  'Advanced API and application-hardening workflows',
]

export default function PortfolioScreen() {
  return (
    <div id="top" className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(79,109,255,0.16),_transparent_25%),radial-gradient(circle_at_80%_10%,_rgba(167,139,250,0.10),_transparent_20%),radial-gradient(circle_at_50%_80%,_rgba(16,185,129,0.07),_transparent_22%)] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-300">Cybersecurity Portfolio</a>
          <nav className="hidden gap-6 text-sm text-slate-400 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-12 top-8 h-[360px] w-[360px] rounded-full bg-primary-500/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-24 h-[260px] w-[260px] rounded-full bg-violet-500/15 blur-3xl" />

          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
              <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="eyebrow">Blue Team · Offensive Validation</span>
                </div>
                <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">Practical SOC-ready security with clear reporting and validation.</h1>
                <p className="mt-4 text-lg text-slate-300 max-w-2xl">I build defensible detection logic, validate application and API risks, and document findings so teams can act quickly.</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/resume.txt" download className="btn-primary inline-flex items-center gap-2"><Download className="h-4 w-4" /> Resume</a>
                  <a href="#contact" className="btn-outline inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Contact</a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-900/60 p-4">
                    <p className="text-sm text-slate-400">Focus</p>
                    <p className="mt-2 font-semibold">Detection & Triage</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/60 p-4">
                    <p className="text-sm text-slate-400">Strength</p>
                    <p className="mt-2 font-semibold">Reporting & Validation</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/60 p-4">
                    <p className="text-sm text-slate-400">Tools</p>
                    <p className="mt-2 font-semibold">Burp · Splunk · Python</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <div className="card p-6 flex flex-col items-center text-center">
                  <div className="h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-slate-800">
                    <img src="/profile.jpg" alt="Profile" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Your Name</h3>
                  <p className="mt-1 text-sm text-slate-400">SOC Analyst / Blue Team • Offensive validation</p>
                  <div className="mt-4 flex gap-3">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-slate-300">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-slate-300">LinkedIn</a>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400">Place the attached photo at <span className="font-mono text-slate-200">/public/profile.jpg</span> — the page will display it automatically.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Header title="About" subtitle="A profile shaped by security curiosity, structured thinking, and a willingness to work across defensive and validation tasks." icon={<Shield className="h-6 w-6" />} />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="p-8">
              <p className="text-lg leading-8 text-slate-300">
                The professional profile is grounded in a cybersecurity-focused foundation that combines analytical thinking with hands-on security practice. The emphasis is on practical readiness for security operations, clear communication, and thoughtful documentation.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The strongest signal in the resume is not simply technical knowledge; it is the ability to move between offensive-style validation and defensive-side clarity, while keeping the work structured and explainable.
              </p>
            </Card>
            <Card className="p-8">
              <div className="space-y-4">
                {[
                  ['Professional identity', 'Blue Team operations with offensive security validation'],
                  ['Core strength', 'Structured reporting and documentation'],
                  ['Current direction', 'SOC-oriented work, security testing, and practical readiness'],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm text-slate-400">{value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Header title="Focus Areas" subtitle="The resume points to a disciplined, research-oriented profile rather than a generic entry-level cybersecurity narrative." icon={<BookOpen className="h-6 w-6" />} />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => (
              <Card key={area.title} className="p-6" hover>
                <p className="text-lg font-semibold text-white">{area.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{area.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.details.map((detail) => (
                    <span key={detail} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{detail}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Header title="Core Skills" subtitle="Capabilities aligned to practical security operations and validation work." icon={<Lock className="h-6 w-6" />} />
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <Card key={skill.category} className="p-7" hover>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">{skill.category}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{skill.description}</p>
                  </div>
                  <span className="rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary-300">
                    {skill.confidence}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">{item}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Header title="Certifications" subtitle="Professional development focused on practical security readiness." icon={<TerminalSquare className="h-6 w-6" />} />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="p-6" hover>
                <p className="text-lg font-semibold text-white">{cert.name}</p>
                <p className="mt-2 text-sm text-slate-400">{cert.status}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Header title="Selected Projects" subtitle="Security work presented as structured case studies with clear outcomes." icon={<Radar className="h-6 w-6" />} />
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="p-8" hover>
                <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                  <div>
                    <p className="text-2xl font-semibold text-white">{project.title}</p>
                    <p className="mt-3 text-slate-400">{project.problem}</p>
                    <p className="mt-4 text-slate-300">{project.objective}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Tools</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) => <span key={tool} className="rounded-full bg-primary-500/10 px-3 py-1 text-sm text-primary-300">{tool}</span>)}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-400">Impact: {project.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Header title="Learning Journey" subtitle="The current trajectory points toward stronger SOC, detection, and research-oriented security work." icon={<BrainCircuit className="h-6 w-6" />} />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="p-8">
              <p className="text-lg font-semibold text-white">Current growth focus</p>
              <div className="mt-5 space-y-3">
                {roadmap.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-300">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary-400" />
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-8">
              <p className="text-lg font-semibold text-white">Recruiter takeaway</p>
              <p className="mt-4 text-slate-400 leading-8">
                The profile reads as disciplined and research-oriented, with a clear interest in practical security operations and documentation quality. That combination supports hiring conversations in SOC, Blue Team, and security validation contexts.
              </p>
              <a href="/resume.txt" download className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-300 transition hover:text-primary-200">
                Download the full resume <ArrowRight className="h-4 w-4" />
              </a>
            </Card>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Card className="p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Open to SOC, blue-team, and hands-on security conversations.</h2>
                <p className="mt-4 max-w-2xl text-slate-400">The strongest fit is a team that values structured thinking, documentation quality, and practical security curiosity.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="/resume.txt" download className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 font-medium text-white transition hover:bg-primary-400"><Download className="h-4 w-4" /> Download Resume</a>
                <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-200 transition hover:bg-white/10"><Shield className="h-4 w-4" /> Back to Top</a>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
