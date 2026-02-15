"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Shield, Cpu, Rocket, Server, GitBranch, Activity, Lock } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Multi-cloud platform design across AWS & Azure with high availability",
    color: "from-[#00e5ff] to-[#0ea5e9]",
    iconColor: "text-[#00e5ff]",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Fintech-grade infrastructure security, IAM, encryption & WAF",
    color: "from-[#7c3aed] to-[#a78bfa]",
    iconColor: "text-[#7c3aed]",
  },
  {
    icon: Cpu,
    title: "AI/ML Platform Ops",
    description: "LLM deployment, MLflow pipelines & Databricks Lakehouse",
    color: "from-[#00ff88] to-[#34d399]",
    iconColor: "text-[#00ff88]",
  },
  {
    icon: Rocket,
    title: "CI/CD Automation",
    description: "Zero-downtime deployments with Blue-Green & Canary strategies",
    color: "from-[#ffb800] to-[#f59e0b]",
    iconColor: "text-[#ffb800]",
  },
];

const stats = [
  { icon: Server, value: "10+", label: "Projects Shipped", color: "text-[#00e5ff]" },
  { icon: GitBranch, value: "500+", label: "Deployments", color: "text-[#00ff88]" },
  { icon: Activity, value: "99.9%", label: "Uptime SLA", color: "text-[#ffb800]" },
  { icon: Lock, value: "5", label: "Certifications", color: "text-[#7c3aed]" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/5 dark:bg-[#00e5ff]/5 border border-sky-400/10 dark:border-[#00e5ff]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 dark:bg-[#00e5ff]" />
            <span className="text-xs text-sky-400 dark:text-[#00e5ff] font-mono uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Building <span className="gradient-text">Scalable</span> Cloud Platforms
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I&apos;m a Platform and DevOps Engineer available remotely worldwide and on-site in Hyderabad, Pune &amp; Bangalore,
            passionate about designing, securing, and operating cloud-native
            platforms and enterprise production systems. I specialize in building
            highly available systems, securing payment platforms, and deploying
            scalable AI backends.
          </p>
        </motion.div>

        {/* Highlight cards - infrastructure dashboard feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="terminal-card p-5 group"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10 flex items-center justify-center mb-4`}
                style={{ background: `linear-gradient(135deg, ${item.color.includes('00e5ff') ? 'rgba(0,229,255,0.1)' : item.color.includes('7c3aed') ? 'rgba(124,58,237,0.1)' : item.color.includes('00ff88') ? 'rgba(0,255,136,0.1)' : 'rgba(255,184,0,0.1)'}` }}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <h3 className="font-semibold text-white mb-1.5 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats - dashboard metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="terminal-card p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <Activity size={14} className="text-sky-400 dark:text-[#00e5ff]" />
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">System Metrics</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2 opacity-60`} />
                <div className={`text-2xl sm:text-3xl font-bold font-mono ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
