"use client";

import { useState } from "react";
import { Folder, ExternalLink, Terminal, Database, BrainCircuit, Sliders, ChevronDown, ChevronUp } from "lucide-react";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "PCB Industry-Focused LLM",
      subtitle: "Research Project on Domain-Specific LLM Fine-Tuning & RAG",
      duration: "Jan 2026 - Apr 2026",
      tech: ["Python", "Transformers", "LLaMA 3.1", "QLoRA", "ChromaDB", "RAG", "SentenceTransformers"],
      summary: "Engineered an end-to-end RAG system over 7M+ characters of complex PCB design datasheets. Fine-tuned LLaMA 3.1 8B via QLoRA to output expert hardware design responses.",
      github: "https://github.com/lohitavenkatesh",
      details: {
        architecture: "Document extraction (PDF parsing) -> Custom text chunking -> BAAI/bge-large-en-v1.5 embeddings -> ChromaDB semantic lookup. The retrieved context is injected into a fine-tuned LLaMA 3.1 8B model.",
        metrics: [
          "Curated and validated a specialized corpus of 997 technical Q&A pairs on PCB design standards.",
          "Fine-tuned using QLoRA parameters: rank r=16, alpha=32, target modules (q_proj, v_proj).",
          "Reduced training cross-entropy loss from 1.1 to 0.62 over 3 epochs, optimizing factual correctness."
        ],
        command: "python fine_tune.py --model llama-3.1-8b-instruct --dataset pcb_qa_v2.json --lora_r 16"
      }
    },
    {
      title: "StyleFit Outfit Recommender",
      subtitle: "Personalized Outfit Classification & Suggestion Engine",
      duration: "Jan 2025 - Apr 2025",
      tech: ["Python", "Flask", "TensorFlow", "MobileNetV2", "PostgreSQL", "JavaScript", "HTML/CSS"],
      summary: "Built a deep-learning powered web application that classifies clothing images uploaded by users and recommends matching outfits from their stateful digital wardrobe database.",
      github: "https://github.com/lohitavenkatesh",
      details: {
        architecture: "User uploads image -> TensorFlow/MobileNetV2 CNN categorizes apparel -> Flask-Login state engine verifies session -> SQL queries suggest matching apparel sets from PostgreSQL wardrobe table.",
        metrics: [
          "Leveraged a MobileNetV2 CNN model for low-latency occasion-based apparel classification.",
          "Implemented relation-backed session authentication and user-specific wardrobes using Flask-Login.",
          "Achieved sub-100ms response times for recommendation calculations on wardrobe matching queries."
        ],
        command: "flask run --port=5000 --reload # MobileNetV2 classification engine active"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070b13]/40 border-t border-slate-900">
      <div className="absolute inset-0 grid-bg-fine opacity-10 pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center lg:text-left">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">// 03. FEATURED PROJECTS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Flagship Engineering Projects
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mx-auto lg:mx-0" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {projects.map((proj, idx) => {
            const isExpanded = expandedProject === idx;
            return (
              <div 
                key={idx}
                className="relative rounded-xl border border-slate-800 bg-[#080d19] overflow-hidden terminal-window flex flex-col hover:border-slate-700/80 transition-all duration-300 group"
              >
                {/* VSCode Tab Style Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#0b1222] border-b border-slate-900 font-mono text-xs">
                  <div className="flex items-center space-x-2">
                    <Folder className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-slate-300 font-semibold">{proj.title.toLowerCase().replace(/ /g, "_")}.py</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-500">
                    <span>{proj.duration}</span>
                    <div className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/40 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 inline-block" />
                    </div>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-mono group-hover:text-emerald-400 transition-colors duration-200">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">{proj.subtitle}</p>
                    <p className="text-sm text-slate-400 leading-relaxed pt-2">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-1 rounded bg-[#0f192b] border border-slate-800/80 text-slate-300 font-mono text-[11px] hover:border-emerald-500/30 transition-colors duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand / Collapse Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setExpandedProject(isExpanded ? null : idx)}
                      className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>{isExpanded ? "Hide Telemetry" : "Analyze Pipeline Telemetry"}</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Telemetry Expansion Panel */}
                  {isExpanded && (
                    <div className="p-4 rounded-lg bg-[#05070f] border border-slate-800 font-mono text-xs text-slate-400 space-y-3 mt-2 animate-fadeIn">
                      <div>
                        <span className="text-cyan-400">&gt; cat config_architecture.yaml</span>
                        <div className="pl-4 text-slate-300 mt-1">
                          <span className="text-emerald-500">pipeline:</span> {proj.details.architecture}
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-cyan-400">&gt; ./measure_metrics.sh</span>
                        <div className="pl-4 space-y-1 mt-1 text-[11px]">
                          {proj.details.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="flex items-start space-x-2">
                              <span className="text-emerald-400 shrink-0">+</span>
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#0b1222] p-2.5 rounded border border-slate-900 text-slate-400 flex items-center justify-between text-[10px]">
                        <span>{proj.details.command}</span>
                        <span className="text-emerald-500 font-bold">READY</span>
                      </div>
                    </div>
                  )}

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>Source Repository</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
