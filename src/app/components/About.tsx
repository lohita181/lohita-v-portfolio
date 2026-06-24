"use client";

import { Award, BookOpen, Terminal, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070b13]/40 border-t border-slate-900">
      <div className="absolute inset-0 grid-bg-fine opacity-10 pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center lg:text-left">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">// 01. ABOUT ME</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Systems-Minded Software Engineer
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mx-auto lg:mx-0" />
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative bio */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-left">
            <p className="leading-relaxed">
              I am a graduate in <strong className="text-white">Information Science and Engineering</strong> from the Bannari Amman Institute of Technology, with a passion for designing scalable backend systems and optimizing modern AI-integrated applications.
            </p>
            <p className="leading-relaxed">
              During my 6-month Software Engineering Internship at <strong className="text-emerald-400">Zoho Corp</strong>, I was placed in core telemetry and infrastructure automation. I built database monitoring telemetry pipelines, designed system self-healing automation, and engineered systems using Ghidra and Gemini APIs to decompile and document legacy binaries. This gave me a solid foundation in low-level systems logic, Unix internals, and production monitoring stacks.
            </p>
            <p className="leading-relaxed">
              I believe that modern AI models shouldn&apos;t just reside in notebooks; they belong in production pipelines. By combining my backend engineering skills with AI/ML techniques (like fine-tuning LLMs with QLoRA and constructing low-latency vector databases), I aim to build intelligent backend services that are robust, efficient, and deployable.
            </p>
            
            {/* Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Academic Foundation</h4>
                  <p className="text-xs text-slate-400 mt-1">B.E. Information Science & Engineering (2022 - 2026)</p>
                  <p className="text-xs text-emerald-500/80 font-mono mt-0.5">CGPA: 8.12 / 10</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 flex items-start space-x-3">
                <Award className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Algorithmic Problem Solving</h4>
                  <p className="text-xs text-slate-400 mt-1">400+ problems solved on LeetCode/GFG</p>
                  <p className="text-xs text-cyan-400/80 font-mono mt-0.5">Max Contest Rating: 1530</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code/JSON Editor simulation */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-xl border border-slate-800 bg-[#080d19] overflow-hidden terminal-window">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b1222] border-b border-slate-900 font-mono text-xs text-slate-500">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block" />
                </div>
                <div className="flex items-center space-x-1">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>developer_profile.json</span>
                </div>
                <div className="w-4" />
              </div>
              
              {/* Code content */}
              <div className="p-5 font-mono text-xs text-slate-400 text-left overflow-x-auto space-y-1">
                <div><span className="text-slate-500">01</span> <span className="text-emerald-400">{`{`}</span></div>
                <div><span className="text-slate-500">02</span>   <span className="text-cyan-400">&quot;core_languages&quot;</span>: <span className="text-slate-300">[</span><span className="text-amber-300">&quot;Python&quot;</span>, <span className="text-amber-300">&quot;Java&quot;</span>, <span className="text-amber-300">&quot;JavaScript&quot;</span>, <span className="text-amber-300">&quot;C&quot;</span><span className="text-slate-300">]</span>,</div>
                <div><span className="text-slate-500">03</span>   <span className="text-cyan-400">&quot;backend_frameworks&quot;</span>: <span className="text-slate-300">[</span><span className="text-amber-300">&quot;Node.js&quot;</span>, <span className="text-amber-300">&quot;Express&quot;</span>, <span className="text-amber-300">&quot;Flask&quot;</span><span className="text-slate-300">]</span>,</div>
                <div><span className="text-slate-500">04</span>   <span className="text-cyan-400">&quot;databases&quot;</span>: <span className="text-slate-300">[</span><span className="text-amber-300">&quot;PostgreSQL&quot;</span>, <span className="text-amber-300">&quot;MySQL&quot;</span>, <span className="text-amber-300">&quot;MongoDB&quot;</span>, <span className="text-amber-300">&quot;ChromaDB&quot;</span><span className="text-slate-300">]</span>,</div>
                <div><span className="text-slate-500">05</span>   <span className="text-cyan-400">&quot;devops_observability&quot;</span>: <span className="text-slate-300">[</span><span className="text-amber-300">&quot;Prometheus&quot;</span>, <span className="text-amber-300">&quot;Grafana&quot;</span>, <span className="text-amber-300">&quot;PMM&quot;</span>, <span className="text-amber-300">&quot;Bash Scripting&quot;</span><span className="text-slate-300">]</span>,</div>
                <div><span className="text-slate-500">06</span>   <span className="text-cyan-400">&quot;applied_ai&quot;</span>: <span className="text-slate-300">{`{`}</span></div>
                <div><span className="text-slate-500">07</span>     <span className="text-cyan-400">&quot;techniques&quot;</span>: <span className="text-slate-300">[</span><span className="text-amber-300">&quot;QLoRA&quot;</span>, <span className="text-amber-300">&quot;RAG Pipelines&quot;</span>, <span className="text-amber-300">&quot;Text Extraction&quot;</span><span className="text-slate-300">]</span>,</div>
                <div><span className="text-slate-500">08</span>     <span className="text-cyan-400">&quot;models&quot;</span>: <span className="text-slate-300">[</span><span className="text-amber-300">&quot;LLaMA 3.1 8B&quot;</span>, <span className="text-amber-300">&quot;MobileNetV2&quot;</span>, <span className="text-amber-300">&quot;BGE Embeddings&quot;</span><span className="text-slate-300">]</span></div>
                <div><span className="text-slate-500">09</span>   <span className="text-slate-300">{`}`}</span>,</div>
                <div><span className="text-slate-500">10</span>   <span className="text-cyan-400">&quot;development_methodology&quot;</span>: <span className="text-emerald-400">&quot;Clean Code, Automated Telemetry, Local AI Fine-Tuning&quot;</span></div>
                <div><span className="text-slate-500">11</span> <span className="text-emerald-400">{`}`}</span></div>
              </div>
              
              {/* Footer status */}
              <div className="bg-[#0b1222] border-t border-slate-900 px-4 py-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>UTF-8</span>
                <span className="flex items-center space-x-1">
                  <Terminal className="w-3 h-3 text-emerald-400" />
                  <span>Interactive JSON Viewer</span>
                </span>
                <span>JSON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
