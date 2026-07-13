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
        name: "Project ARIES - Enterprise AI & Automation Test Case Gen Platform",
        points: [
          "Architected a hybrid microservices platform (Java Spring Boot on ECS + FastAPI on EC2/EKS); migrated the monolithic EC2 platform to microservices on ECS Fargate with ALB-based routing, enabling zero-downtime deployments and independent scaling.",
          "Deployed vLLM on EKS with EC2 GPU node groups for high-throughput AI inference; set up a private Ollama LLM with API Gateway + ALB tenant isolation and Cloudflare WAF.",
          "Hardened the edge with Cloudflare Zero Trust + OTP, DNSSEC, and device posture policies; built GitHub Actions + Terraform zero-touch pipelines with automated rollbacks.",
          "Leveraged Cursor IDE & Claude Agents for Terraform module authoring, runbook automation, and AI-assisted code reviews — cutting delivery cycle by ~35%.",
          "Led and mentored 2 junior cloud engineers — weekly 1:1 IaC code reviews, Terraform module standards, and GitOps onboarding to accelerate team velocity.",
          "Implemented AWS Cost Explorer + AWS Budgets with SNS alerts and per-environment spend thresholds; built structured CloudWatch Log Groups, error-rate alarms, and Grafana dashboards for inference latency and GPU utilization.",
        ],
      },
      {
        name: "Project AURORA - Analytics, MLOps & Demand Forecasting Platform",
        points: [
          "Designed Azure Databricks Lakehouse architecture using ADLS Gen2 medallion layers (Bronze, Silver, Gold); provisioned multi-environment Terraform infra (dev/staging/prod) with GitHub Actions environment-gated approvals.",
          "Configured Unity Catalog with granular permissions and Azure AD IAM role assignments to users, service principals, and managed identities via Terraform.",
          "Implemented MLflow for the full experiment lifecycle with model versioning and controlled production promotion; automated Databricks Workflows for demand forecasting and batch inference.",
          "Enforced Databricks cluster policies and Azure Cost Management budgets with 80%/100% alert thresholds; built Azure Monitor queries and Grafana dashboards tracking pipeline durations and job failure rates.",
        ],
      },
      {
        name: "Project AURORA V2 - Azure Container Apps, MLOps & LLMOps Modernization",
        points: [
          "Built path-scoped GitHub Actions CI/CD (6 workflows) independently gating UI, FastAPI, and Databricks changes; multi-stage Docker Buildx with layer caching and PR-time dry-run builds.",
          "Ran matrix deployments to Azure Container Apps — one image serving 3 runtimes (API + 2 async workers) via a WORKER_MODE entrypoint dispatch pattern with container healthchecks.",
          "Implemented keyless auth end-to-end: GitHub → Azure OIDC federated login, ACR pull via managed identity, and Databricks OAuth M2M — with immutable image tags and dev/prod approval gates.",
          "Authored modular Terraform provisioning the full Azure platform (Container Apps, ACR, Log Analytics, Redis, Postgres Flexible Server, Entra ID) — 8 Container Apps across dev/prod with per-env autoscaling.",
          "Operationalized a LightGBM demand-forecasting engine with MLflow Model Registry on Unity Catalog; built config-driven medallion ETL on PySpark/Delta Lake with DLT streaming tables and 35 Metric Views.",
          "Automated CodeQL SAST and Dependabot grouped updates; ran an ARQ + Redis task queue with pub/sub → SSE streaming; deployed a LangGraph ReAct text-to-SQL agent on Databricks Foundation Model Serving.",
        ],
      },
      {
        name: "Project LUMA - Conversational AI & AZTRA Production Website",
        points: [
          "Built FastAPI + React LLM services on AWS Lambda (Docker); reduced model rollout time by 60% via automated CI/CD with staging gates and distributed tracing.",
          "Managed the Next.js + Python production site on EC2/Nginx with Cloudflare CDN, SSL, WAF, and DDoS protection; maintained 99.9% uptime SLA with PagerDuty/Slack alerting.",
          "Remediated a cryptographic supply-chain attack on CI builds — isolated compromised build nodes, rotated secrets, pinned npm dependencies to verified SHAs, enforced npm audit + Trivy gates, and migrated to ephemeral isolated build runners.",
        ],
      },
      {
        name: "Project LYFTRR - AI-Powered Career-Trajectory Platform (DevOps & MLOps)",
        points: [
          "Owned CI/CD, containerization, cloud infrastructure, and observability for a multi-service AI platform (Node + Next.js + FastAPI/Celery) with automated production deploys on GCP.",
          "Containerized a 4-service stack with profile-based Docker Compose — one manifest runs identically on laptop, dev VPS, and CI — with healthchecks, dependency ordering, and single-command deploys.",
          "Provisioned GCP ML infrastructure — Vertex AI (Gemini 2.5 Flash) with IAM setup and Cloud SQL Postgres + pgvector (HNSW) — powering a RAG pipeline with a Celery + Redis async worker tier.",
          "Configured Caddy as TLS-terminating reverse proxy; designed trace-ID propagation via ASGI middleware with structured JSON logging and PII/secret redaction.",
        ],
      },
    ],
  },
  {
    company: "FLEXIPAYMENT FINTECH",
    role: "Software Engineer",
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
          "Secured cloud environments by managing granular IAM policies, KMS encryption, and PCI-DSS-compliant network configurations for payment workloads.",
          "Integrated AWS WAF, Shield Advanced, Trivy, and rate limiting to protect APIs from DDoS attacks and malicious traffic.",
          "Implemented private networking with NAT Gateways, VPC endpoints, restricted outbound traffic, and ACM-managed TLS with encryption in transit and at rest.",
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
        name: "Multi-Branch Deployment Strategy",
        points: [
          "Replaced a single-production-branch workflow (all developers committing directly to prod) with a multi-branch Git strategy across dev, staging, and prod environments.",
          "Provisioned dedicated Terraform workspaces and AWS infrastructure per environment with environment-gated GitHub Actions pipelines requiring PR review + automated test gates before promotion.",
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
  {
    company: "MESLOGIC IT SOLUTIONS",
    role: "Jr. Software Engineer",
    location: "Hyderabad, India (Remote)",
    period: "09/2021 - 11/2023",
    type: "past",
    projects: [
      {
        name: "Kubernetes & CI/CD Operations",
        points: [
          "Assisted in managing Kubernetes (EKS) clusters — applied namespace isolation, RBAC policies, and ALB Ingress configuration under senior guidance for LMS and healthcare platform workloads.",
          "Supported operations of Redis caching clusters and contributed to building Jenkins + GitHub Actions CI/CD pipelines for containerised services — first hands-on experience with production deployment automation.",
        ],
      },
      {
        name: "Monitoring & Cost Visibility",
        points: [
          "Helped set up CloudWatch, Prometheus & Grafana monitoring; configured metric-based alerts and assisted in improving incident response time across multiple product teams.",
          "Proposed and implemented the team's first cost visibility practice — introduced CloudWatch Log Groups and AWS Budget billing alerts after noticing untracked spend.",
        ],
      },
      {
        name: "Initiative - Terraform IaC Adoption",
        points: [
          "Noticed all AWS infrastructure was created manually through the Console — no consistency, no version control, and environments drifted with no way to reproduce them.",
          "Self-studied Terraform, imported existing AWS resources into Terraform state, and gradually rewrote infrastructure as modular Terraform code (networking, compute, IAM, storage) with remote state in S3 + DynamoDB locking — giving the team version-controlled, repeatable infrastructure for the first time.",
        ],
      },
      {
        name: "Initiative - Zero Trust Access for Internal Tools",
        points: [
          "Identified that internal tools were publicly accessible via URL with no authentication; researched the security risk and raised it with the team lead.",
          "Proposed and configured Cloudflare Zero Trust Access with email-domain-based authentication, OTP verification, and device posture checks — securing all internal apps without major infrastructure changes.",
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
