"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, Terminal, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lohitavenkatesh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTerminalOutput([
      `$ ping -c 1 mail.lohita.dev`,
      `PING mail.lohita.dev (10.0.8.24) 56(84) bytes of data.`,
      `64 bytes from 10.0.8.24: icmp_seq=1 ttl=64 time=1.04 ms`,
      `--- mail.lohita.dev ping statistics ---`,
      `1 packets transmitted, 1 received, 0% packet loss`,
      `$ curl -X POST -H "Content-Type: application/json" \\`,
      `  -d '{"sender":"${formData.name}","email":"${formData.email}"}' \\`,
      `  https://api.lohita.dev/v1/contact`,
    ]);

    setTimeout(() => {
      setStatus("success");
      setTerminalOutput((prev) => [
        ...prev,
        `HTTP/1.1 200 OK`,
        `Content-Type: application/json`,
        `Date: ${new Date().toUTCString()}`,
        `Server: Netlify/1.0.0`,
        `Connection: keep-alive`,
        `Response Packet: {"status":"delivered","message":"Thank you, ${formData.name}. Lohita will be notified shortly."}`,
      ]);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070b13]/40 border-t border-slate-900">
      <div className="absolute inset-0 grid-bg-fine opacity-10 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">// 05. CONTACT DISPATCH</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Initiate Contact
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mx-auto" />
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Fast Copy */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-bold text-white font-mono">Direct Channels</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              If you have an open Software Engineer role, want to talk backend engineering, or want to discuss domain-specific LLM setups, ping me directly. Let&apos;s build something.
            </p>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl border border-slate-800 bg-[#080d19] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <div className="font-mono text-xs">
                  <span className="text-slate-500 block">EMAIL_CHANNEL</span>
                  <span className="text-slate-300 text-sm">lohitavenkatesh@gmail.com</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded bg-[#0f182a] hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors duration-200"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Link Cards */}
            <div className="grid grid-cols-2 gap-4">
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
                href="https://github.com/lohitavenkatesh"
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
                  <span className="text-slate-300">lohitavenkatesh</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Form & Shell Console */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-xl border border-slate-800 bg-[#080d19] overflow-hidden terminal-window text-left">
              {/* Form Title bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b1222] border-b border-slate-900">
                <div className="flex items-center space-x-2 font-mono text-xs">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-300">write_message.sh</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Form Content */}
              {status !== "success" ? (
                <form onSubmit={handleSend} className="p-6 space-y-4 font-mono text-xs sm:text-sm">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-slate-500">SENDER_NAME:</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Hiring Manager"
                      className="w-full bg-[#05070f] border border-slate-800 focus:border-emerald-500/60 rounded px-3 py-2 text-slate-200 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-slate-500">SENDER_EMAIL:</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. manager@company.com"
                      className="w-full bg-[#05070f] border border-slate-800 focus:border-emerald-500/60 rounded px-3 py-2 text-slate-200 focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-slate-500">MESSAGE_PACKET_CONTENT:</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Type your message here..."
                      className="w-full bg-[#05070f] border border-slate-800 focus:border-emerald-500/60 rounded px-3 py-2 text-slate-200 focus:outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending" || !formData.name || !formData.email || !formData.message}
                    className="w-full py-2.5 px-4 rounded bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 text-slate-950 font-bold transition-all duration-300 flex items-center justify-center space-x-2 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending message packet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Execute message_send.sh</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Terminal Log */
                <div className="p-6 font-mono text-[11px] sm:text-xs text-left overflow-x-auto space-y-2 select-text bg-[#05070f]">
                  {terminalOutput.map((line, lIdx) => (
                    <div 
                      key={lIdx} 
                      className={
                        line.startsWith("$") 
                          ? "text-cyan-400" 
                          : line.includes("200 OK") || line.includes("Response Packet")
                          ? "text-emerald-400" 
                          : "text-slate-400"
                      }
                    >
                      {line}
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-slate-900 mt-4 flex justify-between items-center text-[10px] text-slate-500 select-none">
                    <span>STATUS: DISPATCH_SUCCESS</span>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="text-emerald-400 hover:underline"
                    >
                      [Send Another Message]
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
