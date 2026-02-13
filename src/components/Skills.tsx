"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Server,
  Cloud,
  GitBranch,
  Code,
  Shield,
  Activity,
} from "lucide-react";

const skillCategories = [
  {
    title: "Infrastructure & Automation",
    icon: Server,
    color: "#00e5ff",
    skills: [
      { name: "Terraform", level: 95 },
      { name: "Docker", level: 92 },
      { name: "Kubernetes (EKS/ECS)", level: 90 },
      { name: "Ansible", level: 85 },
      { name: "Helm", level: 82 },
      { name: "ArgoCD", level: 78 },
      { name: "CloudFormation", level: 80 },
    ],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    color: "#7c3aed",
    skills: [
      { name: "AWS EC2 / ECS / Lambda", level: 95 },
      { name: "AWS S3 / IAM / VPC", level: 93 },
      { name: "AWS API Gateway / ALB", level: 88 },
      { name: "Azure Databricks", level: 85 },
      { name: "Azure ADLS / Pipelines", level: 83 },
      { name: "Elastic Beanstalk / RDS", level: 80 },
    ],
  },
  {
    title: "CI/CD & MLOps",
    icon: GitBranch,
    color: "#00ff88",
    skills: [
      { name: "GitHub Actions", level: 95 },
      { name: "Jenkins", level: 88 },
      { name: "Azure DevOps", level: 82 },
      { name: "MLflow", level: 80 },
      { name: "SonarQube", level: 78 },
    ],
  },
  {
    title: "Backend & Scripting",
    icon: Code,
    color: "#f59e0b",
    skills: [
      { name: "Python / FastAPI", level: 90 },
      { name: "Shell / Bash", level: 92 },
      { name: "Java Spring Boot", level: 75 },
      { name: "Node.js / Next.js", level: 78 },
      { name: "YAML / HCL", level: 95 },
    ],
  },
  {
    title: "Security & Networking",
    icon: Shield,
    color: "#f43f5e",
    skills: [
      { name: "IAM Policies", level: 92 },
      { name: "VPC / Subnets", level: 90 },
      { name: "WAF / Shield", level: 85 },
      { name: "Cloudflare", level: 87 },
      { name: "TLS / SSL / Nginx", level: 85 },
      { name: "Trivy", level: 78 },
    ],
  },
  {
    title: "Observability",
    icon: Activity,
    color: "#ffb800",
    skills: [
      { name: "CloudWatch", level: 92 },
      { name: "Prometheus", level: 82 },
      { name: "Grafana", level: 85 },
      { name: "ELK Stack", level: 78 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e5ff]/[0.02] to-transparent pointer-events-none" />

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
              Tech Arsenal
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * (i + 1) }}
              className="terminal-card p-0"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${category.color}15` }}
                >
                  <category.icon className="w-4 h-4" style={{ color: category.color }} />
                </div>
                <h3 className="font-semibold text-white text-sm">{category.title}</h3>
              </div>

              {/* Skills with progress bars */}
              <div className="px-5 py-4 space-y-3">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.08 * i + 0.05 * j }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-300 font-mono">{skill.name}</span>
                      <span className="text-[10px] text-gray-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + 0.05 * j, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
