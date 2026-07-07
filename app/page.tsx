import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Mail,
  Shield,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { Reveal } from "@/components/motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  brandPillars,
  certifications,
  experience,
  profile,
  projects,
  researchThemes,
  resumeAnalysis,
  skillGroups,
  timeline,
} from "@/lib/site-data";

const navItems = ["About", "Experience", "Projects", "Skills", "Research", "Contact"];

export default function Home() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.valueProposition,
    image: "/profile.jpg",
    knowsAbout: [
      "SOC operations",
      "Alert triage",
      "API security",
      "Vulnerability assessment",
      "Security documentation",
      "Risk communication",
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <Link href="#hero" className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Shield className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>{profile.name}</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href={profile.resumeUrl}>
                <Download className="h-4 w-4" aria-hidden="true" />
                Resume
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_30%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.35))]" />
        <div className="section grid min-h-[calc(100vh-4rem)] items-center gap-12 pb-14 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <Badge className="mb-5 bg-accent text-accent-foreground">
              <Sparkles className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
              {profile.headline}
            </Badge>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-foreground sm:text-5xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {profile.valueProposition}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View case studies
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={profile.resumeUrl}>
                  Download resume
                  <Download className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div className="surface p-2">
              <Image
                src="/profile.jpg"
                alt={`${profile.name} professional portrait`}
                width={686}
                height={591}
                priority
                className="aspect-[4/3] w-full rounded-md object-cover"
              />
            </div>
            <div className="surface absolute -bottom-6 left-4 right-4 p-4 sm:left-auto sm:w-80">
              <div className="flex items-start gap-3">
                <TerminalSquare className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm leading-6 text-muted-foreground">
                  Positioning: early-career SOC and security assessment profile with strong reporting discipline.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Resume Analysis</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">A focused security brand, strongest when it stays evidence-led.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{profile.summary}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {brandPillars.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 0.06}>
              <Card className="h-full">
                <CardHeader>
                  <pillar.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <CardTitle>{pillar.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">{pillar.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <AnalysisCard title="Strengths" items={resumeAnalysis.strengths} />
          <AnalysisCard title="ATS and Positioning Gaps" items={resumeAnalysis.weaknesses} />
        </div>
      </section>

      <section id="experience" className="section bg-muted/35">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">Security practice presented as operational readiness.</h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {experience.map((item) => (
            <Card key={item.role}>
              <CardHeader>
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <CardTitle>{item.role}</CardTitle>
                    <p className="mt-2 text-muted-foreground">{item.organization}</p>
                  </div>
                  <Badge>{item.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 md:grid-cols-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">Case studies shaped from the resume without invented metrics.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <Badge>Case Study {index + 1}</Badge>
                      <CardTitle className="mt-4 text-2xl">{project.title}</CardTitle>
                      <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{project.objective}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#contact">
                        Discuss work
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-5 lg:grid-cols-2">
                  <CaseBlock title="Environment" text={project.environment} />
                  <CaseBlock title="Business Impact" text={project.impact} />
                  <CaseList title="Methodology" items={project.methodology} />
                  <CaseList title="Technical Findings" items={project.findings} />
                  <CaseList title="Tools" items={project.tools} />
                  <CaseList title="Security Concepts" items={project.concepts} />
                  <div className="lg:col-span-2">
                    <CaseBlock title="Lessons Learned" text={project.lessons} />
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="skills" className="section bg-muted/35">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Technical Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">A practical analyst toolkit, with clear room to add named platforms.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <Card key={group.title} className="h-full">
              <CardHeader>
                <group.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} className="bg-background">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Certifications</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">Security learning signals from the resume.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <Card key={cert.name} className="h-full">
              <CardHeader>
                <cert.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <CardTitle>{cert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className={cert.status === "Completed" ? "bg-accent text-accent-foreground" : undefined}>
                  {cert.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="research" className="section bg-muted/35">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Research & AI Security</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">Where the narrative can grow next.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            The resume does not claim formal research. This section frames research interests that naturally follow from the existing SOC, API security, and reporting focus.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {researchThemes.map((theme) => (
            <Card key={theme.title} className="h-full">
              <CardHeader>
                <CardTitle>{theme.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">{theme.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="learning" className="section">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Learning Timeline</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">A narrative of increasing defensive maturity.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {timeline.map((item) => (
            <Card key={item.label} className="h-full">
              <CardHeader>
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <CardTitle>{item.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="section bg-muted/35">
        <Reveal>
          <Card className="overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.7fr]">
              <div className="p-6 sm:p-10">
                <p className="eyebrow">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">Ready for SOC, security assessment, and reporting conversations.</h2>
                <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                  The current resume does not expose an email or public profile URL. Add verified contact links here when available.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href={profile.resumeUrl}>
                      <Download className="h-4 w-4" aria-hidden="true" />
                      Resume PDF
                    </Link>
                  </Button>
                  {contactEmail ? (
                    <Button asChild variant="outline" size="lg">
                      <Link href={`mailto:${contactEmail}`}>
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        Email Bhavya
                      </Link>
                    </Button>
                  ) : (
                    <Badge className="h-11 justify-center px-4 text-sm">Contact details pending verification</Badge>
                  )}
                  {linkedInUrl ? (
                    <Button asChild variant="outline" size="lg">
                      <Link href={linkedInUrl}>
                        LinkedIn
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </div>
              <div className="border-t border-border bg-secondary p-6 sm:p-10 lg:border-l lg:border-t-0">
                <h3 className="text-lg font-semibold">Hiring Review Snapshot</h3>
                <ul className="mt-5 space-y-4">
                  {resumeAnalysis.recruiterPerception.map((item) => (
                    <li key={item} className="text-sm leading-6 text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </Reveal>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>(c) {new Date().getFullYear()} {profile.name}. Built for cybersecurity recruiting clarity.</p>
          <div className="flex gap-4">
            <Link href="#about" className="hover:text-foreground">Analysis</Link>
            <Link href="#projects" className="hover:text-foreground">Projects</Link>
            <Link href="#contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function AnalysisCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/55 p-4">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-border bg-background/55 p-4">
      <h4 className="font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
