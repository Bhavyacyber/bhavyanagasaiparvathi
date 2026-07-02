'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronRight, Compass } from 'lucide-react';
import { experienceTimeline, educationJourney } from '../data/portfolioData';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<'journey' | 'experience'>('journey');

  return (
    <section id="timeline" className="relative py-24 bg-[#060a13] border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest text-glow">
            Platform Chronology
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-sans tracking-tight">
            Development & Research Roadmap
          </h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Switcher Tabs */}
        <div className="flex justify-center gap-3 mb-16 font-mono text-xs">
          <button
            onClick={() => setActiveTab('journey')}
            className={`px-5 py-2.5 rounded-lg border uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'journey'
                ? 'bg-accent/10 border-accent text-accent'
                : 'bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            Milestones & R&D Phase
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-5 py-2.5 rounded-lg border uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'experience'
                ? 'bg-accent/10 border-accent text-accent'
                : 'bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Platform Integration & Deployments
          </button>
        </div>

        {/* Timeline Content Panels */}
        <div>
          <AnimatePresence mode="wait">
            
            {activeTab === 'journey' && (
              <motion.div
                key="journey"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto relative border-l border-slate-850 pl-6 sm:pl-8 space-y-10"
              >
                {educationJourney.map((event, idx) => {
                  const isAcademic = event.type === 'academic';
                  const Icon = isAcademic ? GraduationCap : Compass;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="relative"
                    >
                      {/* Timeline Node Circle */}
                      <div className={`absolute -left-[35px] sm:-left-[43px] w-6 h-6 rounded-full border bg-slate-950 flex items-center justify-center ${
                        event.type === 'cyber'
                          ? 'border-accent text-accent'
                          : 'border-slate-800 text-slate-500'
                      }`}>
                        <Icon className="w-3 h-3" />
                      </div>

                      {/* Content Card */}
                      <div className="p-5 rounded-xl glass-panel border border-slate-900 hover:border-slate-850 transition-colors">
                        <span className="font-mono text-[10px] text-accent font-semibold block uppercase tracking-wider">
                          {event.year}
                        </span>
                        <h4 className="text-base font-bold text-white font-mono uppercase tracking-wide mt-1">
                          {event.title}
                        </h4>
                        <h5 className="text-xs text-slate-400 font-sans mt-0.5">
                          {event.subtitle}
                        </h5>
                        <p className="text-xs text-slate-450 mt-3 font-sans leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto space-y-6"
              >
                {experienceTimeline.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl glass-panel border border-slate-905 space-y-6"
                  >
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-900/60 pb-4">
                      <div>
                        <span className="font-mono text-xs text-accent uppercase tracking-widest">
                          Platform Integration Records
                        </span>
                        <h4 className="text-xl font-bold text-white font-mono uppercase tracking-wide mt-1">
                          {exp.role} <span className="text-slate-500 font-light">@</span> {exp.company}
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-slate-500 mt-2 sm:mt-0 px-3 py-1 rounded bg-slate-950 border border-slate-900">
                        {exp.date}
                      </span>
                    </div>

                    {/* Tools Sub-row */}
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                        System Tools Deployed
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-mono text-slate-350 bg-slate-950 border border-slate-900 px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-3">
                        Core Responsibilities & Technical Achievements
                      </span>
                      <ul className="space-y-3">
                        {exp.achievements.map((ach, aIdx) => (
                          <li
                            key={aIdx}
                            className="text-sm text-slate-300 font-sans leading-relaxed flex items-start gap-3"
                          >
                            <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architectural Lesson Callout */}
                    <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs font-sans text-slate-350 leading-relaxed relative overflow-hidden">
                      <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-accent" />
                      <span className="font-mono text-[9px] text-accent uppercase tracking-wider block mb-1">
                        Architectural Retrospective
                      </span>
                      {exp.lessonsLearned}
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
