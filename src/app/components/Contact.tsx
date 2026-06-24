"use client";

import React, { useState } from "react";
import { Mail, Phone, Copy, Check, ExternalLink } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lohitavenkatesh@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+919360436504");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070b13]/40 border-t border-slate-900">
      <div className="absolute inset-0 grid-bg-fine opacity-10 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-12">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">// 05. CONTACT INFORMATION</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connect With Me
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mx-auto" />
        </div>

        <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed mb-12">
          I am actively seeking full-time Software Engineer or Full-Stack roles at product companies in India. Whether you have an opportunity or just want to discuss backend architecture and LLMs, let&apos;s talk.
        </p>

        {/* Contact Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          
          {/* Email Card */}
          <div className="p-5 rounded-xl border border-slate-800 bg-[#080d19] flex items-center justify-between group hover:border-slate-700 transition-all duration-300">
            <div className="flex items-center space-x-4 text-left">
              <div className="p-2.5 rounded bg-emerald-500/10 text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs">
                <span className="text-slate-500 block">EMAIL</span>
                <span className="text-slate-300 text-[13px] sm:text-sm">lohitavenkatesh@gmail.com</span>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded bg-[#0f182a] hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer shrink-0 ml-2"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-xl border border-slate-800 bg-[#080d19] flex items-center justify-between group hover:border-slate-700 transition-all duration-300">
            <div className="flex items-center space-x-4 text-left">
              <div className="p-2.5 rounded bg-teal-500/10 text-teal-400">
                <Phone className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs">
                <span className="text-slate-500 block">PHONE</span>
                <span className="text-slate-300 text-[13px] sm:text-sm">+91 93604 36504</span>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-2 rounded bg-[#0f182a] hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer shrink-0 ml-2"
              title="Copy phone to clipboard"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/lohita-venkatesan-37345125b"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-xl border border-slate-800 bg-[#080d19] hover:border-slate-700 hover:bg-[#0b1222] transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center space-x-4 text-left">
              <div className="p-2.5 rounded bg-cyan-500/10 text-cyan-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="font-mono text-xs">
                <span className="text-slate-500 block">LINKEDIN</span>
                <span className="text-slate-300 text-[13px] sm:text-sm">lohita-venkatesan</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors duration-200 mr-2" />
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/lohita181"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-xl border border-slate-800 bg-[#080d19] hover:border-slate-700 hover:bg-[#0b1222] transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center space-x-4 text-left">
              <div className="p-2.5 rounded bg-slate-800/80 text-slate-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="font-mono text-xs">
                <span className="text-slate-500 block">GITHUB</span>
                <span className="text-slate-300 text-[13px] sm:text-sm">lohita181</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors duration-200 mr-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
