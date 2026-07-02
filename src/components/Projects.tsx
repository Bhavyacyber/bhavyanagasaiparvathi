'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, FileText, FileCheck, Layers } from 'lucide-react';
import { projectsList, Project } from '../data/portfolioData';

// Custom inline SVG icon for Github
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Projects() {
  const [selectedProjIndex, setSelectedProjIndex] = useState(0);
  const activeProject = projectsList[selectedProjIndex];

  return (
    <section id="projects" className="relative py-24 bg-[#05080e] border-b border-slate-900">
      {/* Background Cyber Effect */}
      <div className="absolute inset-0 bg-grid-cyber opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest text-glow">
            Deployments & Use Cases
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-sans tracking-tight">
            Mission-Critical Security Dossiers
          </h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Tabs Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {projectsList.map((proj, idx) => {
            const isActive = selectedProjIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjIndex(idx)}
                className={`p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-accent/5 border-accent shadow-[0_0_20px_rgba(0,240,255,0.06)]'
                    : 'bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-accent' : 'text-slate-500'}`}>
                    {proj.category}
                  </span>
                  <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wide mt-1.5 leading-snug">
                    {proj.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between mt-5 font-mono text-[10px] text-slate-550 border-t border-slate-900/60 pt-3 w-full">
                  <span>{proj.date}</span>
                  <span className={`${isActive ? 'text-accent font-semibold' : 'text-slate-600'}`}>
                    View Case Study →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dossier Viewer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-950/40 border border-slate-900 rounded-2xl p-6 sm:p-8"
          >
            
            {/* Left Column: Dossier Metadata */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  Certification Status
                </span>
                <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-850 text-[10px] font-mono text-accent-green">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>DO-356 / ISO 21434 Compliant</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  System Protocols
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {activeProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-slate-350 bg-slate-900 border border-slate-850 px-2 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  Key Metrics
                </span>
                <ul className="mt-2 space-y-1.5">
                  {activeProject.metrics.map((metric, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-300 font-sans flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  Threat Vectors
                </span>
                <div className="mt-2 space-y-1.5 font-mono text-[10px] text-slate-400">
                  {activeProject.mitreMapping.map((mitre, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-red-950/40 border border-red-900/40 text-accent-red font-bold">
                        MITRE
                      </span>
                      <span>{mitre}</span>
                    </div>
                  ))}
                  {activeProject.owaspMapping[0] !== 'Not applicable' && activeProject.owaspMapping.map((owasp, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-blue-950/40 border border-blue-900/40 text-accent font-bold">
                        OWASP
                      </span>
                      <span>{owasp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  Telemetry Logs
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {activeProject.logSources.map((source, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono text-slate-400 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-900"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dossier Content */}
            <div className="lg:col-span-8 space-y-6 border-t lg:border-t-0 lg:border-l border-slate-900/80 pt-6 lg:pt-0 lg:pl-8">
              
              <div>
                <h3 className="text-xl font-bold font-mono text-white uppercase tracking-wide">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-slate-400 font-sans mt-2 leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              <div className="space-y-4 font-sans text-sm">
                <div>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
                    1. Mission Objective & Problem
                  </span>
                  <p className="text-slate-300 mt-1 leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
                    2. Architecture & Design Implementation
                  </span>
                  <p className="text-slate-300 mt-1 leading-relaxed">
                    {activeProject.action}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest block">
                    3. Safety & Cyber Security Analysis
                  </span>
                  <p className="text-slate-300 mt-1 leading-relaxed">
                    {activeProject.result}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-accent-green uppercase tracking-widest block">
                    4. Fault Isolation & Mitigation
                  </span>
                  <p className="text-slate-350 mt-1 leading-relaxed">
                    {activeProject.remediation}
                  </p>
                </div>
              </div>

              {/* Platform Callout */}
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs font-sans text-slate-300 leading-relaxed relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-accent" />
                <span className="font-mono text-[9px] text-accent uppercase tracking-wider block mb-1">
                  Platform Performance Takeaway
                </span>
                {activeProject.recruiterTakeaway}
              </div>

              {/* Dossier Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono">
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded bg-slate-950 text-slate-300 border border-slate-900 hover:border-slate-800 hover:text-white transition-all text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Inspect Architecture Specs
                  </a>
                )}
                <a
                  href="#contact"
                  className="px-4 py-2 rounded bg-accent text-slate-950 font-bold hover:bg-[#00d0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all text-xs flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Request Demo & Technical Brief
                </a>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
