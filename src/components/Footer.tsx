"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-[#0b1120] dark:bg-[#060a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#7c3aed] flex items-center justify-center">
                <Terminal size={14} className="text-white" />
              </div>
              <span className="font-bold text-sm text-white">
                Ameen<span className="text-sky-400 dark:text-[#00e5ff]">.</span>
              </span>
            </a>
            <p className="text-[10px] text-gray-500 font-mono">
              Cloud &amp; DevOps Engineer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/SyedAmeenHussaini" },
              { icon: Linkedin, href: "https://linkedin.com/in/syed-ameen-hussaini-6b2b08215" },
              { icon: Mail, href: "mailto:syedameenhussaini3@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 rounded-md bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-sky-400 dark:hover:text-[#00e5ff] hover:bg-sky-400/5 dark:hover:bg-[#00e5ff]/5 hover:border-sky-400/20 dark:hover:border-[#00e5ff]/20 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-gray-600 font-mono flex items-center gap-2">
            <span className="text-emerald-400 dark:text-[#00ff88]">&gt;</span>
            Built by Syed Ameen Hussaini &copy; 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
