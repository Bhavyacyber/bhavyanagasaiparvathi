import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Skills from '../components/Skills';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060a13] text-slate-100 flex flex-col selection:bg-accent/30 selection:text-white">
      {/* Floating Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Expertise />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#05080e] border-t border-slate-900 py-8 font-mono text-[10px] text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <div>
            &copy; {new Date().getFullYear()} iTelematics Software Private Limited. All systems secured.
          </div>
          <div>
            Built with Next.js &middot; Tailwind CSS &middot; Framer Motion &middot; TypeScript
          </div>
        </div>
      </footer>
    </div>
  );
}

