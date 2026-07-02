'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';
import { heroData } from '../data/portfolioData';

// Custom inline SVG icons for brands (Github and Linkedin)
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#060a13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest text-glow">
            Gateway Endpoint
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-sans tracking-tight">
            Initiate Secure Communication
          </h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Deck Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-905 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                Direct Channels
              </span>
              <h4 className="text-xl font-bold text-white font-mono uppercase tracking-wide mt-1.5">
                Contact Details
              </h4>
              <p className="text-xs text-slate-450 mt-2 font-sans leading-relaxed">
                Connect directly for interview scheduling, technical discussions, or requests for full VAPT report outputs.
              </p>
            </div>

            <div className="mt-8 space-y-4 font-mono text-xs">
              
              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-950/80 border border-slate-900">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-550 block uppercase tracking-wider">Email Endpoint</span>
                  <a href={`mailto:${heroData.email}`} className="text-slate-300 hover:text-accent transition-colors">
                    {heroData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-950/80 border border-slate-900">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-550 block uppercase tracking-wider">Secure Phone line</span>
                  <a href={`tel:${heroData.phone.replace(/\s/g, '')}`} className="text-slate-300 hover:text-accent transition-colors">
                    {heroData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-950/80 border border-slate-900">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-slate-550 block uppercase tracking-wider">Geographic Location</span>
                  <span className="text-slate-300">
                    {heroData.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Social Link Badges */}
            <div className="flex gap-3 mt-8 pt-6 border-t border-slate-900/60 justify-center">
              <a
                href={heroData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-accent hover:border-slate-850 hover:shadow-[0_0_10px_rgba(0,240,255,0.15)] transition-all cursor-pointer"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={heroData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-accent hover:border-slate-850 hover:shadow-[0_0_10px_rgba(0,240,255,0.15)] transition-all cursor-pointer"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

          </motion.div>

          {/* Card 2: Interview Availability */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-905 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Glowing top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-right from-transparent via-accent/30 to-transparent" />

            <div>
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                Triage Analytics
              </span>
              <h4 className="text-xl font-bold text-white font-mono uppercase tracking-wide mt-1.5">
                Role Readiness
              </h4>
              <p className="text-xs text-slate-455 mt-2 font-sans leading-relaxed">
                Actively preparing for entry-level security team placements. Fully mobilized for technical testing and interview loops.
              </p>
            </div>

            <div className="mt-6 space-y-4 font-mono text-xs">
              
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] text-white block uppercase tracking-wider">Availability</span>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Immediate availability. Relocation ready for hybrid/on-site placements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] text-white block uppercase tracking-wider">Shift Mobilization</span>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Willingness to support 24/7/365 SOC rotating rosters and emergency response operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-accent-green mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] text-white block uppercase tracking-wider">Operational Target</span>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Junior SOC Analyst, Threat Detection Analyst, Systems Compliance Analyst, Security Engineer.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-900/60">
              <a
                href={`mailto:${heroData.email}`}
                className="w-full py-3.5 rounded-lg bg-accent text-slate-950 font-mono text-sm font-bold hover:bg-[#00d0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2 border border-accent cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Book Technical Interview
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
