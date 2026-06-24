"use client";

import { useState } from "react";
import { Terminal, FileCode2, ChevronRight, Settings, Info } from "lucide-react";

type FileKey = "languages.yaml" | "frameworks.json" | "databases.conf" | "ai_ml.py";

export default function Skills() {
  const [activeFile, setActiveFile] = useState<FileKey>("languages.yaml");

  const files = {
    "languages.yaml": {
      lang: "yaml",
      content: [
        { name: "Python", rating: 90, comment: "# core language, used for AI models & Flask backend" },
        { name: "Java", rating: 80, comment: "# academic foundation, object-oriented systems" },
        { name: "JavaScript", rating: 75, comment: "# full-stack applications & node services" },
        { name: "C", rating: 70, comment: "# reverse engineering & low-level compiler concepts" }
      ]
    },
    "frameworks.json": {
      lang: "json",
      content: [
        { name: "ReactJS", rating: 80, comment: "// modular frontend web client construction" },
        { name: "Node.js", rating: 80, comment: "// robust scalable event-driven backends" },
        { name: "Express", rating: 75, comment: "// RESTful APIs and server routing" },
        { name: "Flask", rating: 85, comment: "// python web services, model endpoint deployments" },
        { name: "TensorFlow", rating: 70, comment: "// image classification & deep learning inference" },
        { name: "Tailwind CSS", rating: 85, comment: "// rapid high-fidelity styling frameworks" }
      ]
    },
    "databases.conf": {
      lang: "conf",
      content: [
        { name: "SQL / PostgreSQL", rating: 85, comment: "; relational schema, transactions, Flask-Login auth state" },
        { name: "MongoDB", rating: 75, comment: "; document-oriented flexible backend storage" },
        { name: "ChromaDB", rating: 85, comment: "; vector database, embeddings lookup, semantic retrieval" },
        { name: "Prometheus & Grafana", rating: 80, comment: "; database telemetry aggregation and dashboard monitoring" },
        { name: "Ghidra", rating: 75, comment: "; binary executable decompilation and static code analysis" }
      ]
    },
    "ai_ml.py": {
      lang: "python",
      content: [
        { name: "HuggingFace Transformers", rating: 80, comment: "# tokenization, generation pipelines & fine-tuning" },
        { name: "LangChain", rating: 75, comment: "# structuring RAG context and LLM chaining logic" },
        { name: "QLoRA / LoRA", rating: 85, comment: "# parameter-efficient fine-tuning (LLaMA 3.1 8B)" },
        { name: "RAG Pipelines", rating: 85, comment: "# PDF parsers, custom chunkers, vector search retrieval" },
        { name: "SentenceTransformers", rating: 80, comment: "# local semantic embeddings (e.g. bge-large-en-v1.5)" }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#05070f] border-t border-slate-900">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">// 04. TECHNICAL SKILLS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skill Inventory
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mx-auto" />
        </div>

        {/* IDE Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* File Explorer Tree (Left panel) */}
          <div className="lg:col-span-4 rounded-xl border border-slate-800 bg-[#070b13] p-4 text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-900 font-mono text-xs text-slate-500 uppercase tracking-wider">
                <Settings className="w-3.5 h-3.5" />
                <span>workspace_explorer</span>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="text-slate-500 text-xs flex items-center space-x-1 pl-1">
                  <ChevronRight className="w-3 h-3 rotate-90" />
                  <span>skills_config /</span>
                </div>
                
                <div className="pl-4 space-y-1.5">
                  {(Object.keys(files) as FileKey[]).map((fileName) => {
                    const isActive = activeFile === fileName;
                    return (
                      <button
                        key={fileName}
                        onClick={() => setActiveFile(fileName)}
                        className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded transition-all duration-200 text-left font-mono text-xs ${
                          isActive 
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                            : "text-slate-400 hover:bg-slate-900 hover:text-slate-200 border border-transparent"
                        }`}
                      >
                        <FileCode2 className={`w-4 h-4 shrink-0 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
                        <span>{fileName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Note on skills */}
            <div className="pt-6 border-t border-slate-900/60 mt-6 text-slate-500 font-mono text-[11px] leading-relaxed flex items-start space-x-2">
              <Info className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
              <span>Click on files to toggle categories. Skill levels represent execution proficiency, hands-on debugging, and pipeline automation capabilities.</span>
            </div>
          </div>

          {/* Code Viewer Panel (Right panel) */}
          <div className="lg:col-span-8 relative rounded-xl border border-slate-800 bg-[#080d19] overflow-hidden terminal-window flex flex-col justify-between min-h-[350px]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b1222] border-b border-slate-900">
              <div className="flex items-center space-x-2 font-mono text-xs">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-300">{activeFile}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/50 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50 inline-block" />
              </div>
            </div>

            {/* Main content display */}
            <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 text-left overflow-y-auto flex-1 space-y-4">
              {files[activeFile].lang === "yaml" && (
                <div className="text-slate-500 text-xs">// YAML configuration block</div>
              )}
              {files[activeFile].lang === "json" && (
                <div className="text-slate-500 text-xs">// JSON serialized dictionary</div>
              )}
              
              <div className="space-y-4">
                {files[activeFile].content.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    {/* Key line */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <span className="text-cyan-400">{item.name.replace(/ /g, "_").toLowerCase()}</span>
                        <span className="text-slate-400">:</span>{" "}
                        <span className="text-emerald-400">active</span>
                      </div>
                      <div className="text-slate-500 text-xs sm:text-right font-mono">
                        {item.comment}
                      </div>
                    </div>

                    {/* Progress slider bar */}
                    <div className="flex items-center space-x-3">
                      <div className="w-full bg-[#05070f] h-2 rounded-full overflow-hidden border border-slate-900">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.rating}%` }}
                        />
                      </div>
                      <span className="text-slate-400 text-xs w-8 text-right font-mono shrink-0">{item.rating}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#0b1222] border-t border-slate-900 px-4 py-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Lines: {files[activeFile].content.length * 3 + 2}</span>
              <span>Language: {files[activeFile].lang.toUpperCase()}</span>
              <span>ASCII</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
