import Section from "./Section";

// `wide` cards span two columns on desktop; order them so the rows zigzag 2+1, 1+2, 1+2
const projects = [
  {
    title: "ARIES",
    subtitle: "Enterprise AI & Automation Test-Case Generation Platform",
    description:
      "Hybrid microservices platform — API gateway and AI analysis services on ECS Fargate, FastAPI and Next.js on EC2 — behind ALB routing with tenant isolation. Migrated LLM inference from self-hosted vLLM and Ollama to AWS Bedrock (Claude), brought 69 live AWS resources under Terraform, and cut non-production spend by ~40% with a serverless start/stop control panel.",
    tech: ["AWS ECS Fargate", "AWS Bedrock", "ALB", "SQS FIFO", "ElastiCache Redis", "RDS MySQL", "Lambda", "Terraform", "GitHub Actions", "Cloudflare Zero Trust"],
    status: "In production",
    wide: true,
  },
  {
    title: "LYFTRR",
    subtitle: "AI-Powered Career-Trajectory Platform",
    description:
      "Multi-service AI platform (Node + Next.js + FastAPI/Celery) on GCP — Vertex AI (Gemini 2.5 Flash) and Cloud SQL Postgres + pgvector powering a RAG pipeline, profile-based Docker Compose stack, Caddy TLS proxy, and Nx-gated GitHub Actions deploys over hardened SSH.",
    tech: ["GCP Vertex AI", "pgvector", "RAG", "Docker Compose", "Celery + Redis", "Caddy", "Nx", "GitHub Actions"],
    status: "In production",
  },
  {
    title: "LUMA",
    subtitle: "Conversational AI Platform",
    description:
      "LLM-powered conversational services using FastAPI and React on AWS Lambda (Docker). Reduced model rollout time by 60% through CI/CD automation with staging gates and distributed tracing; remediated an npm supply-chain attack with SHA pinning and Trivy gates.",
    tech: ["FastAPI", "React", "AWS Lambda", "Docker", "LLM", "Trivy", "CI/CD"],
    status: "In production",
  },
  {
    title: "AURORA",
    subtitle: "Analytics, MLOps & LLMOps Platform (Azure Databricks + Container Apps)",
    description:
      "Azure Databricks Lakehouse with medallion layers and Unity Catalog governance, plus 8 Container Apps provisioned with modular Terraform and keyless OIDC auth. LightGBM demand forecasting through MLflow Model Registry, DLT medallion ETL with 35 Metric Views, an ARQ + Redis task queue, and a LangGraph text-to-SQL agent.",
    tech: ["Azure Databricks", "Unity Catalog", "Azure Container Apps", "OIDC", "Terraform", "MLflow", "Delta Lake / DLT", "LangGraph", "Redis", "CodeQL"],
    status: "In production",
    wide: true,
  },
  {
    title: "AZTRA Website",
    subtitle: "Real-Time Production Website",
    description:
      "Production website on AWS EC2 with Next.js + Strapi, Nginx reverse proxy, Cloudflare CDN/WAF, and DDoS protection. Optimized availability and performance.",
    tech: ["Next.js", "Strapi", "AWS EC2", "Nginx", "Cloudflare"],
    status: "Live",
  },
  {
    title: "FlexiPayment",
    subtitle: "Fintech-Grade Cloud Infrastructure",
    description:
      "PCI-DSS-compliant AWS infrastructure for payment systems — multi-branch environment isolation (dev/staging/prod), Blue-Green/Canary deployments on ECS Fargate, WAF/Shield Advanced, SonarQube & Trivy gates, and 15–20% cost optimization.",
    tech: ["AWS ECS/EKS", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Docker", "SonarQube", "WAF/Shield", "CloudWatch"],
    status: "Completed",
    wide: true,
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Platforms I've shipped">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`flex flex-col rounded-2xl border border-line bg-card p-6 ${project.wide ? "lg:col-span-2" : ""}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-fg">{project.title}</h3>
                <p className="mt-1 text-sm text-fg-3">{project.subtitle}</p>
              </div>
              <span className="flex shrink-0 items-center gap-2 pt-1.5 font-mono text-xs text-fg-3">
                <span
                  className={`size-1.5 rounded-full ${project.status === "Completed" ? "bg-fg-3" : "bg-positive"}`}
                />
                {project.status}
              </span>
            </div>

            <p className="mt-4 flex-grow text-[15px] leading-7 text-fg-2">{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li key={t} className="rounded-md bg-raised px-2 py-1 font-mono text-xs text-fg-2">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
