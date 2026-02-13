"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, Calendar, ChevronRight, Circle } from "lucide-react";

const experiences = [
  {
    company: "AZTRA",
    role: "Platform Engineer",
    location: "Remote - Columbus, United States",
    period: "05/2025 - Present",
    type: "current",
    projects: [
      {
        name: "Project ARIES - Enterprise AI & Automation Platform",
        points: [
          "Architected a hybrid microservices platform combining Java Spring Boot services on AWS ECS with FastAPI-based AI services on EC2 and AWS Lambda.",
          "Deployed and managed private Ollama-based LLM models on EC2 for secure, in-house inference workloads.",
          "Designed API Gateway + ALB architecture with tenant isolation, rate limiting, and Cloudflare WAF integration.",
          "Implemented GitHub Actions + Terraform pipelines enabling zero-touch deployments and rollbacks.",
        ],
      },
      {
        name: "Project AURORA - Unified Analytics & MLOps Platform",
        points: [
          "Designed Azure Databricks Lakehouse architecture using ADLS Gen2 (Bronze, Silver, Gold).",
          "Implemented MLflow for experiment tracking, model versioning, and controlled promotion to production.",
          "Automated training, batch inference, and deployments using Databricks Workflows and Azure Pipelines.",
        ],
      },
      {
        name: "Project LUMA - Conversational AI Platform",
        points: [
          "Built LLM-powered conversational services using FastAPI and React for real-time interactions.",
          "Containerized inference services and deployed on AWS Lambda using Docker images.",
          "Reduced model rollout time by 60% through automated CI/CD pipelines.",
        ],
      },
      {
        name: "AZTRA - Real-Time Production Website",
        points: [
          "Managed AZTRA's production website (Next.js + Strapi) on AWS EC2 with Nginx reverse proxy.",
          "Integrated Cloudflare for DNS, CDN caching, SSL, WAF, and DDoS protection.",
          "Improved availability, performance, and security through caching and firewall policies.",
        ],
      },
    ],
  },
  {
    company: "FLEXIPAYMENT FINTECH",
    role: "DevOps Engineer",
    location: "Mumbai, India",
    period: "02/2024 - 10/2024",
    type: "past",
    projects: [
      {
        name: "Cloud Infrastructure & Architecture",
        points: [
          "Designed and maintained scalable AWS infrastructure leveraging EC2, S3, ECS, EKS, EBS, ELB, Lambda, Elastic Beanstalk, RDS, CloudWatch, IAM, and VPC for fintech web applications.",
          "Architected strict environment isolation with separate VPCs, subnets, NAT Gateways, VPC endpoints, and security groups for production-grade payment systems.",
          "Optimized cloud costs by 15–20% through resource right-sizing, auto-scaling policies, and reserved capacity planning.",
        ],
      },
      {
        name: "Security & Compliance",
        points: [
          "Secured cloud environments by managing granular IAM policies, KMS encryption, and network configurations aligned with fintech compliance requirements.",
          "Integrated AWS WAF, Shield, and rate limiting to protect APIs from DDoS attacks and malicious traffic.",
          "Implemented private networking with restricted outbound traffic and encrypted data-in-transit/at-rest across all services.",
        ],
      },
      {
        name: "CI/CD & Deployment Automation",
        points: [
          "Developed and maintained CI/CD pipelines for a three-tier web application using Jenkins, GitHub Actions, and Docker, reducing deployment time significantly.",
          "Built Blue-Green and Canary deployment strategies on AWS ECS Fargate ensuring zero-downtime releases for payment-critical services.",
          "Integrated SonarQube for continuous code quality checks, static analysis, and automated reporting within the pipeline.",
        ],
      },
      {
        name: "Infrastructure as Code & Observability",
        points: [
          "Automated infrastructure provisioning and configuration management using Terraform and Ansible, eliminating manual drift.",
          "Enabled high availability and observability using CloudWatch dashboards, custom metrics, alarms, and centralized log aggregation.",
          "Collaborated closely with developers to ensure smooth deployments, fast iteration cycles, and rapid incident resolution.",
        ],
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/5 dark:bg-[#00e5ff]/5 border border-sky-400/10 dark:border-[#00e5ff]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 dark:bg-[#00e5ff]" />
            <span className="text-xs text-sky-400 dark:text-[#00e5ff] font-mono uppercase tracking-wider">
              Deployment History
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Pipeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px">
            <div className="h-full bg-gradient-to-b from-sky-400/40 dark:from-[#00e5ff]/40 via-[#7c3aed]/40 to-transparent" />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
                className="relative pl-12 md:pl-20"
              >
                {/* Pipeline node */}
                <div className="absolute left-2 md:left-6 top-5">
                  {exp.type === "current" ? (
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-emerald-400 dark:bg-[#00ff88] border-2 border-[#0a0e1a]" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-emerald-400 dark:bg-[#00ff88] animate-node-pulse" />
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-gray-700 border-2 border-[#0a0e1a] ring-1 ring-gray-600" />
                  )}
                </div>

                {/* Company card */}
                <div className="terminal-card overflow-visible">
                  {/* Card header bar */}
                  <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building2 size={16} className="text-sky-400 dark:text-[#00e5ff]" />
                      <h3 className="font-bold text-white text-lg">{exp.company}</h3>
                      {exp.type === "current" && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-400/10 dark:bg-[#00ff88]/10 border border-emerald-400/20 dark:border-[#00ff88]/20">
                          <Circle size={6} fill="currentColor" className="text-emerald-400 dark:text-[#00ff88] status-live" />
                          <span className="text-[10px] font-mono text-emerald-400 dark:text-[#00ff88] uppercase">Active</span>
                        </span>
                      )}
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-xs text-gray-400 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="px-5 py-2 border-b border-white/5 bg-white/[0.02]">
                    <span className="text-sky-400 dark:text-[#00e5ff] font-mono text-sm">{exp.role}</span>
                    <div className="sm:hidden flex items-center gap-4 text-xs text-gray-400 font-mono mt-1">
                      <span className="flex items-center gap-1"><MapPin size={10} />{exp.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={10} />{exp.period}</span>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="p-5 space-y-5">
                    {exp.projects.map((project) => (
                      <div key={project.name}>
                        <h4 className="text-xs font-semibold text-[#7c3aed] mb-2.5 flex items-center gap-2 font-mono uppercase tracking-wider">
                          <ChevronRight size={12} className="text-[#7c3aed]" />
                          {project.name}
                        </h4>
                        <ul className="space-y-1.5 ml-4">
                          {project.points.map((point, j) => (
                            <li
                              key={j}
                              className="text-sm text-gray-400 leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-sky-400/40 dark:before:text-[#00e5ff]/40 before:text-xs"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
