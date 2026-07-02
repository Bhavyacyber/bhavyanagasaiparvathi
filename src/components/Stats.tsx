'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, FileSearch, Network } from 'lucide-react';
import { portfolioStats } from '../data/portfolioData';

const statItems = [
  {
    value: portfolioStats.certificationsCount,
    label: 'Standards Compliances',
    desc: 'DO-178C, DO-254, DO-356, ISO 21434 & UNECE',
    icon: Award,
  },
  {
    value: portfolioStats.vulnerabilitiesFound,
    label: 'Threat Vectors Cataloged',
    desc: 'CAN spoofing, firmware updates, & telemetry anomalies',
    icon: ShieldAlert,
  },
  {
    value: portfolioStats.vaptReportsDelivered,
    label: 'Security Audits Completed',
    desc: 'Formal industry-standard compliance reports',
    icon: FileSearch,
  },
  {
    value: portfolioStats.labMachinesSegmented,
    label: 'Target Battery Systems',
    desc: 'Aircraft, UAV, drone, satellite, & eVTOL systems',
    icon: Network,
  },
];

export default function Stats() {
  return (
    <section className="relative z-10 py-10 bg-[#05080e] border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden p-6 rounded-xl glass-panel border border-slate-900 flex items-start gap-4 hover:border-slate-800 transition-colors shadow-sm"
              >
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-accent flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white font-mono tracking-tight text-glow">
                      {stat.value}
                    </span>
                    <span className="text-accent text-lg font-bold">+</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-300 mt-1 font-sans">{stat.label}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-sans leading-relaxed">{stat.desc}</p>
                </div>
                {/* Accent glow line at the top */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-right from-transparent via-accent/30 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
