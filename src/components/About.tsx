'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Code, BookOpen } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const iconMap = [ShieldCheck, BookOpen, Code, Cpu];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#060a13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono text-accent uppercase tracking-widest text-glow"
          >
            Security Narrative
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mt-2 font-sans tracking-tight"
          >
            The Structural Approach to Cyber Defense
          </motion.h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            {aboutData.story.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-slate-300 text-base leading-relaxed font-sans"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Strength Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {aboutData.strengths.map((strength, idx) => {
              const IconComponent = iconMap[idx % iconMap.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-lg glass-panel border border-slate-900 flex items-start gap-4 hover:border-slate-800 transition-colors"
                >
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-accent flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-mono uppercase tracking-wider text-white">
                      {strength.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">
                      {strength.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
