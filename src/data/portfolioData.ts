export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  tools: string[];
  summary: string;
  problem: string;
  action: string;
  result: string;
  metrics: string[];
  mitreMapping: string[];
  owaspMapping: string[];
  logSources: string[];
  remediation: string;
  recruiterTakeaway: string;
  githubUrl?: string;
  reportUrl?: string;
}

export interface Skill {
  name: string;
  confidence: number; // 0-100
  description: string;
  tools: string[];
  projectsUsedIn: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress';
  credentialId?: string;
  verificationLink?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'academic' | 'career' | 'cyber';
}

export interface Stats {
  certificationsCount: number;
  vulnerabilitiesFound: number;
  vaptReportsDelivered: number;
  labMachinesSegmented: number;
}

export const portfolioStats: Stats = {
  certificationsCount: 5,
  vulnerabilitiesFound: 14,
  vaptReportsDelivered: 3,
  labMachinesSegmented: 3,
};

export const heroData = {
  name: 'Bhavya Parvathi',
  role: 'Cybersecurity Professional',
  specialization: 'SOC Operations & Offensive Validation',
  tagline: 'Analyzing systems. Triaging anomalies. Defending digital infrastructure.',
  description: 'Dual-spectrum cybersecurity analyst bridging blue team threat detection and offensive validation. Transitioning from an advanced engineering background (M.Tech), I leverage a structured systems-thinking mindset to dismantle attack vectors, analyze log telemetry, and design resilient network segmentation.',
  availability: 'Available for SOC Analyst / Blue Team Opportunities',
  resumeUrl: '#', // Linked to public/resume.pdf or a local placeholder
  githubUrl: 'https://github.com/bhavyaparvathi', // Custom professional link
  linkedinUrl: 'https://linkedin.com/in/bhavya-parvathi',
  email: 'bhavyanagasai@gmail.com',
  phone: '+91 9949589677',
  location: 'Andhra Pradesh, India',
};

export const aboutData = {
  story: [
    'My journey into cybersecurity is rooted in structural engineering. In engineering, I designed complex structures to withstand severe forces by modeling stress points, identifying systemic vulnerabilities, and implementing robust defenses. I realized that digital infrastructure operates under the same fundamental principles: to secure a system, you must understand its architecture, predict vectors of compromise, and construct resilient defenses.',
    'This systems-thinking mindset drove my transition into cybersecurity. Over the last 12 months, I have aggressively built hands-on expertise across SOC operations, traffic analysis, and application penetration testing. I hold industry credentials including the ISC² Certified in Cybersecurity (CC), Google Cybersecurity, and Wallarm API Security certificates.',
    'I specialize in bridging the gap between offensive testing and defensive operations. When I identify a vulnerability, my first instinct is to answer: "How will this appear in the logs?" and "What custom SIEM rule can we write to detect this in real-time?"',
  ],
  strengths: [
    { title: 'Systems Analysis', desc: 'Ability to dissect complex network and application architectures, tracing traffic from packet-level logs to application-level REST queries.' },
    { title: 'Technical Writing', desc: 'Producing detailed, executive-ready VAPT reports and compliance mapping documents (such as DPDPA 2023 privacy mapping).' },
    { title: 'Log & SIEM Triaging', desc: 'Experience mapping attack paths (OWASP Top 10, API Top 10) to log sources to engineer actionable detection opportunities.' },
    { title: 'Lab Architecture', desc: 'Hands-on experience configuring secure, segmented VM environments using Ubuntu, Kali Linux, iptables, and UFW firewall rules.' }
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'SOC & Blue Team Operations',
    description: 'Threat hunting, log analysis, incident response, and SIEM management.',
    skills: [
      { name: 'SIEM Operations (Splunk)', confidence: 85, description: 'Querying indexes, triaging alerts, and mapping logs to suspicious activity.', tools: ['Splunk'], projectsUsedIn: ['API & Web Application Pentesting'] },
      { name: 'Traffic & Packet Analysis', confidence: 90, description: 'Capturing live DNS, ICMP, and TCP packets to identify command-and-control channels or anomalous protocols.', tools: ['Wireshark'], projectsUsedIn: ['Redynox Internship'] },
      { name: 'Phishing Triaging', confidence: 90, description: 'Parsing email headers, verifying SPF/DKIM/DMARC alignments, extracting IOCs, and drafting blocking policies.', tools: ['MXToolbox', 'VirusTotal'], projectsUsedIn: ['Network Recon & Phishing Investigation'] },
      { name: 'Threat Detection & Incident Response', confidence: 80, description: 'Identifying indicators of compromise (IOCs) and mapping alerts to incident response playbooks.', tools: ['VirusTotal', 'AlienVault OTX'], projectsUsedIn: ['Redynox Internship'] }
    ]
  },
  {
    title: 'Offensive Security & Validation',
    description: 'Finding flaws, exploiting APIs, and validating web vulnerabilities.',
    skills: [
      { name: 'Web Application Pentesting', confidence: 88, description: 'Conducting automated and manual assessments of OWASP Top 10 flaws.', tools: ['Burp Suite', 'OWASP ZAP', 'WebGoat'], projectsUsedIn: ['Redynox Internship', 'OWASP Juice Shop Vulnerability Assessment'] },
      { name: 'API Security Testing', confidence: 85, description: 'Intercepting RESTful requests, testing authorization bypasses, and validating JWT signatures.', tools: ['Postman', 'Burp Suite', 'Wallarm methodology'], projectsUsedIn: ['API & Web Application Pentesting'] },
      { name: 'Vulnerability Scanning', confidence: 85, description: 'Configuring credentialed and non-credentialed vulnerability scans and rating threat severities via CVSS.', tools: ['OpenVAS', 'Nmap NSE'], projectsUsedIn: ['Network Recon & Phishing Investigation'] }
    ]
  },
  {
    title: 'Network & System Engineering',
    description: 'Securing host configurations, segmenting subnets, and scripting.',
    skills: [
      { name: 'Firewall & Network Rules', confidence: 85, description: 'Configuring UFW, iptables policies, and setting up network address translation (NAT).', tools: ['iptables', 'UFW'], projectsUsedIn: ['Redynox Internship'] },
      { name: 'Virtualization & Linux', confidence: 88, description: 'Spinning up multi-VM environments with Ubuntu and Kali Linux, optimizing router routing policies.', tools: ['VirtualBox', 'Ubuntu Server', 'Kali Linux'], projectsUsedIn: ['Redynox Internship'] },
      { name: 'Security Scripting', confidence: 70, description: 'Writing automated scripts to parse log files or query threat intelligence APIs.', tools: ['Bash', 'Python (basic)'], projectsUsedIn: ['Network Recon & Phishing Investigation'] }
    ]
  },
  {
    title: 'GRC & Security Frameworks',
    description: 'Aligning operations with compliance benchmarks and privacy regulations.',
    skills: [
      { name: 'Privacy Compliance (DPDPA)', confidence: 80, description: 'Mapping data flow diagrams and operational controls to Indian DPDPA 2023 privacy articles.', tools: ['Excel', 'Compliance Maps'], projectsUsedIn: ['Independent Research'] },
      { name: 'Security Mapping', confidence: 85, description: 'Mapping technical exploits to MITRE ATT&CK techniques and OWASP standards.', tools: ['MITRE ATT&CK Navigator'], projectsUsedIn: ['API & Web Application Pentesting', 'Redynox Internship'] }
    ]
  }
];

export const certificationsList: Certification[] = [
  { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC²', date: 'Dec 2025', status: 'Completed', credentialId: 'Verified CC Badge', verificationLink: 'https://www.credly.com/' },
  { name: 'API Security Certified Associate', issuer: 'Wallarm', date: 'Mar 2026', status: 'Completed', credentialId: 'Wallarm-API-Sec', verificationLink: 'https://www.wallarm.com/' },
  { name: 'CAISR – Adversarial Recon & Red Team Methodology', issuer: 'Red Team Leaders', date: 'Mar 2026', status: 'Completed', credentialId: 'CAISR-2026', verificationLink: '#' },
  { name: 'DPDPA 2023 Certification', issuer: 'DPDPA Certification Body', date: 'Feb 2026', status: 'Completed', credentialId: 'DPDPA-Cert', verificationLink: '#' },
  { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google / Coursera', date: 'Sep 2025', status: 'Completed', credentialId: 'Google-Cyber-Coursera', verificationLink: 'https://coursera.org/' },
  { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', date: 'Expected 2026', status: 'In Progress' }
];

export const projectsList: Project[] = [
  {
    id: 'api-pentesting',
    title: 'API & Web Application Penetration Testing',
    category: 'VAPT & SIEM Integration',
    date: 'Mar 2026',
    tools: ['Burp Suite', 'Postman', 'OWASP ZAP', 'Splunk'],
    summary: 'Performed structured black-box assessments on APIs, successfully identifying high-severity vulnerabilities and mapping their footprints to Splunk SIEM alert conditions.',
    problem: 'REST APIs are target-rich environments, often vulnerable to BOLA (Broken Object Level Authorization) and injection points. However, developers lack the logging templates, and security teams lack the alert mechanisms to detect exploitation attempts.',
    action: 'Intercepted and analyzed API traffic using Burp Suite and Postman. Bypassed user authentication, manipulated object references to retrieve sensitive records (BOLA), and simulated injection payloads. Moving from offensive to defensive engineering, I examined raw web server and firewall logs corresponding to these exploits, configuring customized alert signatures and mapping log fields inside a SIEM environment.',
    result: 'Identified 5 critical vulnerabilities (2 rated High severity). Designed a dual-perspective VAPT report detailing the exploits alongside custom Splunk search queries to surface BOLA and improper authentication logs.',
    metrics: [
      '5 Vulnerabilities Documented (2 High, 3 Medium)',
      '100% API endpoints mapped using Postman collections',
      '3 Splunk alert queries constructed for real-time threat detection'
    ],
    mitreMapping: [
      'T1190 - Exploit Public-Facing Application',
      'T1595.002 - Active Vulnerability Scanning',
      'T1078 - Valid Accounts'
    ],
    owaspMapping: [
      'API1:2023 - Broken Object Level Authorization',
      'API2:2023 - Broken Authentication',
      'API3:2023 - Broken Object Level Authorization (BOLA)'
    ],
    logSources: ['Apache Access Logs', 'Web Application Firewall (WAF) Logs', 'API Gateway Request Telemetry'],
    remediation: 'Implemented server-side validation checks matching requesting user session IDs to target resource owners. Hardened API gateway rate-limiting, and enabled JWT validation on all private endpoints.',
    recruiterTakeaway: 'Demonstrates deep API threat modeling combined with the blue-team ability to turn an exploit concept into a working SIEM detection rule.'
  },
  {
    id: 'juice-shop',
    title: 'OWASP Juice Shop Vulnerability Assessment',
    category: 'Application Security',
    date: 'Feb 2026',
    tools: ['Burp Suite', 'Kali Linux', 'Firefox DevTools'],
    summary: 'Conducted a comprehensive application assessment on OWASP Juice Shop, mapping findings to OWASP Top 10 and compiling a client-ready VAPT report.',
    problem: 'Applications frequently suffer from cascading authorization bugs and injection vulnerabilities that expose internal interfaces (like dashboards) to unauthenticated users.',
    action: 'Exploited and documented five vulnerabilities. Key vectors included an Authentication Bypass using Burp Suite payload modifications, an IDOR exploit via basket ID manipulation (causing horizontal privilege escalation), sensitive endpoint discovery (/score-board), and DOM/Filter Bypass Cross-Site Scripting (XSS). Every exploit was logged step-by-step to compile a proof-of-concept repository.',
    result: 'Produced a client-ready VAPT report detailing the findings, impact metrics (cookie theft, administrative dashboard takeover, session hijacking), and remediation strategies mapped directly to OWASP standards.',
    metrics: [
      'Authentication Bypass achieved with SQL injection payload',
      'IDOR vulnerability enabled access to arbitrary users carts',
      'Exposed scoreboard dashboard secured via authentication checks'
    ],
    mitreMapping: [
      'T1190 - Exploit Public-Facing Application',
      'T1539 - Steal Web Session Cookie',
      'T1059.007 - JavaScript Execution'
    ],
    owaspMapping: [
      'A01:2021 - Broken Access Control',
      'A03:2021 - Injection',
      'A07:2021 - Identification and Authentication Failures'
    ],
    logSources: ['Application access logs', 'Console JavaScript errors', 'Nginx web logs'],
    remediation: 'Utilized parameterized database queries to eliminate SQL injection, implemented strong server-side access controls for basket IDs, and added CSP (Content Security Policy) headers to mitigate XSS.',
    recruiterTakeaway: 'Proves high-quality reporting capabilities and deep knowledge of how attackers exploit logical flaws in modern application frontends.'
  },
  {
    id: 'phishing-recon',
    title: 'Network Reconnaissance & Phishing Email Triage',
    category: 'Blue Team Operations',
    date: 'Dec 2025',
    tools: ['Nmap (NSE)', 'Recon-ng', 'OpenVAS', 'VirusTotal', 'MXToolbox'],
    summary: 'Analyzed external assets using active/passive footprinting and investigated phishing emails to isolate indicators of compromise (IOCs).',
    problem: 'Organizations suffer from blind spots due to exposed external ports and malicious spoofed emails bypass basic filtering systems to target personnel.',
    action: 'Mapped 12 open services and 3 exposed ports using Nmap NSE and OpenVAS. On the defensive side, analyzed over 10 phishing emails to inspect SPF/DKIM failures, parsing headers to identify malicious source relays and spoofed domains. Isolated malware hashes and phishing URLs, testing them in VirusTotal.',
    result: 'Discovered 4 actionable external vulnerabilities and mapped mitigation steps. Authored blocking policies for mail gateways based on DKIM failures and malicious domains found.',
    metrics: [
      '12 Open Services analyzed for vulnerability mapping',
      '10+ Malicious phishing email structures reverse-engineered',
      '4 Security vulnerabilities rated by CVSS and patched'
    ],
    mitreMapping: [
      'T1595.001 - Active Scanning: IP Blocks',
      'T1566.001 - Phishing: Spearphishing Attachment',
      'T1589 - Gather Victim Identity Information'
    ],
    owaspMapping: [
      'Not applicable (Infrastructure/Network & Email Security Focus)'
    ],
    logSources: ['Mail Server Relay Logs', 'Nmap scan output scripts', 'SMTP server headers'],
    remediation: 'Hardened mail gateway rules to drop emails showing DKIM/SPF alignment failure. Disabled legacy protocols on exposed external ports, and established strict firewall egress rules.',
    recruiterTakeaway: 'Highlights core SOC analyst competencies: mail header parsing, threat intelligence query, vulnerability scanner operation, and patch prioritizing.'
  }
];

export const experienceTimeline = [
  {
    role: 'Cybersecurity Intern',
    company: 'Redynox',
    date: '2025 (1 Month)',
    tools: ['Burp Suite', 'OWASP ZAP', 'WebGoat', 'Wireshark', 'UFW / iptables', 'VirtualBox', 'Kali Linux'],
    achievements: [
      'Monitored and triaged web application security findings on OWASP WebGoat, validating SQLi, Reflected/Stored XSS, and CSRF vulnerabilities mapped to OWASP Top 10 with full PoC reports.',
      'Configured and maintained a multi-VM VirtualBox laboratory environment consisting of Ubuntu routing and Kali Linux clients; established IP forwarding, NAT, and UFW firewall rules to isolate subnets.',
      'Analyzed live network traffic (DNS, ICMP, TCP) using Wireshark to locate command patterns; escalated findings with detailed mitigation suggestions including input sanitization and SameSite cookies.'
    ],
    lessonsLearned: 'Learned the importance of structured reports. A vulnerability is only as critical as your ability to communicate it to developer and management teams, and map it to a working mitigation strategy.'
  }
];

export const educationJourney: TimelineEvent[] = [
  { year: '2018 — 2022', title: 'B.Tech — Civil Engineering', subtitle: 'Aditya Engineering College (A), Kakinada', description: 'Graduated with a CGPA of 8.21. Focused on structural design, physics, and advanced mathematical logic. Built a strong foundation in systematic systems analysis.', type: 'academic' },
  { year: '2022 — 2024', title: 'M.Tech — Structural Engineering', subtitle: 'Aditya Engineering College (A), Kakinada', description: 'Graduated with a CGPA of 8.67. Specialized in modeling structural stress factors, predicting failure tolerances, and engineering solutions to withstand environmental forces.', type: 'academic' },
  { year: '2025', title: 'Career Transition & Google Cybersecurity Certificate', subtitle: 'Self-Driven Intensive Training', description: 'Pivoted to digital systems. Mastered Linux systems administration, TCP/IP networking, threat management, and fundamental Python scripting.', type: 'cyber' },
  { year: '2025 (Dec)', title: 'Certified in Cybersecurity (CC) & First Research Project', subtitle: 'ISC² & Independent Studies', description: 'Earned the ISC² CC credential. Completed independent research in network footprinting, Nmap NSE, and email phishing investigation.', type: 'cyber' },
  { year: '2025', title: 'Cybersecurity Internship', subtitle: 'Redynox', description: 'Applied classroom concepts to practical tasks. Triaged web app findings, built segmented VM networks, and captured traffic anomalies.', type: 'career' },
  { year: '2026 (Feb-Mar)', title: 'Advanced Specializations', subtitle: 'Wallarm & DPDPA Certification Bodies', description: 'Earned the Wallarm API Security Associate certification and DPDPA 2023 Privacy mapping credentials. Published case studies on OWASP Juice Shop and REST API / SIEM integrations.', type: 'cyber' }
];
