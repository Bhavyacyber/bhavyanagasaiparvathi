'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Features' },
  { id: 'expertise', label: 'Architecture' },
  { id: 'projects', label: 'Applications' },
  { id: 'timeline', label: 'Roadmap' },
  { id: 'certifications', label: 'Standards' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const activeSection = useActiveSection(navItems.map((item) => item.id), 120);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060a13]/80 border-b border-slate-800/80 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScrollTo('hero')}>
            <Shield className="w-6 h-6 text-accent animate-pulse" />
            <span className="font-mono text-sm tracking-widest font-bold text-white uppercase">
              iTelematics<span className="text-accent">.Aerospace</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-accent font-semibold text-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#060a13] border-b border-slate-800/90 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`font-mono text-left text-sm tracking-wider uppercase py-2 border-b border-slate-900 ${
                activeSection === item.id ? 'text-accent font-semibold' : 'text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
