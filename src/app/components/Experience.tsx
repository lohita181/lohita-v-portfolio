"use client";

import { Briefcase, Calendar, CheckCircle2, Server, Terminal, Settings } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Zoho Corp",
      role: "Software Engineer Intern (Project Trainee)",
      duration: "June 2025 - Nov 2025 (6 months)",
      bullets: [
        {
          title: "AI-Augmented Decompilation",
          desc: "Reverse-engineered binary executables using Ghidra, integrating Gemini AI API to automatically translate decompiled C-code/assembly into documented technical logic, accelerating software interpretation."
        },
        {
          title: "Database Telemetry & Observability",
          desc: "Built and automated database monitoring telemetry pipelines leveraging Prometheus, Grafana, and Percona Monitoring and Management (PMM) to aggregate database performance metrics into centralized panels."
        },
        {
          title: "Self-Healing Automation",
          desc: "Developed alert-driven automation scripts in Bash to trigger immediate corrective procedures, such as threshold-based database restarts and auto-alert responses on critical resource starvation."
        },
        {
          title: "MySQL Onboarding Dashboard",
          desc: "Created a full-stack web interface to onboard new MySQL servers, automating exporter configurations and reducing manual node onboarding time to under 2 minutes."
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#05070f] border-t border-slate-900">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">// 02. PROFESSIONAL EXPERIENCE</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work History
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mx-auto" />
        </div>

        {/* Experience log console */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="relative rounded-xl border border-slate-800 bg-[#070b13] overflow-hidden terminal-window text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0c1122] border-b border-slate-900">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-sm font-bold text-white">{exp.company}</span>
                </div>
                <div className="flex items-center space-x-1.5 font-mono text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-emerald-400 font-mono flex items-center space-x-2">
                    <span className="text-slate-500">&gt;</span>
                    <span>{exp.role}</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1 pl-4">Location: Greater Chennai Area | Status: Completed</p>
                </div>

                <div className="border-l-2 border-slate-800 ml-1.5 pl-6 space-y-6 font-mono text-sm">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="relative group">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-slate-950 group-hover:bg-emerald-400 group-hover:border-emerald-950 transition-colors duration-300" />
                      
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-emerald-400/90 flex items-center space-x-1">
                          <CheckCircle2 className="w-3.5 h-3.5 inline mr-1 text-emerald-500" />
                          <span>{bullet.title}</span>
                        </span>
                        <p className="text-slate-400 leading-relaxed text-[13px] pl-4.5">
                          {bullet.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subsystem summary */}
                <div className="pt-4 border-t border-slate-900/60 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Settings className="w-3.5 h-3.5 text-cyan-500 animate-spin-slow" />
                    <span>Stack: Ghidra, Gemini API, Prometheus, Grafana, Bash, PMM, MySQL</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-2 sm:mt-0">
                    <Server className="w-3.5 h-3.5 text-emerald-500" />
                    <span>SYS_STATUS: EXPORTED_SUCCESS</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
