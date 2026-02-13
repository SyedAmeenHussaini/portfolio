"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  BarChart3,
  MessageSquare,
  Globe,
  CreditCard,
  ArrowUpRight,
  Circle,
} from "lucide-react";

const projects = [
  {
    title: "ARIES",
    subtitle: "Enterprise AI & Automation Platform",
    description:
      "Hybrid microservices platform combining Java Spring Boot on AWS ECS with FastAPI-based AI services. Features private LLM deployment, API Gateway with tenant isolation, and zero-touch deployments.",
    tech: [
      "AWS ECS",
      "EC2",
      "Lambda",
      "Spring Boot",
      "FastAPI",
      "Ollama",
      "Terraform",
      "GitHub Actions",
    ],
    icon: Brain,
    status: "production",
    color: "#00e5ff",
  },
  {
    title: "AURORA",
    subtitle: "Unified Analytics & MLOps Platform",
    description:
      "Azure Databricks Lakehouse architecture with ADLS Gen2 medallion layers. MLflow integration for experiment tracking, model versioning, and automated training pipelines.",
    tech: [
      "Azure Databricks",
      "ADLS Gen2",
      "MLflow",
      "Azure Pipelines",
      "PySpark",
    ],
    icon: BarChart3,
    status: "production",
    color: "#7c3aed",
  },
  {
    title: "LUMA",
    subtitle: "Conversational AI Platform",
    description:
      "LLM-powered conversational services using FastAPI and React. Containerized inference on AWS Lambda with Docker. Reduced model rollout time by 60% through CI/CD automation.",
    tech: [
      "FastAPI",
      "React",
      "AWS Lambda",
      "Docker",
      "LLM",
      "CI/CD",
    ],
    icon: MessageSquare,
    status: "production",
    color: "#00ff88",
  },
  {
    title: "AZTRA Website",
    subtitle: "Real-Time Production Website",
    description:
      "Production website on AWS EC2 with Next.js + Strapi, Nginx reverse proxy, Cloudflare CDN/WAF, and DDoS protection. Optimized availability and performance.",
    tech: [
      "Next.js",
      "Strapi",
      "AWS EC2",
      "Nginx",
      "Cloudflare",
    ],
    icon: Globe,
    status: "live",
    color: "#f59e0b",
  },
  {
    title: "FlexiPayment",
    subtitle: "Fintech-Grade Cloud Infrastructure",
    description:
      "Scalable, secure AWS infrastructure for fintech web apps — featuring CI/CD with Jenkins & GitHub Actions, Blue-Green/Canary deployments on ECS Fargate, SonarQube quality gates, and 15–20% cost optimization.",
    tech: [
      "AWS ECS/EKS",
      "Terraform",
      "Ansible",
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "SonarQube",
      "WAF/Shield",
      "CloudWatch",
    ],
    icon: CreditCard,
    status: "completed",
    color: "#f43f5e",
  },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "production":
      return { label: "Production", color: "#00ff88", bg: "bg-[#00ff88]/10", border: "border-[#00ff88]/20" };
    case "live":
      return { label: "Live", color: "#00ff88", bg: "bg-[#00ff88]/10", border: "border-[#00ff88]/20" };
    case "completed":
      return { label: "Completed", color: "#00e5ff", bg: "bg-[#00e5ff]/10", border: "border-[#00e5ff]/20" };
    default:
      return { label: "Active", color: "#ffb800", bg: "bg-[#ffb800]/10", border: "border-[#ffb800]/20" };
  }
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/5 dark:bg-[#00e5ff]/5 border border-sky-400/10 dark:border-[#00e5ff]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 dark:bg-[#00e5ff]" />
            <span className="text-xs text-sky-400 dark:text-[#00e5ff] font-mono uppercase tracking-wider">
              Infrastructure Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const statusConfig = getStatusConfig(project.status);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * (i + 1) }}
                className="terminal-card p-0 flex flex-col group"
              >
                {/* Terminal header */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">
                    {project.title.toLowerCase().replace(/\s/g, '-')}.infra
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="text-gray-600 group-hover:text-sky-400 dark:group-hover:text-[#00e5ff] transition-colors"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${project.color}15` }}
                      >
                        <project.icon
                          className="w-5 h-5"
                          style={{ color: project.color }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">{project.title}</h3>
                        <p className="text-[11px] text-gray-500">{project.subtitle}</p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${statusConfig.bg} ${statusConfig.border} border`}>
                      <Circle size={5} fill={statusConfig.color} style={{ color: statusConfig.color }} />
                      <span className="text-[9px] font-mono uppercase" style={{ color: statusConfig.color }}>
                        {statusConfig.label}
                      </span>
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.03] border border-white/[0.06] text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
