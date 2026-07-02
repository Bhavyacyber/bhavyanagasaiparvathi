'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, BatteryCharging, Satellite, Plane, Cpu, Cloud, Activity, Radio } from 'lucide-react';
import { heroData } from '../data/portfolioData';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class representing threat intelligence data nodes
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = 'rgba(0, 240, 255, 0.4)';
        c.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grids
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.1)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Draw lines between close particles representing network flows
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#060a13]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Radial overlay for gradient background depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-xs font-mono text-accent"
            >
              <span className="w-2 h-2 rounded-full bg-accent-green animate-ping" />
              <span>{heroData.availability}</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-sans"
              >
                {heroData.name}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl font-mono text-accent tracking-wide font-semibold text-glow"
              >
                {heroData.role} <span className="text-slate-500 font-light">|</span> {heroData.specialization}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed font-sans"
            >
              {heroData.description}
            </motion.p>

            {/* Quick Contact Specs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-y-3 gap-x-6 text-sm text-slate-500 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent/70" />
                <span>{heroData.location}</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent/70" />
                <a href={`mailto:${heroData.email}`}>{heroData.email}</a>
              </div>
              <div className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent/70" />
                <a href={`tel:${heroData.phone.replace(/\s/g, '')}`}>{heroData.phone}</a>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4 w-full"
            >
              <button
                onClick={() => handleScrollTo('about')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-accent text-slate-950 font-mono text-xs font-bold hover:bg-[#00d0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 border border-accent cursor-pointer uppercase tracking-wider"
              >
                Explore Platform
              </button>
              <button
                onClick={() => handleScrollTo('expertise')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-950 text-slate-350 font-mono text-xs font-semibold hover:text-white hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                View Architecture
              </button>
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-950 text-slate-350 font-mono text-xs font-semibold hover:text-white hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                Live Dashboard
              </button>
            </motion.div>
          </div>

          {/* Aerospace Platform Premium Graphic / Glassmorphic Card */}
          <div className="lg:col-span-4 flex items-center justify-center relative py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-sm aspect-[4/3] sm:aspect-square rounded-2xl glass-panel border border-slate-800/85 p-3 shadow-[0_0_50px_rgba(0,240,255,0.08)] bg-slate-950/40 backdrop-blur-md overflow-visible flex items-center justify-center group hover:border-accent/30 transition-all duration-500"
            >
              {/* Card Glow Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Inner frame with glow */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-900/60 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
                <img
                  src="/hero-aerospace.png"
                  alt="Aerospace Battery Cybersecurity Architecture"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a13] via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Soft blue corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/40" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent/40" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/40" />
              </div>

              {/* Floating Animated Elements */}
              {/* 1. Battery Icon */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 p-2.5 rounded-xl glass-panel border border-slate-800 text-accent shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20"
                title="Battery Diagnostics"
              >
                <BatteryCharging className="w-5 h-5" />
              </motion.div>

              {/* 2. Satellite Icon */}
              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-8 right-6 p-2.5 rounded-xl glass-panel border border-slate-800 text-accent/80 shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20"
                title="Satellite Telemetry"
              >
                <Satellite className="w-5 h-5" />
              </motion.div>

              {/* 3. Drone / UAV Icon */}
              <motion.div
                animate={{ y: [0, -6, 0], x: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-8 p-2.5 rounded-xl glass-panel border border-slate-800 text-accent/85 shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20"
                title="UAV / Drone Integration"
              >
                <Plane className="w-5 h-5 -rotate-45" />
              </motion.div>

              {/* 4. AI Icon */}
              <motion.div
                animate={{ y: [0, 7, 0], x: [0, 5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-1/4 -left-8 p-2.5 rounded-xl glass-panel border border-slate-800 text-accent shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20"
                title="Predictive AI"
              >
                <Cpu className="w-5 h-5" />
              </motion.div>

              {/* 5. Cybersecurity Icon */}
              <motion.div
                animate={{ y: [0, -9, 0], x: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute -bottom-6 -right-4 p-2.5 rounded-xl glass-panel border border-slate-800 text-accent shadow-[0_0_20px_rgba(0,240,255,0.25)] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20"
                title="Active Threat Defense"
              >
                <Shield className="w-5 h-5" />
              </motion.div>

              {/* 6. Cloud Icon */}
              <motion.div
                animate={{ y: [0, 5, 0], x: [0, -4, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-8 left-12 p-2.5 rounded-xl glass-panel border border-slate-800 text-accent/75 shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20"
                title="Cloud Analytics"
              >
                <Cloud className="w-5 h-5" />
              </motion.div>

              {/* 7. Digital Twin Icon */}
              <motion.div
                animate={{ y: [0, -5, 0], x: [0, 6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute top-1/2 -left-10 p-2.5 rounded-xl glass-panel border border-slate-800 text-accent/90 shadow-[0_0_15px_rgba(0,240,255,0.18)] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20"
                title="Digital Twin Sync"
              >
                <Activity className="w-5 h-5" />
              </motion.div>

              {/* 8. Mission Control Icon */}
              <motion.div
                animate={{ y: [0, 6, 0], x: [0, -5, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
                className="absolute bottom-1/3 -right-10 p-2.5 rounded-xl glass-panel border border-slate-800 text-accent/90 shadow-[0_0_15px_rgba(0,240,255,0.18)] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-20"
                title="Mission Control Gateway"
              >
                <Radio className="w-5 h-5" />
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
