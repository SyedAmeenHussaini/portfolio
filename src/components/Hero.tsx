"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Server, Cloud, Shield, GitBranch } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const codeLines = [
  { prefix: "$ ", text: "kubectl get pods --all-namespaces", delay: 0 },
  { prefix: "  ", text: "NAME                    READY   STATUS    RESTARTS", delay: 0.8, dim: true },
  { prefix: "  ", text: "api-gateway-7d4f8       1/1     Running   0", delay: 1.2, dim: true },
  { prefix: "  ", text: "auth-service-3b2c1      1/1     Running   0", delay: 1.6, dim: true },
  { prefix: "$ ", text: "terraform apply -auto-approve", delay: 2.2 },
  { prefix: "  ", text: "Apply complete! Resources: 12 added, 0 changed, 0 destroyed.", delay: 3.0, green: true },
  { prefix: "$ ", text: "docker push registry.io/app:v2.1.0 ✓", delay: 3.8 },
];

const floatingIcons = [
  { Icon: Server, x: "10%", y: "20%", delay: 0 },
  { Icon: Cloud, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Shield, x: "75%", y: "75%", delay: 1 },
  { Icon: GitBranch, x: "15%", y: "70%", delay: 1.5 },
  { Icon: Terminal, x: "90%", y: "45%", delay: 2 },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = codeLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), (line.delay + 0.5) * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/deploy-bg.mp4" type="video/mp4" />
      </video>

      {/* Video overlay */}
      <div className="video-overlay" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-sky-500/8 dark:bg-[#00e5ff]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-violet-500/8 dark:bg-[#7c3aed]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block text-sky-400/[0.06] dark:text-[#00e5ff]/[0.07] pointer-events-none"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={40 + i * 5} strokeWidth={1} />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-sky-400 dark:from-[#00e5ff] to-violet-500 dark:to-[#7c3aed] opacity-60 blur-sm" />
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-900 dark:border-[#0a0e1a]">
                  <Image src="/profile.jpeg" alt="Syed Ameen Hussaini" fill className="object-cover" priority />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 dark:bg-[#00ff88]/10 border border-emerald-400/20 dark:border-[#00ff88]/20 w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-[#00ff88] status-live" />
                  <span className="text-xs text-emerald-400 dark:text-[#00ff88] font-mono font-medium">AVAILABLE FOR HIRE</span>
                </div>
                <span className="text-xs text-gray-500 font-mono">Hyderabad, India</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3"
            >
              <span className="text-white">Syed </span>
              <span className="gradient-text">Ameen</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <span className="text-sky-400 dark:text-[#00e5ff] font-mono text-sm">&gt;_</span>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 font-mono">Cloud &amp; DevOps Engineer</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-gray-400 max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Architecting cloud-native platforms, automating infrastructure at scale,
              and building secure CI/CD pipelines. Specialized in AWS, Azure, Kubernetes,
              Terraform, and AI/ML platform operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-8 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-sky-400 dark:from-[#00e5ff] to-violet-500 dark:to-[#7c3aed] text-white font-medium text-sm hover:shadow-xl hover:shadow-sky-500/20 transition-all hover:scale-105"
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-medium text-sm hover:bg-white/5 hover:border-sky-400/30 dark:hover:border-[#00e5ff]/30 transition-all hover:scale-105"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
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
                  className="p-2.5 rounded-lg bg-white/5 border border-gray-800 text-gray-400 hover:text-sky-400 dark:hover:text-[#00e5ff] hover:bg-sky-400/5 dark:hover:bg-[#00e5ff]/5 hover:border-sky-400/30 dark:hover:border-[#00e5ff]/30 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="terminal-card p-0 glow-cyan">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                <div className="terminal-dots"><span /><span /><span /></div>
                <span className="text-xs text-gray-500 font-mono">ameen@cloud ~ /infra</span>
                <div className="w-16" />
              </div>
              <div className="p-5 font-mono text-sm space-y-1 min-h-[240px]">
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={line.green ? "text-emerald-400 dark:text-[#00ff88]" : line.dim ? "text-gray-500" : "text-gray-300"}
                  >
                    <span className={line.prefix === "$ " ? "text-sky-400 dark:text-[#00e5ff]" : ""}>{line.prefix}</span>
                    {line.text}
                  </motion.div>
                ))}
                <div className="flex items-center">
                  <span className="text-sky-400 dark:text-[#00e5ff]">$ </span>
                  <span className="w-2 h-4 bg-sky-400 dark:bg-[#00e5ff] cursor-blink ml-0.5" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: "Uptime", value: "99.9%", color: "text-emerald-400 dark:text-[#00ff88]" },
                { label: "Deployments", value: "500+", color: "text-sky-400 dark:text-[#00e5ff]" },
                { label: "Services", value: "Live", color: "text-amber-400 dark:text-[#ffb800]" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="terminal-card px-3 py-2.5 text-center"
                >
                  <div className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-sky-400 dark:hover:text-[#00e5ff] transition-colors">
          <span className="text-[10px] font-mono tracking-wider uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
