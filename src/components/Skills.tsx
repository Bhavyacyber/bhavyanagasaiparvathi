'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal, HeartPulse, Network, FileCode } from 'lucide-react';
import { skillCategories, Skill } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-4 h-4" />;
      case 1:
        return <Terminal className="w-4 h-4" />;
      case 2:
        return <Network className="w-4 h-4" />;
      case 3:
        return <FileCode className="w-4 h-4" />;
      default:
        return <ShieldCheck className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#05080e] border-y border-slate-900">
      {/* Visual cyber-grid background */}
      <div className="absolute inset-0 bg-grid-cyber opacity-[0.2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest text-glow">
            Technical Proficiency
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-sans tracking-tight">
            Security Capability Matrix
          </h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(idx);
                setSelectedSkill(null);
              }}
              className={`px-5 py-2.5 rounded-lg border font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeCategory === idx
                  ? 'bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(0,240,255,0.08)]'
                  : 'bg-slate-950/60 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
              }`}
            >
              {getCategoryIcon(idx)}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Layout Grid: Skill Grid on Left, Detailed Inspector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skill Selection Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories[activeCategory].skills.map((skill, sIdx) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <motion.div
                  key={sIdx}
                  layoutId={`skill-${skill.name}`}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-accent/5 border-accent shadow-[0_0_20px_rgba(0,240,255,0.05)]'
                      : 'bg-slate-950 border-slate-900/60 hover:border-slate-800'
                  }`}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white tracking-wide">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-accent font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-850">
                      {skill.confidence}%
                    </span>
                  </div>

                  {/* Micro custom animated progress bar */}
                  <div className="w-full bg-slate-900/80 h-1 rounded-full overflow-hidden mt-3.5 border border-slate-950">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.confidence}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-gradient-to-right from-accent to-[#00a2ff] h-full rounded-full"
                    />
                  </div>

                  {/* List of 2 core tools in mini boxes */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {skill.tools.slice(0, 2).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-850"
                      >
                        {t}
                      </span>
                    ))}
                    {skill.tools.length > 2 && (
                      <span className="text-[9px] font-mono text-slate-500 px-1.5 py-0.5">
                        +{skill.tools.length - 2} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Inspection Deck */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl glass-panel border border-slate-805 relative overflow-hidden"
                >
                  {/* Decorative glowing gradient circle */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

                  <h4 className="text-xs font-mono text-accent uppercase tracking-widest text-glow">
                    Skill Details
                  </h4>
                  <h3 className="text-xl font-bold text-white mt-2 font-sans">
                    {selectedSkill.name}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                        Capability Description
                      </span>
                      <p className="text-sm text-slate-350 leading-relaxed font-sans mt-1">
                        {selectedSkill.description}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                        Tool Stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedSkill.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono text-accent bg-slate-950 border border-slate-900 px-2.5 py-1 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                        Validation Case Studies
                      </span>
                      <div className="space-y-1">
                        {selectedSkill.projectsUsedIn.map((proj, idx) => (
                          <div
                            key={idx}
                            className="text-xs text-slate-300 font-sans flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            <span>{proj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-64 rounded-2xl border border-dashed border-slate-800 flex flex-col items-center justify-center text-center p-6 bg-slate-950/20">
                  <ShieldCheck className="w-8 h-8 text-slate-600 animate-pulse mb-3" />
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    Select a skill card to view validation analytics
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
