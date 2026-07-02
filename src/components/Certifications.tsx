'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsList } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-[#05080e] border-b border-slate-900">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest text-glow">
            External Validations
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-sans tracking-tight">
            Industry Credentials & Standards
          </h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert, idx) => {
            const isCompleted = cert.status === 'Completed';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative overflow-hidden p-6 rounded-xl glass-panel border border-slate-900 flex flex-col justify-between hover:border-slate-800 transition-all duration-300 group"
              >
                
                {/* Header Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded bg-slate-950 border border-slate-900 text-accent flex items-center justify-center`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <span className={`text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded border ${
                      isCompleted
                        ? 'bg-emerald-950/40 border-emerald-900/40 text-accent-green'
                        : 'bg-amber-950/40 border-amber-900/40 text-amber-500 animate-pulse'
                    }`}>
                      {cert.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                      {cert.issuer}
                    </span>
                    <h4 className="text-base font-bold text-white font-mono uppercase tracking-wide mt-1.5 leading-snug group-hover:text-accent transition-colors">
                      {cert.name}
                    </h4>
                  </div>
                </div>

                {/* Footer details & Verification */}
                <div className="mt-8 pt-4 border-t border-slate-900/60 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-slate-500">
                    {isCompleted ? `Issued: ${cert.date}` : 'Target: 2026'}
                  </span>

                  {isCompleted && cert.verificationLink && (
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:text-white transition-colors cursor-pointer"
                    >
                      Verify Credentials
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Top border glowing highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-right from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
