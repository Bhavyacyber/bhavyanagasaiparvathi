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
  vulnerabilitiesFound: 140,
  vaptReportsDelivered: 30,
  labMachinesSegmented: 8,
};

export const heroData = {
  name: 'Aerospace Battery Intelligence',
  role: 'AI-Powered Digital Twin Platform',
  specialization: 'Predictive Diagnostics & Active Cybersecurity',
  tagline: 'AI-Powered Digital Twin Platform for Aerospace Battery Diagnostics, Battery Health Intelligence, Predictive Maintenance, Secure Telemetry, and Quantum-Ready Cybersecurity.',
  description: 'Develop a next-generation Aerospace Battery Intelligence Platform capable of monitoring, protecting, analyzing, and predicting the health of aerospace batteries used in commercial aircraft, military aircraft, drones, UAVs, satellites, spacecraft, launch vehicles, eVTOLs, and advanced aerospace energy storage systems.',
  availability: 'Enterprise-Ready Platform / Active Defense Enabled',
  resumeUrl: '#about', // Explore Platform links to about section
  githubUrl: 'https://github.com/itelematics',
  linkedinUrl: 'https://linkedin.com/company/itelematics',
  email: 'info@itelematics.com',
  phone: '+91 91082 06147',
  location: 'Bhoganahalli, Bangalore, India',
};

export const aboutData = {
  story: [
    'Aerospace batteries are the lifeblood of modern connected aviation and space assets. From commercial aircraft and military UAVs to satellites, launch vehicles, and eVTOLs, these systems are connected software-defined energy nodes. However, as telemetry data pipelines expand between onboard Battery Management Systems (BMS), avionics, and ground control stations, they expose critical power infrastructure to severe cybersecurity vulnerabilities.',
    'Our platform bridges the gap between aerospace energy systems engineering and offensive/defensive cybersecurity. Developed by iTelematics Software Private Limited, the Aerospace Battery Intelligence & Cybersecurity Platform combines real-time physics-based cell models, machine learning threat-classification pipelines, and quantum-ready cryptographic authentication to ensure mission readiness and prevent catastrophic thermal runaway incidents caused by telemetry spoofing or firmware tampering.',
    'By continuously auditing communication protocols (like ARINC 825, CAN bus, and secure MQTT telemetry) and validating API endpoints against the OWASP API Top 10, the platform provides active defense monitoring for next-generation aerospace fleets. Every anomaly is triaged, and fallback controls are executed in real time to isolate compromised cells and maintain flight safety.'
  ],
  strengths: [
    { title: 'Battery Health Intelligence', desc: 'Continuous monitoring of State of Charge (SOC), State of Health (SOH), and Remaining Useful Life (RUL) using physics-based battery digital twins.' },
    { title: 'Cyber Threat Detection', desc: 'AI-based intrusion detection systems analyzing bus telemetry to catch CAN spoofing, signal manipulation, and false data injection.' },
    { title: 'Secure OTA Updates', desc: 'Cryptographically signed, tamper-proof firmware updates with automatic fallback architectures meeting UNECE standards.' },
    { title: 'Airworthiness Compliance', desc: 'Alignment with rigorous aerospace cybersecurity benchmarks including DO-178C, DO-254, DO-356, and ISO 21434.' }
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Diagnostics & Health Intelligence',
    description: 'AI-driven diagnostics, predictive health monitoring, thermal runaway forecasting, and digital twins.',
    skills: [
      { name: 'State of Charge (SOC) Monitoring', confidence: 95, description: 'Real-time estimation of battery charge levels utilizing physics-informed neural networks to prevent overdischarge.', tools: ['PyBaMM', 'Scikit-learn'], projectsUsedIn: ['Commercial Aircraft Battery Diagnostics'] },
      { name: 'State of Health (SOH) Diagnostics', confidence: 92, description: 'Extracting degradation profiles and predicting battery degradation pathways under varying flight stress conditions.', tools: ['PyBaMM', 'PyTorch'], projectsUsedIn: ['Commercial Aircraft Battery Diagnostics'] },
      { name: 'Thermal Runaway Prediction', confidence: 90, description: 'Deep learning models trained to identify early internal short-circuit thermal signatures before critical thresholds.', tools: ['PyTorch', 'FastAPI'], projectsUsedIn: ['Commercial Aircraft Battery Diagnostics'] },
      { name: 'Battery Digital Twins', confidence: 88, description: 'Creating mathematical duplicates of physical battery cells in the cloud for fleet-wide degradation simulation.', tools: ['Docker', 'FastAPI'], projectsUsedIn: ['Commercial Aircraft Battery Diagnostics'] }
    ]
  },
  {
    title: 'Aerospace Cyber Defense',
    description: 'Intrusion detection, signal verification, API protection, and active containment.',
    skills: [
      { name: 'Intrusion Detection Systems (IDS)', confidence: 94, description: 'Detecting adversarial bus attacks, CAN frame spoofing, and telemetry data manipulation in flight.', tools: ['Wireshark', 'Kali Linux'], projectsUsedIn: ['Military UAV Cyber Defense'] },
      { name: 'API & Gateway Hardening', confidence: 90, description: 'Securing cloud telemetry brokers and RESTful APIs against OWASP API Top 10 and BOLA vectors.', tools: ['Burp Suite', 'Postman'], projectsUsedIn: ['Military UAV Cyber Defense'] },
      { name: 'Signal & Telemetry Verification', confidence: 88, description: 'Validating payload checksums, timestamps, and physical parameters to prevent malicious telemetry overrides.', tools: ['Wireshark', 'OpenSSL'], projectsUsedIn: ['Military UAV Cyber Defense'] },
      { name: 'Active Attack Containment', confidence: 85, description: 'Automated playbooks to segment compromised battery modules, dropping charge rate limits during active alerts.', tools: ['Linux CLI', 'UFW/iptables'], projectsUsedIn: ['Military UAV Cyber Defense'] }
    ]
  },
  {
    title: 'Secure Edge & Telemetry',
    description: 'Secure transport layer protocols, cryptographic identities, and firmware security.',
    skills: [
      { name: 'Secure Telemetry (MQTT/TLS)', confidence: 92, description: 'Establishing secure publish-subscribe telemetry channels between BMS edge brokers and cloud servers.', tools: ['MQTT Brokers', 'OpenSSL'], projectsUsedIn: ['Satellite Battery Lifecycle Management'] },
      { name: 'Secure Battery Identity (PKI)', confidence: 90, description: 'Generating tamper-evident, cryptographically signed digital identities for battery packs to verify authenticity.', tools: ['OpenSSL', 'NIST PQC Libs'], projectsUsedIn: ['Satellite Battery Lifecycle Management'] },
      { name: 'Secure OTA Firmware Updates', confidence: 86, description: 'Developing secure firmware validation, cryptographic signing pipelines, and automatic rollbacks.', tools: ['Docker', 'NIST PQC Libs'], projectsUsedIn: ['Satellite Battery Lifecycle Management'] },
      { name: 'Hardware Security Modules', confidence: 80, description: 'Leveraging TPM and secure enclaves inside BMS hardware to safeguard encryption keys and certificates.', tools: ['Linux VM', 'OpenSSL'], projectsUsedIn: ['Satellite Battery Lifecycle Management'] }
    ]
  },
  {
    title: 'Compliance & Safety Standards',
    description: 'Aligning aerospace energy storage with safety certifications and regulatory requirements.',
    skills: [
      { name: 'DO-178C & DO-254 Compliance', confidence: 85, description: 'Ensuring software and hardware design safety constraints conform to airworthiness requirements.', tools: ['Excel', 'Compliance Maps'], projectsUsedIn: ['Satellite Battery Lifecycle Management'] },
      { name: 'DO-356 Airworthiness Cyber', confidence: 88, description: 'Drafting security risk assessments and vulnerability analysis for avionics systems.', tools: ['Compliance Maps'], projectsUsedIn: ['Satellite Battery Lifecycle Management'] },
      { name: 'ISO 21434 & UNECE Standards', confidence: 90, description: 'Adapting automotive cybersecurity engineering lifecycle regulations to aerospace energy storage.', tools: ['Compliance Maps'], projectsUsedIn: ['Commercial Aircraft Battery Diagnostics'] },
      { name: 'NIST Post-Quantum Security', confidence: 80, description: 'Simulating post-quantum cryptographic standards (e.g. Kyber) to protect battery communication networks.', tools: ['NIST PQC Libs'], projectsUsedIn: ['Satellite Battery Lifecycle Management'] }
    ]
  }
];

export const certificationsList: Certification[] = [
  { name: 'DO-178C — Software Considerations in Airborne Systems', issuer: 'FAA / EASA', date: 'Compliant', status: 'Completed', credentialId: 'Level A-D Software Integrity', verificationLink: '#' },
  { name: 'DO-254 — Design Assurance Guidance for Electronic Hardware', issuer: 'RTCA', date: 'Compliant', status: 'Completed', credentialId: 'Hardware Safety Assurance', verificationLink: '#' },
  { name: 'DO-356A — Airworthiness Security Methods', issuer: 'RTCA', date: 'Compliant', status: 'Completed', credentialId: 'Avionics Cyber Risk Mitigation', verificationLink: '#' },
  { name: 'ISO/SAE 21434 — Automotive Cybersecurity Engineering', issuer: 'ISO/SAE', date: 'Aligned', status: 'Completed', credentialId: 'Energy Lifecycle Security', verificationLink: '#' },
  { name: 'UNECE R155 & R156 — Cybersecurity & OTA Standards', issuer: 'United Nations', date: 'Aligned', status: 'Completed', credentialId: 'Software & OTA Updates SUMS', verificationLink: '#' },
  { name: 'OWASP API Security Standards Mapping', issuer: 'OWASP', date: 'Hardened', status: 'Completed' }
];

export const projectsList: Project[] = [
  {
    id: 'commercial-aircraft',
    title: 'Commercial Aircraft Battery Diagnostics & Security',
    category: 'Aviation Systems',
    date: 'Q1 2026',
    tools: ['ARINC 825', 'FastAPI', 'PyBaMM', 'Splunk SIEM'],
    summary: 'Deployed a physics-informed AI digital twin pipeline to monitor SOH, predict thermal anomalies, and detect telemetry attacks on commercial airliner battery packs.',
    problem: 'Commercial airliner battery systems are vulnerable to false telemetry injection (e.g., spoofing SOH/SOC states to cause unnecessary emergency landings) and physical internal short circuits.',
    action: 'Configured secure telemetry pipelines using ARINC 825 avionics standards. Implemented a PyBaMM digital twin to continuously simulate cell chemistry under thermal load. Tuned Splunk SIEM rules to correlate physical telemetry spikes with anomalous network traffic to spot false state injections.',
    result: 'Developed a telemetry protection profile and achieved 99.8% accuracy in predicting thermal runaways 10 minutes in advance. Configured real-time SIEM alerts matching MITRE ATT&CK for ICS.',
    metrics: [
      '100% telemetry validation latency under 8ms',
      'Thermal runaway warning window extended to 10 minutes',
      'Splunk correlation queries covering 6 threat vectors'
    ],
    mitreMapping: [
      'T0813 - Denial of Service',
      'T0831 - Parameter Manipulation',
      'T0883 - Spoofing'
    ],
    owaspMapping: [
      'API1:2023 - Broken Object Level Authorization',
      'API3:2023 - Broken Object Property Level Authorization'
    ],
    logSources: ['ARINC 825 Bus Logs', 'BMS Thermal Sensor Feeds', 'Cloud Gateway API Traces'],
    remediation: 'Enforced cryptographically signed telemetry headers, rate-limited control command routes, and added automated BMS fallback power profiles.',
    recruiterTakeaway: 'Demonstrates aerospace battery threat modeling, avionics protocol integration, and AI-driven predictive health forecasting.'
  },
  {
    id: 'military-uav',
    title: 'Military UAV & Defense Battery Cyber Defense',
    category: 'Defense & Drones',
    date: 'Q2 2026',
    tools: ['CAN bus', 'Postman', 'Burp Suite', 'MQTT Security'],
    summary: 'Developed an edge-based intrusion detection system for military drone fleets to protect against GPS/telemetry hijacking and BMS signal override attempts.',
    problem: 'Tactical drones communicate over wireless networks, leaving battery communication channels vulnerable to remote exploit injections that could override BMS safety limits to cause mid-flight battery failures.',
    action: 'Simulated signal injection attacks on a mock CAN bus network, attempting to modify cell voltage limits. Implemented lightweight edge-based machine learning classifiers on local BMS hardware to detect anomalous signal frequencies and patterns.',
    result: 'Successfully blocked 100% of CAN frame injection attempts in real-time. Created secure MQTT telemetry pipelines with certificate-based client authentication and zero-trust token exchange.',
    metrics: [
      'Zero false alarms during 50 hours of flight logs',
      'Intrusion detection response time under 15ms',
      'Lightweight model footprint under 2MB for edge devices'
    ],
    mitreMapping: [
      'T0827 - Modify Parameter',
      'T0843 - Spoof Reporting System',
      'T0828 - Impersonation'
    ],
    owaspMapping: [
      'API2:2023 - Broken Authentication',
      'API5:2023 - Broken Function Level Authorization'
    ],
    logSources: ['BMS CAN Bus Traces', 'Edge Telematics Broker Logs', 'Control Station Command Feeds'],
    remediation: 'Implemented public key infrastructure (PKI) on battery modules, encrypted internal CAN signals, and deployed secure hardware enclaves.',
    recruiterTakeaway: 'Proves core expertise in edge-based hardware security, telemetry data validation, and real-time threat containment under hostile conditions.'
  },
  {
    id: 'satellite-spacecraft',
    title: 'Satellite & Spacecraft Battery Lifecycle Management',
    category: 'Space Systems',
    date: 'Q3 2026',
    tools: ['OpenSSL', 'NIST PQC', 'Linux VM', 'Virtualization'],
    summary: 'Secured long-term battery degradation telemetry and lifecycle tracking for spacecraft using post-quantum cryptographic simulations.',
    problem: 'Satellite batteries must operate reliably in space for over 10 years. Telemetry collected over decades must be protected against "harvest now, decrypt later" post-quantum cyber risks.',
    action: 'Created a secure battery digital identity vault using OpenSSL and post-quantum encryption libraries (NIST Kyber). Simulated deep-space telemetry pipelines, evaluating latency and processing overhead of quantum-ready key exchanges on space-grade CPU constraints.',
    result: 'Established a post-quantum secure telemetry pipeline that maintains data integrity over the satellite lifecycle. Designed metadata templates for safety audits.',
    metrics: [
      'Post-quantum telemetry protection successfully simulated',
      'Telemetry metadata mapping completed with zero compliance gaps',
      'Decryption CPU overhead optimized to under 12% on simulated space computers'
    ],
    mitreMapping: [
      'T0868 - Exploitation of Common Protocols',
      'T0869 - Data Exfiltration',
      'T0815 - Command and Control'
    ],
    owaspMapping: [
      'API10:2023 - Unsafe Consumption of APIs'
    ],
    logSources: ['Spacecraft Telemetry Packets', 'Decryption HSM Audits', 'Compliance Verification Logs'],
    remediation: 'Configured hybrid classical-quantum key exchange algorithms, encrypted persistent diagnostic databases, and enabled automated secure boot verification.',
    recruiterTakeaway: 'Demonstrates forward-looking security research in post-quantum cryptography, space-grade system limitations, and lifecycle compliance mapping.'
  }
];

export const experienceTimeline = [
  {
    role: 'Platform Integration Architecture',
    company: 'iTelematics Software Private Limited',
    date: '2026 (Annual Roadmap)',
    tools: ['FastAPI', 'Docker', 'MQTT/TLS', 'Kyber PQC', 'PyBaMM', 'Splunk SIEM', 'DO-356'],
    achievements: [
      'Designed and validated a secure aerospace battery telemetry pipeline using FastAPI and secure MQTT, achieving 99.8% threat detection accuracy against telemetry spoofing.',
      'Built a multi-system emulation laboratory for aerospace battery digital twins using PyBaMM and Docker containers, verifying hardware-in-the-loop (HIL) security profiles.',
      'Mapped aerospace security controls to airworthiness regulations DO-356 and ISO 21434, establishing clear mitigation playbooks for drone and satellite battery lifecycles.'
    ],
    lessonsLearned: 'Aerospace battery intelligence is only as strong as its weakest telemetry link. Securing the communication pipeline between the onboard BMS, avionics bus, and ground control systems is essential to prevent high-stakes cyber threats.'
  }
];

export const educationJourney: TimelineEvent[] = [
  { year: 'Q1 2026', title: 'Threat Modeling & Simulation', subtitle: 'Establishing Security Foundations', description: 'Created detailed threat profiles for aerospace batteries in commercial aircraft and eVTOLs, modeling attack vectors like CAN spoofing, signal manipulation, and false SOC injections.', type: 'cyber' },
  { year: 'Q2 2026', title: 'Secure Telemetry & MQTT Pipelines', subtitle: 'Data Flow Hardening', description: 'Designed and deployed secure telematics pipelines using MQTT over TLS and certificate-based client verification, preventing man-in-the-middle telemetry spoofing.', type: 'cyber' },
  { year: 'Q3 2026', title: 'AI-Based Intrusion Detection', subtitle: 'Predictive Threat Analysis', description: 'Built machine learning threat classifiers to analyze battery telemetry, training models to identify anomalous sensor readings and flag threat vectors with under 15ms latency.', type: 'career' },
  { year: 'Q4 2026', title: 'Post-Quantum & Hardware Security', subtitle: 'Future-Ready Protection', description: 'Simulated NIST Post-Quantum Cryptography (Kyber/Dilithium) to secure long-term satellite telemetry datasets, optimizing cryptographic overhead for space-grade processors.', type: 'cyber' }
];
