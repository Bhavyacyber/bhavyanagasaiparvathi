import {
  Award,
  BookOpenCheck,
  BrainCircuit,
  ClipboardCheck,
  Code2,
  FileSearch,
  GraduationCap,
  Network,
  Radar,
  ShieldCheck,
  Target,
} from "lucide-react";

export const profile = {
  name: "Bhavya Parvathi",
  role: "Cybersecurity Professional",
  headline: "Blue team operations with offensive validation.",
  summary:
    "A cybersecurity-focused professional with a foundation in security operations, web/API security, vulnerability assessment, and professional reporting.",
  valueProposition:
    "Bhavya's brand is practical defensive readiness: alert-aware analysis, evidence-based validation, and clear risk communication that helps teams move from findings to remediation.",
  resumeUrl: "/resume.pdf",
};

export const resumeAnalysis = {
  strengths: [
    "Clear SOC direction with defensive operations, detection workflows, and alert triage as repeated themes.",
    "Balanced blue-team and offensive-validation positioning, useful for SOC, VAPT, and security analyst roles.",
    "Strong emphasis on structured documentation, reporting, remediation guidance, and risk communication.",
    "Projects map to realistic early-career security work: detection lab, API assessment, and VAPT reporting.",
  ],
  weaknesses: [
    "The resume does not include employers, education, dates, measurable outcomes, tools used in each project, or incident volumes.",
    "Certifications are listed without providers or completion dates, and one key SOC certification is still in progress.",
    "Technical skills are described as focus areas rather than concrete tools, platforms, languages, or frameworks.",
    "Project bullets are concise but need evidence, scope, artifacts, and defensible outcomes for recruiter confidence.",
  ],
  recruiterPerception: [
    "Google recruiter: sees analytical security interest and documentation discipline, but needs clearer computer science depth, scale, and engineering evidence.",
    "CrowdStrike SOC manager: sees good SOC intent and triage mindset, but will look for SIEM, EDR, telemetry, escalation, and incident handling examples.",
    "Cybersecurity hiring manager: sees a promising junior analyst profile if the portfolio explains methodology and avoids overclaiming production response experience.",
  ],
  atsOpportunities: [
    "Add exact tools used: SIEM, EDR, IDS, log sources, scanners, API testing tools, ticketing, reporting, scripting, and cloud platforms where accurate.",
    "Add dates, credential issuers, education, GitHub/project links, and artifact links.",
    "Use role keywords naturally: SOC Analyst, alert triage, incident response, detection engineering, vulnerability assessment, API security, remediation, risk reporting.",
    "Quantify only what can be proven: number of detections, rules, endpoints, findings, reports, or labs completed.",
  ],
};

export const brandPillars = [
  {
    icon: ShieldCheck,
    label: "Defensive Readiness",
    text: "SOC-oriented thinking, alert triage, detection workflows, and risk communication.",
  },
  {
    icon: Target,
    label: "Offensive Validation",
    text: "Web/API assessment and vulnerability validation used to strengthen remediation quality.",
  },
  {
    icon: ClipboardCheck,
    label: "Evidence-Based Reporting",
    text: "Structured documentation that turns technical findings into clear next actions.",
  },
];

export const experience = [
  {
    role: "Cybersecurity Practice Portfolio",
    organization: "Security Operations, Assessment, and Reporting",
    period: "Resume-derived project experience",
    bullets: [
      "Built a SOC-oriented body of work across threat detection, API security assessment, and VAPT reporting.",
      "Practiced defensive workflows supported by offensive validation and professional remediation guidance.",
      "Focused on analytical thinking, structured documentation, and practical defensive readiness.",
    ],
  },
];

export const projects = [
  {
    title: "Threat Detection Lab",
    objective: "Build a structured detection environment supported by evidence-based reporting.",
    environment:
      "Lab environment oriented around defensive operations, detection workflows, alert triage, and documentation.",
    methodology: [
      "Defined detection goals from likely threat behaviors.",
      "Observed security-relevant events and organized evidence for review.",
      "Documented triage logic, validation steps, and reporting outcomes.",
    ],
    tools: ["Detection workflow design", "Alert triage", "Evidence collection", "Professional reporting"],
    findings: [
      "Strong detection value depends on clear event context, not only alert generation.",
      "Triage notes should preserve evidence, assumptions, and recommended next steps.",
    ],
    concepts: ["SOC operations", "Alert triage", "Detection validation", "Threat awareness"],
    impact:
      "Demonstrates readiness to work in environments where analysts must explain why an alert matters and how teams should respond.",
    lessons:
      "A detection lab becomes recruiter-relevant when it shows repeatable workflow, evidence quality, and defensible reporting.",
  },
  {
    title: "API Security Assessment",
    objective: "Validate application-layer weaknesses and document remediation guidance.",
    environment:
      "Application security assessment context focused on API behavior, request handling, and risk documentation.",
    methodology: [
      "Mapped API-facing security assumptions and possible weakness categories.",
      "Validated weaknesses at the application layer without overstating production exposure.",
      "Translated observations into remediation-focused reporting.",
    ],
    tools: ["API security testing", "Web security assessment", "Remediation documentation", "Risk communication"],
    findings: [
      "API weaknesses need business-context explanation so engineering teams can prioritize remediation.",
      "Validation quality improves when every finding has evidence, reproduction notes, and a fix path.",
    ],
    concepts: ["API security", "Application-layer risk", "Vulnerability assessment", "Remediation guidance"],
    impact:
      "Positions Bhavya as a security analyst who can bridge testing, documentation, and developer-facing communication.",
    lessons:
      "The best security report is not a list of issues; it is a decision aid for reducing risk.",
  },
  {
    title: "VAPT Reporting Sprint",
    objective: "Translate findings into clear risk communication and professional reporting.",
    environment:
      "Vulnerability assessment and penetration-testing reporting workflow focused on clarity, prioritization, and remediation.",
    methodology: [
      "Organized findings by risk, evidence, affected area, and remediation guidance.",
      "Separated technical detail from executive-level risk communication.",
      "Refined report language for accuracy, traceability, and recruiter-readable artifacts.",
    ],
    tools: ["VAPT reporting", "Risk prioritization", "Security documentation", "Technical writing"],
    findings: [
      "Clear severity rationale is as important as the vulnerability description.",
      "Well-structured reports help teams validate, assign, and close remediation tasks faster.",
    ],
    concepts: ["Risk communication", "Vulnerability assessment", "Professional reporting", "Remediation tracking"],
    impact:
      "Strengthens the portfolio for analyst roles where documentation quality directly affects incident and remediation outcomes.",
    lessons:
      "Reporting is a security skill: it determines whether technical evidence becomes operational action.",
  },
];

export const skillGroups = [
  {
    title: "Security Operations",
    icon: Radar,
    skills: ["SOC-oriented thinking", "Alert triage", "Detection workflows", "Threat awareness"],
  },
  {
    title: "Assessment",
    icon: FileSearch,
    skills: ["Web security", "API security", "Vulnerability assessment", "Offensive validation"],
  },
  {
    title: "Communication",
    icon: BookOpenCheck,
    skills: ["Structured reporting", "Remediation guidance", "Risk communication", "Documentation"],
  },
  {
    title: "Engineering Mindset",
    icon: Code2,
    skills: ["Problem decomposition", "Workflow design", "Evidence handling", "Continuous learning"],
  },
];

export const certifications = [
  { name: "Certified SOC Analyst", status: "In Progress", icon: ShieldCheck },
  { name: "Web Security Fundamentals", status: "Completed", icon: Award },
  { name: "API Security Essentials", status: "Completed", icon: Network },
  { name: "Security Documentation & Reporting", status: "Completed", icon: ClipboardCheck },
];

export const researchThemes = [
  {
    title: "AI-Assisted SOC Workflows",
    text: "Exploring how structured prompts, analyst notes, and evidence summaries can support triage without replacing human judgment.",
  },
  {
    title: "Detection Quality",
    text: "Interested in reducing noisy alerts through clearer validation, repeatable documentation, and threat-informed context.",
  },
  {
    title: "Secure API Ecosystems",
    text: "Connects application-layer security testing with defensive readiness and remediation communication.",
  },
];

export const timeline = [
  {
    icon: GraduationCap,
    label: "Foundation",
    text: "Built core cybersecurity orientation around SOC thinking, web/API security, and vulnerability assessment.",
  },
  {
    icon: Radar,
    label: "Detection Practice",
    text: "Developed a threat detection lab and evidence-based reporting habits.",
  },
  {
    icon: FileSearch,
    label: "Assessment Practice",
    text: "Practiced API security validation and remediation-focused documentation.",
  },
  {
    icon: BrainCircuit,
    label: "Current Direction",
    text: "Continuing toward SOC analyst readiness, AI-aware workflows, and modern defensive operations.",
  },
];
