"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal, Cpu, Clock, Activity, Mail } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [systemTime, setSystemTime] = useState("");

  // Update footer local running clock
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const formatNumber = (num: number) => num.toString().padStart(2, "0");
      const yyyy = date.getFullYear();
      const mm = formatNumber(date.getMonth() + 1);
      const dd = formatNumber(date.getDate());
      const hh = formatNumber(date.getHours());
      const min = formatNumber(date.getMinutes());
      const ss = formatNumber(date.getSeconds());
      setSystemTime(`${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "01. About" },
    { id: "experience", label: "02. Experience" },
    { id: "projects", label: "03. Projects" },
    { id: "skills", label: "04. Skills" },
    { id: "contact", label: "05. Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#05070f]/80 backdrop-blur-md border-b border-slate-900/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-mono text-sm font-bold tracking-tight text-white flex items-center space-x-2 group">
            <Terminal className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-200" />
            <span>LOHITA_V_</span>
            <span className="text-emerald-400 font-bold animate-pulse">_</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 font-mono text-xs">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`hover:text-emerald-400 transition-colors duration-200 ${
                  activeSection === item.id ? "text-emerald-400 font-semibold" : "text-slate-400"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded border border-emerald-500/30 hover:border-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 transition-all duration-300"
            >
              Resume.sh
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-white p-2"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-[#070b13] border-b border-slate-900 py-4 px-6 flex flex-col space-y-4 font-mono text-sm text-left">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-emerald-400 transition-colors duration-200 ${
                  activeSection === item.id ? "text-emerald-400 font-semibold" : "text-slate-400"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2 rounded border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
            >
              Resume.sh
            </a>
          </nav>
        )}
      </header>

      {/* Main Content Assembly */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Developer Telemetry Footer */}
      <footer className="bg-[#05070f] border-t border-slate-900 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-500">
          
          {/* Copyright & Sign-off */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-slate-400">Designed & Built by Lohita V</span>
            <span>Copyright © 2026. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 text-slate-500">
            <a
              href="https://github.com/lohita181"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lohita-venkatesan-37345125b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:lohitavenkatesh@gmail.com"
              className="hover:text-emerald-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Infrastructure status indicators */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1.5 text-[10px] text-slate-500 border-t border-slate-900/60 md:border-t-0 pt-4 md:pt-0">
            <div className="flex items-center space-x-1">
              <Cpu className="w-3.5 h-3.5 text-emerald-500" />
              <span>STACK: NEXT.JS v16 • TW4</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>ENV: PRODUCTION_READY</span>
            </div>

            <div className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span className="tabular-nums">SYS_TIME: {systemTime || "2026-06-24 11:05:42"}</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
