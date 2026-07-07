import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BrainCircuit, Download, FileText, Lock, Radar, Shield, TerminalSquare } from 'lucide-react';
import { Card, Header } from '../components/Card';
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
];
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
];
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
];
const certifications = [
    { name: 'Certified SOC Analyst', status: 'In Progress' },
    { name: 'Web Security Fundamentals', status: 'Completed' },
    { name: 'API Security Essentials', status: 'Completed' },
    { name: 'Security Documentation & Reporting', status: 'Completed' },
];
const roadmap = [
    'Threat intelligence and detection engineering',
    'SOC operations and incident response',
    'Cloud security fundamentals',
    'Advanced API and application-hardening workflows',
];
export default function PortfolioScreen() {
    return (_jsxs("div", { id: "top", className: "min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(79,109,255,0.16),_transparent_25%),radial-gradient(circle_at_80%_10%,_rgba(167,139,250,0.10),_transparent_20%),radial-gradient(circle_at_50%_80%,_rgba(16,185,129,0.07),_transparent_22%)] text-slate-100", children: [_jsx("header", { className: "sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl", children: _jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8", children: [_jsx("a", { href: "#top", className: "text-sm font-semibold uppercase tracking-[0.32em] text-slate-300", children: "Cybersecurity Portfolio" }), _jsxs("nav", { className: "hidden gap-6 text-sm text-slate-400 md:flex", children: [_jsx("a", { href: "#about", className: "transition hover:text-white", children: "About" }), _jsx("a", { href: "#skills", className: "transition hover:text-white", children: "Skills" }), _jsx("a", { href: "#projects", className: "transition hover:text-white", children: "Projects" }), _jsx("a", { href: "#contact", className: "transition hover:text-white", children: "Contact" })] })] }) }), _jsxs("main", { children: [_jsxs("section", { className: "relative overflow-hidden", children: [_jsx("div", { className: "pointer-events-none absolute -left-12 top-8 h-[360px] w-[360px] rounded-full bg-primary-500/15 blur-3xl" }), _jsx("div", { className: "pointer-events-none absolute right-0 top-24 h-[260px] w-[260px] rounded-full bg-violet-500/15 blur-3xl" }), _jsx("div", { className: "mx-auto max-w-6xl px-6 py-20 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center", children: [_jsxs(motion.div, { className: "lg:col-span-2", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx("div", { className: "mb-4 inline-flex items-center gap-3", children: _jsx("span", { className: "eyebrow", children: "Blue Team \u00B7 Offensive Validation" }) }), _jsx("h1", { className: "text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl", children: "Practical SOC-ready security with clear reporting and validation." }), _jsx("p", { className: "mt-4 text-lg text-slate-300 max-w-2xl", children: "I build defensible detection logic, validate application and API risks, and document findings so teams can act quickly." }), _jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [_jsxs("a", { href: "/resume.txt", download: true, className: "btn-primary inline-flex items-center gap-2", children: [_jsx(Download, { className: "h-4 w-4" }), " Resume"] }), _jsxs("a", { href: "#contact", className: "btn-outline inline-flex items-center gap-2", children: [_jsx(FileText, { className: "h-4 w-4" }), " Contact"] })] }), _jsxs("div", { className: "mt-8 grid gap-3 sm:grid-cols-3", children: [_jsxs("div", { className: "rounded-2xl bg-slate-900/60 p-4", children: [_jsx("p", { className: "text-sm text-slate-400", children: "Focus" }), _jsx("p", { className: "mt-2 font-semibold", children: "Detection & Triage" })] }), _jsxs("div", { className: "rounded-2xl bg-slate-900/60 p-4", children: [_jsx("p", { className: "text-sm text-slate-400", children: "Strength" }), _jsx("p", { className: "mt-2 font-semibold", children: "Reporting & Validation" })] }), _jsxs("div", { className: "rounded-2xl bg-slate-900/60 p-4", children: [_jsx("p", { className: "text-sm text-slate-400", children: "Tools" }), _jsx("p", { className: "mt-2 font-semibold", children: "Burp \u00B7 Splunk \u00B7 Python" })] })] })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "card p-6 flex flex-col items-center text-center", children: [_jsx("div", { className: "h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-slate-800", children: _jsx("img", { src: "/profile.jpg", alt: "Profile", className: "h-full w-full object-cover" }) }), _jsx("h3", { className: "mt-4 text-lg font-semibold", children: "Your Name" }), _jsx("p", { className: "mt-1 text-sm text-slate-400", children: "SOC Analyst / Blue Team \u2022 Offensive validation" }), _jsxs("div", { className: "mt-4 flex gap-3", children: [_jsx("a", { href: "https://github.com", target: "_blank", rel: "noreferrer", className: "text-sm text-slate-300", children: "GitHub" }), _jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noreferrer", className: "text-sm text-slate-300", children: "LinkedIn" })] })] }), _jsxs("p", { className: "mt-3 text-xs text-slate-400", children: ["Place the attached photo at ", _jsx("span", { className: "font-mono text-slate-200", children: "/public/profile.jpg" }), " \u2014 the page will display it automatically."] })] })] }) })] }), _jsxs("section", { id: "about", className: "mx-auto max-w-7xl px-6 py-16 lg:px-8", children: [_jsx(Header, { title: "About", subtitle: "A profile shaped by security curiosity, structured thinking, and a willingness to work across defensive and validation tasks.", icon: _jsx(Shield, { className: "h-6 w-6" }) }), _jsxs("div", { className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]", children: [_jsxs(Card, { className: "p-8", children: [_jsx("p", { className: "text-lg leading-8 text-slate-300", children: "The professional profile is grounded in a cybersecurity-focused foundation that combines analytical thinking with hands-on security practice. The emphasis is on practical readiness for security operations, clear communication, and thoughtful documentation." }), _jsx("p", { className: "mt-5 text-lg leading-8 text-slate-300", children: "The strongest signal in the resume is not simply technical knowledge; it is the ability to move between offensive-style validation and defensive-side clarity, while keeping the work structured and explainable." })] }), _jsx(Card, { className: "p-8", children: _jsx("div", { className: "space-y-4", children: [
                                                ['Professional identity', 'Blue Team operations with offensive security validation'],
                                                ['Core strength', 'Structured reporting and documentation'],
                                                ['Current direction', 'SOC-oriented work, security testing, and practical readiness'],
                                            ].map(([title, value]) => (_jsxs("div", { className: "rounded-2xl border border-white/10 bg-slate-900/70 p-4", children: [_jsx("p", { className: "font-semibold text-white", children: title }), _jsx("p", { className: "mt-1 text-sm text-slate-400", children: value })] }, title))) }) })] })] }), _jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 lg:px-8", children: [_jsx(Header, { title: "Focus Areas", subtitle: "The resume points to a disciplined, research-oriented profile rather than a generic entry-level cybersecurity narrative.", icon: _jsx(BookOpen, { className: "h-6 w-6" }) }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 xl:grid-cols-4", children: focusAreas.map((area) => (_jsxs(Card, { className: "p-6", hover: true, children: [_jsx("p", { className: "text-lg font-semibold text-white", children: area.title }), _jsx("p", { className: "mt-3 text-sm leading-7 text-slate-400", children: area.description }), _jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: area.details.map((detail) => (_jsx("span", { className: "rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300", children: detail }, detail))) })] }, area.title))) })] }), _jsxs("section", { id: "skills", className: "mx-auto max-w-7xl px-6 py-16 lg:px-8", children: [_jsx(Header, { title: "Core Skills", subtitle: "Capabilities aligned to practical security operations and validation work.", icon: _jsx(Lock, { className: "h-6 w-6" }) }), _jsx("div", { className: "grid gap-6 md:grid-cols-2", children: skills.map((skill) => (_jsxs(Card, { className: "p-7", hover: true, children: [_jsxs("div", { className: "mb-4 flex items-start justify-between gap-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-lg font-semibold text-white", children: skill.category }), _jsx("p", { className: "mt-2 text-sm leading-7 text-slate-400", children: skill.description })] }), _jsx("span", { className: "rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary-300", children: skill.confidence })] }), _jsx("div", { className: "flex flex-wrap gap-2", children: skill.items.map((item) => (_jsx("span", { className: "rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300", children: item }, item))) })] }, skill.category))) })] }), _jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 lg:px-8", children: [_jsx(Header, { title: "Certifications", subtitle: "Professional development focused on practical security readiness.", icon: _jsx(TerminalSquare, { className: "h-6 w-6" }) }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 xl:grid-cols-4", children: certifications.map((cert) => (_jsxs(Card, { className: "p-6", hover: true, children: [_jsx("p", { className: "text-lg font-semibold text-white", children: cert.name }), _jsx("p", { className: "mt-2 text-sm text-slate-400", children: cert.status })] }, cert.name))) })] }), _jsxs("section", { id: "projects", className: "mx-auto max-w-7xl px-6 py-16 lg:px-8", children: [_jsx(Header, { title: "Selected Projects", subtitle: "Security work presented as structured case studies with clear outcomes.", icon: _jsx(Radar, { className: "h-6 w-6" }) }), _jsx("div", { className: "grid gap-6", children: projects.map((project) => (_jsx(Card, { className: "p-8", hover: true, children: _jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_0.8fr]", children: [_jsxs("div", { children: [_jsx("p", { className: "text-2xl font-semibold text-white", children: project.title }), _jsx("p", { className: "mt-3 text-slate-400", children: project.problem }), _jsx("p", { className: "mt-4 text-slate-300", children: project.objective })] }), _jsxs("div", { className: "rounded-3xl border border-white/10 bg-slate-900/70 p-5", children: [_jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-slate-400", children: "Tools" }), _jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: project.tools.map((tool) => _jsx("span", { className: "rounded-full bg-primary-500/10 px-3 py-1 text-sm text-primary-300", children: tool }, tool)) }), _jsxs("p", { className: "mt-5 text-sm leading-7 text-slate-400", children: ["Impact: ", project.impact] })] })] }) }, project.title))) })] }), _jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 lg:px-8", children: [_jsx(Header, { title: "Learning Journey", subtitle: "The current trajectory points toward stronger SOC, detection, and research-oriented security work.", icon: _jsx(BrainCircuit, { className: "h-6 w-6" }) }), _jsxs("div", { className: "grid gap-6 lg:grid-cols-[0.9fr_1.1fr]", children: [_jsxs(Card, { className: "p-8", children: [_jsx("p", { className: "text-lg font-semibold text-white", children: "Current growth focus" }), _jsx("div", { className: "mt-5 space-y-3", children: roadmap.map((item) => (_jsxs("div", { className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-300", children: [_jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-primary-400" }), item] }, item))) })] }), _jsxs(Card, { className: "p-8", children: [_jsx("p", { className: "text-lg font-semibold text-white", children: "Recruiter takeaway" }), _jsx("p", { className: "mt-4 text-slate-400 leading-8", children: "The profile reads as disciplined and research-oriented, with a clear interest in practical security operations and documentation quality. That combination supports hiring conversations in SOC, Blue Team, and security validation contexts." }), _jsxs("a", { href: "/resume.txt", download: true, className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-300 transition hover:text-primary-200", children: ["Download the full resume ", _jsx(ArrowRight, { className: "h-4 w-4" })] })] })] })] }), _jsx("section", { id: "contact", className: "mx-auto max-w-7xl px-6 py-16 lg:px-8", children: _jsx(Card, { className: "p-8", children: _jsxs("div", { className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-slate-400", children: "Contact" }), _jsx("h2", { className: "mt-2 text-3xl font-semibold text-white", children: "Open to SOC, blue-team, and hands-on security conversations." }), _jsx("p", { className: "mt-4 max-w-2xl text-slate-400", children: "The strongest fit is a team that values structured thinking, documentation quality, and practical security curiosity." })] }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsxs("a", { href: "/resume.txt", download: true, className: "inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 font-medium text-white transition hover:bg-primary-400", children: [_jsx(Download, { className: "h-4 w-4" }), " Download Resume"] }), _jsxs("a", { href: "#top", className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-200 transition hover:bg-white/10", children: [_jsx(Shield, { className: "h-4 w-4" }), " Back to Top"] })] })] }) }) })] })] }));
}
