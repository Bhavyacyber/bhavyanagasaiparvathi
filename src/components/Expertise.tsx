'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Eye, Search, HeartPulse, Hammer, Shield } from 'lucide-react';

const workflowTabs = [
  { id: 'threat-flow', label: 'Battery Threat Pipeline' },
  { id: 'soc-triage', label: 'Digital Twin Threat Triaging' },
  { id: 'dpdpa-compliance', label: 'Compliance & Safety Standards' },
];

const threatFlowStages = [
  {
    step: '01',
    name: 'Telemetry Tampering',
    attack: 'Manipulating battery temperature sensor feedback via signal spoofing.',
    defense: 'Digital twin runs real-time electrochemical simulations to detect sensor mismatch.',
    remediation: 'Flag anomaly, isolate compromised sensor channel, and switch to twin virtual sensors.',
    icon: Eye,
  },
  {
    step: '02',
    name: 'BMS Bus Spoofing',
    attack: 'Injecting false State of Charge (SOC) or voltage limits over CAN/ARINC 825 bus.',
    defense: 'Bus intrusion detection system monitors signal frequencies and identifies spoofed IDs.',
    remediation: 'Apply message authentication codes (MAC), filter anomalous frames, and reset the bus.',
    icon: ShieldAlert,
  },
  {
    step: '03',
    name: 'OTA Update Hijack',
    attack: 'Deploying malicious BMS firmware modifications via fake Over-The-Air update channels.',
    defense: 'Secure boot validation and cryptographic certificate verification verify firmware authenticity.',
    remediation: 'Reject signature mismatch, log threat event, and roll back to golden image.',
    icon: Search,
  },
  {
    step: '04',
    name: 'API & Command Injection',
    attack: 'Flooding the ground control API with invalid battery diagnostics commands to disable telemetry.',
    defense: 'API Gateway rate-limiting and behavior anomaly detection flag anomalous request bursts.',
    remediation: 'Drop offending IPs, enable active request caching, and prompt secondary MFA verification.',
    icon: HeartPulse,
  },
];

const socTriageSteps = [
  {
    title: '1. Telemetry Ingestion & Encryption',
    desc: 'BMS collects voltage, current, and temperature, transmitting them via secure MQTT over TLS.',
    logs: 'Secure Edge Telemetry Packets',
  },
  {
    title: '2. Digital Twin Synchronization',
    desc: 'Real-time physics-informed AI models update battery state and predict SOH/RUL.',
    logs: 'Digital Twin Execution Records',
  },
  {
    title: '3. Intrusion Detection Check',
    desc: 'Anomalous signals or physical parameter deviations trigger the threat classifier engine.',
    logs: 'AI IDS Alert Log & Threat Index',
  },
  {
    title: '4. Fail-Safe Activation',
    desc: 'Ground control initiates automated safety checklists, reducing battery charge limits to prevent thermal runaways.',
    logs: 'Mission Control Fail-Safe Audits',
  },
];

const dpdpaPrinciples = [
  {
    rule: 'DO-356 Airworthiness Cyber',
    desc: 'Ensuring the aircraft\'s energy storage systems are resilient to external threat actors.',
    technical: 'Implementing strict network segmentation between BMS network, avionics, and remote telemetry.',
  },
  {
    rule: 'ISO 21434 Security Lifecycle',
    desc: 'Managing cybersecurity risk across the design, production, and operation of aerospace batteries.',
    technical: 'Conducting continuous threat analysis and risk assessment (TARA) throughout the system lifetime.',
  },
  {
    rule: 'UNECE R156 SUMS Standard',
    desc: 'Securing over-the-air firmware updates and updates management systems.',
    technical: 'Enforcing dual-signature verification, hash validation, and automated firmware rollbacks on failure.',
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
