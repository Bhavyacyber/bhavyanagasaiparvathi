'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Eye, Search, HeartPulse, Hammer, Shield } from 'lucide-react';

const workflowTabs = [
  { id: 'threat-flow', label: 'Attack-to-Defense Pipeline' },
  { id: 'soc-triage', label: 'SOC SIEM Triaging Pipeline' },
  { id: 'dpdpa-compliance', label: 'DPDPA 2023 Compliance Pipeline' },
];

const threatFlowStages = [
  {
    step: '01',
    name: 'Reconnaissance',
    attack: 'Nmap footprinting & subdomain scans to identify open ports.',
    defense: 'Firewall log monitoring & traffic inspection via Wireshark.',
    remediation: 'Disable unused protocols, segment subnets, and configure iptables rules.',
    icon: Eye,
  },
  {
    step: '02',
    name: 'Access Bypass',
    attack: 'SQLi or Authentication Bypass payloads modified in Burp Suite.',
    defense: 'Application server access logs triaged for atypical query patterns.',
    remediation: 'Implement parameterized SQL queries & strong input validation controls.',
    icon: ShieldAlert,
  },
  {
    step: '03',
    name: 'Privilege Escalation',
    attack: 'IDOR exploitation via object reference (e.g. basketId) manipulation.',
    defense: 'API gateway logs checked for token-to-user identifier mismatch.',
    remediation: 'Implement strong server-side authorization validations on all REST routes.',
    icon: Search,
  },
  {
    step: '04',
    name: 'Data Exfiltration',
    attack: 'Exploiting API BOLA endpoints to fetch bulk user records.',
    defense: 'Volume anomaly alert thresholds triggered in SIEM environment.',
    remediation: 'Implement API gateway rate-limiting, egress controls, and telemetry alerts.',
    icon: HeartPulse,
  },
];

const socTriageSteps = [
  {
    title: '1. Anomalous Telemetry',
    desc: 'Anomalous network packets (e.g., DNS exfiltration spikes) are captured by sensors.',
    logs: 'DNS Server logs / Wireshark telemetry',
  },
  {
    title: '2. SIEM Log Ingestion',
    desc: 'Logs from firewalls, servers, and routers are forwarded and indexed inside Splunk.',
    logs: 'Splunk search indexes & indexers',
  },
  {
    title: '3. Correlation Alert Trigger',
    desc: 'SIEM rules correlate logs to detect exploitation attempts (e.g., matching a high-severity REST path scan).',
    logs: 'Splunk Correlation Searches / Alert rules',
  },
  {
    title: '4. Analyst Triage & Escalation',
    desc: 'SOC Analyst analyzes packet payloads, queries VirusTotal IOCs, and generates a formal VAPT escalation report.',
    logs: 'VAPT Remediation Guide / Incident playbook',
  },
];

const dpdpaPrinciples = [
  {
    rule: 'Data Minimization',
    desc: 'Processing only what is required for consent fulfillment.',
    technical: 'Restricting sensitive endpoints (like Juice Shop scoreboard) to certified users.',
  },
  {
    rule: 'Security Safeguards',
    desc: 'Data Fiduciaries must implement safety controls to prevent data leaks.',
    technical: 'Encrypting JWT tokens, parameterizing database queries, and setting SameSite cookies.',
  },
  {
    rule: 'Compliance Mapping',
    desc: 'Auditing data flows to ensure user privacy is safeguarded.',
    technical: 'Logging data read/write trails, documenting BOLA vectors, and drafting privacy reports.',
  },
];

export default function Expertise() {
  const [activeTab, setActiveTab] = useState('threat-flow');
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <section id="expertise" className="relative py-24 bg-[#060a13] border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest text-glow">
            Security Blueprint
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-sans tracking-tight">
            Threat Lifecycles & Operational Workflows
          </h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {workflowTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-lg border font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(0,240,255,0.08)]'
                  : 'bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {activeTab === 'threat-flow' && (
              <motion.div
                key="threat-flow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {threatFlowStages.map((stage, idx) => {
                  const StageIcon = stage.icon;
                  const isHovered = hoveredStage === idx;
                  return (
                    <div
                      key={idx}
                      className="relative p-6 rounded-xl glass-panel border border-slate-900 hover:border-slate-850 transition-all duration-300"
                      onMouseEnter={() => setHoveredStage(idx)}
                      onMouseLeave={() => setHoveredStage(null)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs text-accent/75">{stage.step}</span>
                        <div className="p-2 rounded bg-slate-950 border border-slate-900 text-accent">
                          <StageIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="text-base font-bold text-white font-sans">{stage.name}</h4>

                      <div className="mt-4 space-y-3 text-xs leading-relaxed">
                        <div className="p-2.5 rounded bg-slate-950/50 border border-slate-900">
                          <span className="font-mono text-[9px] text-accent-red uppercase tracking-wider block mb-0.5">
                            Attack (Offense)
                          </span>
                          <p className="text-slate-400">{stage.attack}</p>
                        </div>
                        <div className="p-2.5 rounded bg-slate-950/50 border border-slate-900">
                          <span className="font-mono text-[9px] text-accent-green uppercase tracking-wider block mb-0.5">
                            Detect (Defense)
                          </span>
                          <p className="text-slate-400">{stage.defense}</p>
                        </div>
                        <div className="p-2.5 rounded bg-slate-950/50 border border-slate-900">
                          <span className="font-mono text-[9px] text-accent uppercase tracking-wider block mb-0.5">
                            Remediate (Mitigate)
                          </span>
                          <p className="text-slate-400">{stage.remediation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 'soc-triage' && (
              <motion.div
                key="soc-triage"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 max-w-4xl mx-auto"
              >
                {socTriageSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 text-accent text-xs font-mono font-bold flex items-center justify-center">
                        {idx + 1}
                      </div>
                      {idx < socTriageSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-slate-850 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 p-5 rounded-xl glass-panel border border-slate-900">
                      <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-450 mt-1 font-sans leading-relaxed">
                        {step.desc}
                      </p>
                      <div className="inline-block mt-3 px-2.5 py-1 rounded bg-slate-950 border border-slate-900 font-mono text-[10px] text-slate-500">
                        <span className="text-accent text-[9px] uppercase tracking-wider mr-1">Log Telemetry:</span>
                        {step.logs}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'dpdpa-compliance' && (
              <motion.div
                key="dpdpa-compliance"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              >
                {dpdpaPrinciples.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl glass-panel border border-slate-900 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded bg-slate-950 border border-slate-900 flex items-center justify-center text-accent mb-4">
                        <Shield className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="text-base font-bold text-white font-mono tracking-wide">
                        {item.rule}
                      </h4>
                      <p className="text-xs text-slate-450 mt-2 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-900/60 font-mono text-[11px] text-slate-500">
                      <span className="text-accent-green uppercase text-[9px] tracking-wider block mb-1">
                        Technical Safeguard
                      </span>
                      {item.technical}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
