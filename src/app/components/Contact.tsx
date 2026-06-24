"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Terminal, Cpu, Server, Network, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "System diagnostics online.",
    "Type or click a script macro below to query system info..."
  ]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lohitavenkatesh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmd: "traceroute" | "sshkey" | "credentials") => {
    setActiveCommand(cmd);
    
    if (cmd === "traceroute") {
      setTerminalLogs([
        "$ ./traceroute_lohita.sh",
        "traceroute to lohita.dev (10.24.42.181), 30 hops max, 60 byte packets",
        " 1  192.168.1.1 (gateway)  1.02 ms",
        " 2  10.0.0.1 (local-isp-node)  4.35 ms",
        " 3  182.19.45.21 (chennai-ixp-backbone)  14.20 ms",
        " 4  172.16.88.92 (bannari-amman-campus-gw)  19.12 ms",
        " 5  10.24.42.181 (lohita-workstation-local)  18.45 ms",
        "Connection established. Latency: 18.45 ms. Location: Chennai, India."
      ]);
    } else if (cmd === "sshkey") {
      setTerminalLogs([
        "$ cat public_key.pub",
        "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDC7FwVvJ38g/1G+...",
        "Comment: lohita-workstation-production",
        "Key fingerprint: SHA256:f8+3/l181+ZohoInternSystemsKey",
        "Authorized logins enabled from secure nodes."
      ]);
    } else if (cmd === "credentials") {
      setTerminalLogs([
        "$ ./fetch_credentials.sh",
        "--- Lohita V Credentials ---",
        "EMAIL:      lohitavenkatesh@gmail.com",
        "PHONE:      +91 93604 36504",
        "GITHUB:     https://github.com/lohita181",
        "LINKEDIN:   https://linkedin.com/in/lohita-venkatesan-37345125b",
        "STATUS:     Active SWE & Full-Stack job hunt in progress..."
      ]);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070b13]/40 border-t border-slate-900">
      <div className="absolute inset-0 grid-bg-fine opacity-10 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">// 05. SYSTEM TELEMETRY</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mx-auto" />
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Links & Fast Copy */}
          <div className="lg:col-span-5 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-mono">Communication Nodes</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                If you have an open Software Engineer role, want to talk backend engineering, or want to discuss domain-specific LLM setups, ping me directly. Let&apos;s build something.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl border border-slate-800 bg-[#080d19] flex items-center justify-between mt-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <div className="font-mono text-xs">
                  <span className="text-slate-500 block">EMAIL_CHANNEL</span>
                  <span className="text-slate-300 text-sm">lohitavenkatesh@gmail.com</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded bg-[#0f182a] hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Link Cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/lohita-venkatesan-37345125b"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-slate-800 bg-[#080d19] hover:border-slate-700/80 hover:bg-[#0b1222] transition-all duration-300 flex flex-col justify-between h-28"
              >
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <div className="font-mono text-xs">
                  <span className="text-slate-500 block">LINKEDIN</span>
                  <span className="text-slate-300">lohita-venkatesan</span>
                </div>
              </a>

              <a
                href="https://github.com/lohita181"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-slate-800 bg-[#080d19] hover:border-slate-700/80 hover:bg-[#0b1222] transition-all duration-300 flex flex-col justify-between h-28"
              >
                <svg className="w-6 h-6 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <div className="font-mono text-xs">
                  <span className="text-slate-500 block">GITHUB</span>
                  <span className="text-slate-300">lohita181</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Systems monitor console */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="relative rounded-xl border border-slate-800 bg-[#080d19] overflow-hidden terminal-window text-left flex-1 flex flex-col justify-between min-h-[350px]">
              
              {/* Terminal Title bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b1222] border-b border-slate-900">
                <div className="flex items-center space-x-2 font-mono text-xs">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-300">systems_monitor.sh</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block" />
                </div>
              </div>

              {/* Console logs output */}
              <div className="p-6 font-mono text-xs sm:text-sm text-slate-400 space-y-2 select-text overflow-y-auto flex-1">
                {/* Stats Dashboard */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-b border-slate-900 pb-4 mb-4 text-[11px] sm:text-xs">
                  <div className="flex items-center space-x-1.5 text-slate-500">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LOAD: [||||||....] 64%</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-500">
                    <Server className="w-3.5 h-3.5 text-emerald-400" />
                    <span>UPTIME: 10452 hours</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-500">
                    <Network className="w-3.5 h-3.5 text-teal-400" />
                    <span>PORT: 8080 (ESTABLISHED)</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>SSH-RSA: KEY_ENABLED</span>
                  </div>
                </div>

                {/* Command Outputs */}
                <div className="space-y-1">
                  {terminalLogs.map((log, index) => (
                    <div 
                      key={index}
                      className={
                        log.startsWith("$")
                          ? "text-cyan-400"
                          : log.startsWith("Error") || log.includes("failed")
                          ? "text-rose-500"
                          : log.startsWith("ssh-rsa") || log.startsWith("---")
                          ? "text-slate-300 font-bold"
                          : "text-slate-400"
                      }
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              {/* Macro Buttons / Actions */}
              <div className="bg-[#0b1222] border-t border-slate-900 p-4 grid grid-cols-3 gap-2.5 text-center font-mono text-[10px] sm:text-xs">
                <button
                  onClick={() => executeCommand("traceroute")}
                  className={`py-2 px-1 rounded border transition-all duration-300 cursor-pointer ${
                    activeCommand === "traceroute"
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                      : "border-slate-800 hover:border-slate-600 bg-[#070b13] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  ./traceroute
                </button>
                <button
                  onClick={() => executeCommand("sshkey")}
                  className={`py-2 px-1 rounded border transition-all duration-300 cursor-pointer ${
                    activeCommand === "sshkey"
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                      : "border-slate-800 hover:border-slate-600 bg-[#070b13] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  cat public_key
                </button>
                <button
                  onClick={() => executeCommand("credentials")}
                  className={`py-2 px-1 rounded border transition-all duration-300 cursor-pointer ${
                    activeCommand === "credentials"
                      ? "border-teal-500 bg-teal-500/10 text-teal-400"
                      : "border-slate-800 hover:border-slate-600 bg-[#070b13] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  ./credentials
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
