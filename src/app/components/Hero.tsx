"use client";

import { useEffect, useState } from "react";
import { Terminal, Mail, ArrowRight, ChevronRight, Activity, Cpu, Database } from "lucide-react";

const roles = ["Systems Engineer", "ML Builder", "Backend Optimizer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none z-0" />
      <div className="absolute inset-0 grid-bg-fine opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Pitch and Taglines */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-mono text-emerald-400 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>EX-ZOHO INTERN • B.E. IS&E &apos;26</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I&apos;m Lohita V. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              I build backend systems
            </span>
          </h1>

          <div className="h-10 text-xl sm:text-2xl font-mono text-slate-400 flex items-center">
            <span>&gt;&nbsp;</span>
            <span>{displayText}</span>
            <span className="w-2 h-5 ml-1 bg-emerald-400 animate-pulse" />
          </div>

          <p className="max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
            I specialize in optimizing backend telemetry pipelines, binary reverse engineering, and fine-tuning domain-specific LLMs. Ready to engineer robust backend infrastructure that scales.
          </p>

          {/* Call-to-actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-300 hover:text-white font-medium flex items-center space-x-2 transition-all duration-300"
            >
              <span>Get in touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-6 text-slate-500">
            <a
              href="https://github.com/lohita181"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side: Mock Terminal & Metrics */}
        <div className="lg:col-span-5 relative w-full">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative rounded-xl border border-slate-800 bg-[#070b13] overflow-hidden terminal-window">
            
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0c1122] border-b border-slate-900">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="text-xs font-mono text-slate-500 flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>system_stats.sh</span>
              </div>
              <div className="w-4" /> {/* Spacer */}
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm space-y-4 text-left leading-relaxed">
              <div>
                <span className="text-cyan-400">$</span> <span className="text-slate-200">curl -s https://api.lohita.dev/status</span>
              </div>
              <div className="text-emerald-400 pl-4">
                {`{`}
                <div className="pl-4 text-slate-300">
                  <span className="text-slate-500">&quot;candidate&quot;:</span> <span className="text-amber-300">&quot;Lohita V&quot;</span>,
                  <br />
                  <span className="text-slate-500">&quot;title&quot;:</span> <span className="text-amber-300">&quot;Software Engineer&quot;</span>,
                  <br />
                  <span className="text-slate-500">&quot;focus_areas&quot;:</span> <span className="text-teal-400">[&quot;Backend&quot;, &quot;Telemetry&quot;, &quot;ML Integration&quot;]</span>,
                  <br />
                  <span className="text-slate-500">&quot;status&quot;:</span> <span className="text-emerald-400">&quot;Active SWE Job Hunt&quot;</span>
                </div>
                {`}`}
              </div>

              <div className="pt-2">
                <span className="text-cyan-400">$</span> <span className="text-slate-200">./check_telemetry.sh</span>
              </div>
              <div className="pl-4 text-slate-400 space-y-1.5 text-xs">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>[OK] Competitive Programming Telemetry</span>
                </div>
                <div className="pl-4 flex justify-between border-l border-emerald-500/20">
                  <span>- Problems Solved:</span>
                  <span className="text-emerald-300 font-bold">400+ (LeetCode/GFG)</span>
                </div>
                <div className="pl-4 flex justify-between border-l border-emerald-500/20">
                  <span>- Contest Rating:</span>
                  <span className="text-emerald-300 font-bold">1530 (LeetCode max)</span>
                </div>

                <div className="flex items-center space-x-2 text-cyan-400 pt-1">
                  <Database className="w-3.5 h-3.5" />
                  <span>[OK] Core Infrastructure Skills</span>
                </div>
                <div className="pl-4 flex justify-between border-l border-cyan-500/20">
                  <span>- Database Pipelines:</span>
                  <span className="text-cyan-300 font-bold">Prometheus / Grafana / PMM</span>
                </div>
                
                <div className="flex items-center space-x-2 text-teal-400 pt-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>[OK] AI Deployment Pipeline</span>
                </div>
                <div className="pl-4 flex justify-between border-l border-teal-500/20">
                  <span>- Custom Fine-tuning:</span>
                  <span className="text-teal-300 font-bold">LLaMA 3.1 8B + QLoRA</span>
                </div>
              </div>
              
              <div className="pt-2 flex items-center text-xs text-slate-500 animate-pulse">
                <ChevronRight className="w-3.5 h-3.5" />
                <span>monitoring daemon active...</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
