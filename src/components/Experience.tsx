import Section from "./Section";

const experiences = [
  {
    company: "AZTRA",
    role: "Platform Engineer",
    location: "Remote – Columbus, US",
    period: "May 2025 – Present",
    type: "current",
    projects: [
      {
        name: "Project ARIES – Enterprise AI & Automation Test-Case Generation Platform",
        points: [
          "Architected and operate a hybrid microservices platform — containerized API gateway and AI analysis services on ECS Fargate, FastAPI backend and Next.js frontend on EC2 — behind ALB host/path routing with tenant isolation and Cloudflare WAF.",
          "Migrated LLM inference from self-hosted vLLM on EKS GPU node groups (Qwen) and private Ollama to AWS Bedrock (Claude), eliminating idle GPU cost while keeping an on-demand GPU serving path; aligned provider config, judge model-tier ladders and IAM InvokeModel policies across all environments.",
          "Authored an on-demand GPU vLLM serving design (golden AMI, ~$15/month parked, ~10 minutes to serving) as the reference recipe for client-site and air-gapped deployments.",
          "Imported the entire live AWS estate into Terraform — 69 resources across two running environments with drift-free plans — and refactored it into a reusable environment module (ECS cluster, services, target groups, queues, ECR, log groups).",
          "Provisioned a third environment end-to-end from that module — ECS cluster with 4 services, ALB with production-parity listener rules, SQS FIFO queues, ECR, dedicated ElastiCache Redis, tenant-isolated MySQL schemas, EC2 web/backend hosts and SSO (Azure Entra OIDC + Cloudflare DNS/WAF).",
          "Rebuilt the dev environment to full staging parity (ECS Fargate, ALB routing, SQS FIFO, ElastiCache Redis, shared RDS MySQL with per-tenant schemas) for the engineering team.",
          "Established branch-per-environment GitOps (dev → staging → prod, plus demo) with environment-scoped GitHub Actions variables to stop configuration bleed between environments.",
          "Right-sized shared RDS MySQL under live traffic after diagnosing connection-pool exhaustion across three environments (max_connections 61 → 305) — snapshot-first, zero-data-loss upgrade with a PITR safety net.",
          "Separated ElastiCache Redis per environment to end cross-environment job-queue interference, isolating the production-like environment without touching it.",
          "Built a serverless start/stop control panel (Lambda Function URL, scoped IAM with explicit production-deny, live ECS/EC2 status and failure detection) — cutting non-production cloud spend by ~$350/month (~40%).",
          "Debugged across layers in production (CloudWatch Logs, ALB listener rules, MySQL forensics): fixed an ALB hairpin routing loop, a gateway middleware kill-switch misconfiguration, and shared-CI variable overrides that silently disabled the test-generation planner.",
          "Hardened the edge with Cloudflare Zero Trust + OTP, DNSSEC, scoped WAF skip rules and device posture policies; built GitHub Actions + Terraform zero-touch pipelines with automated rollbacks.",
          "Used Cursor IDE and Claude Agents for Terraform module authoring, runbook automation and AI-assisted code reviews — cutting the delivery cycle by ~35%.",
          "Led and mentored 2 junior cloud engineers — weekly 1:1 IaC code reviews, Terraform module standards, GitOps onboarding and delegated ownership of non-critical microservices.",
          "Implemented AWS Cost Explorer + Budgets with SNS alerts, per-environment spend thresholds and monthly cost models used for sizing decisions; built per-service CloudWatch Log Groups with metric filters, error-rate alarms and Grafana dashboards for inference latency, API errors and GPU utilization.",
        ],
      },
      {
        name: "ARIES – troubleshooting",
        points: [
          "Monolith on a single EC2 instance, with full downtime on every deploy → decomposed services by domain, containerized each, and moved them to ECS Fargate behind ALB routing with per-service CI/CD, giving zero-downtime deploys and independent scaling.",
          "The AI test-generation judge pipeline silently produced no results in every environment → traced it through CloudWatch logs and MySQL to an unapplied per-tenant migration that made workers drop every queued job as a duplicate; applied the fix on owned environments and wrote the evidence-based report adopted upstream for production.",
        ],
      },
      {
        name: "Project AURORA – Analytics, MLOps & LLMOps Platform (Azure Databricks + Container Apps)",
        points: [
          "Designed an Azure Databricks Lakehouse (ADLS Gen2 medallion layers — Bronze/Silver/Gold) with Unity Catalog permissions and Azure AD role assignments for users, service principals and managed identities; multi-environment Terraform (dev → staging → prod) with environment-gated GitHub Actions approvals.",
          "Enforced Databricks cluster policies and Azure Cost Management budgets (80%/100% thresholds, email + Teams alerts); built Azure Monitor + Grafana dashboards for pipeline durations, model inference metrics and job failure rates.",
          "Built path-scoped GitHub Actions CI/CD (6 workflows, dorny/paths-filter) independently gating UI, FastAPI and Databricks changes; multi-stage Docker Buildx with GHA + registry layer caching and PR-time dry-run builds.",
          "Ran matrix deployments to Azure Container Apps — one aurora-api image serving 3 runtimes (API + 2 async workers) via a WORKER_MODE entrypoint dispatch with container healthchecks.",
          "Implemented keyless auth end-to-end: GitHub → Azure OIDC federated login with no stored cloud credentials, ACR pull via managed identity, Databricks OAuth M2M; immutable branch-sha7 image tags, dev/prod approval gates and automated GitHub Releases.",
          "Automated security and hygiene: CodeQL SAST (security-extended, weekly), Dependabot grouped updates across npm/pip/docker/actions, and auto-sync of main → dev to prevent branch drift.",
          "Authored modular Terraform (azurerm/azuread/azapi, remote state) for the full Azure platform — Container Apps, ACR, Log Analytics, Redis, managed identity, Postgres Flexible Server, Entra ID Easy Auth — with for_each provisioning 8 Container Apps; built a multi-cloud BYOC IaC skeleton (Azure/AWS/GCP).",
          "Operationalized a LightGBM demand-forecasting engine (per-cohort objectives, 10-horizon direct forecasting) with MLflow Model Registry on Unity Catalog and alias-based promotion; traced served-model calls across API and LLM agent with OpenTelemetry / Azure Monitor.",
          "Packaged ML training as versioned wheels via Databricks Asset Bundles; orchestrated multi-task Workflow Jobs (parallel fit → recursive 52-week forecast); built config-driven medallion ETL on PySpark/Delta Lake with DLT streaming tables and a semantic layer of 35 Metric Views.",
          "Ran an ARQ + Redis task queue for simulation compute with SKU-count-based routing, Redis pub/sub → SSE streaming and cron workers; deployed a LangGraph ReAct text-to-SQL agent on Databricks Foundation Model Serving with a SQL-safety allow-list.",
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
        name: "Project LYFTRR – AI-Powered Career-Trajectory Platform (DevOps & MLOps)",
        points: [
          "Owned CI/CD, containerization, cloud infrastructure and observability for a multi-service AI platform (Node + Next.js + FastAPI/Celery), from local dev parity through automated production deploys on GCP.",
          "Built a GitHub Actions pipeline (Nx build + lint, concurrency-gated, cached npm ci) gating every merge and driving zero-touch deploys to the VPS over hardened SSH.",
          "Containerized a 4-service stack with profile-based Docker Compose and multi-stage Dockerfiles with automatic DB migrations — one manifest runs identically on laptop, VPS and CI, deployed with a single idempotent command.",
          "Provisioned GCP ML infrastructure with reusable scripts — Vertex AI (Gemini 2.5 Flash), IAM/service accounts, Cloud SQL Postgres + pgvector (HNSW) — powering a RAG pipeline with a Celery + Redis worker tier.",
          "Configured Caddy as a TLS-terminating reverse proxy (three upstreams); designed trace-ID propagation via ASGI middleware with structured JSON logging, per-request latency and PII/secret redaction.",
        ],
      },
    ],
  },
  {
    company: "FlexiPayment Fintech",
    role: "Software Engineer",
    location: "Mumbai, India",
    period: "Feb 2024 – Oct 2024",
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
    company: "Meslogic IT Solutions",
    role: "Jr. Software Engineer",
    location: "Hyderabad, India (Remote)",
    period: "Sep 2021 – Nov 2023",
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

const leadership = [
  "Mentored and supervised junior cloud engineers across AZTRA and FlexiPayment — structured onboarding plans, ownership of cloud modules, and regular knowledge-sharing sessions on Terraform, Kubernetes and CI/CD.",
  "Established an IaC review culture — mandatory PR review and plan validation before any Terraform apply, plus team-wide naming, tagging and module-structure standards adopted across projects.",
  "Drove blameless postmortems after production issues, documenting root causes and action items so incidents like the supply-chain attack and Terraform race conditions became team-wide learning.",
];

const bullet =
  "relative pl-5 text-[15px] leading-7 text-fg-2 before:absolute before:top-[13px] before:left-0 before:h-px before:w-2.5 before:bg-fg-3";

export default function Experience() {
  return (
    <Section id="experience" title="4 years across AI, fintech and healthcare platforms">
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <article
            key={exp.company}
            className={`grid gap-6 md:grid-cols-[240px_1fr] md:gap-12 ${i > 0 ? "border-t border-line pt-12" : ""}`}
          >
            <header className="self-start md:sticky md:top-24">
              <h3 className="text-xl font-medium text-fg">{exp.company}</h3>
              <p className="mt-1 text-[15px] text-fg-2">{exp.role}</p>
              <p className="mt-4 font-mono text-[13px] leading-5 text-fg-3">{exp.period}</p>
              <p className="font-mono text-[13px] leading-5 text-fg-3">{exp.location}</p>
              {exp.type === "current" && (
                <p className="mt-4 flex items-center gap-2 text-[13px] text-fg-2">
                  <span className="size-2 rounded-full bg-positive" />
                  Current role
                </p>
              )}
            </header>

            <div className="space-y-8">
              {exp.projects.map((project) => (
                <div key={project.name}>
                  <h4 className="text-[15px] font-medium text-fg">{project.name}</h4>
                  <ul className="mt-3 space-y-2">
                    {project.points.map((point) => (
                      <li key={point} className={bullet}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}

        <article className="grid gap-6 border-t border-line pt-12 md:grid-cols-[240px_1fr] md:gap-12">
          <header>
            <h3 className="text-xl font-medium text-fg">Leadership</h3>
            <p className="mt-1 text-[15px] text-fg-2">Team development</p>
          </header>
          <ul className="space-y-2">
            {leadership.map((point) => (
              <li key={point} className={bullet}>
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
