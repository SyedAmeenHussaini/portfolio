import { Server, Cloud, GitBranch, Code, Shield, Activity, Brain, Terminal } from "lucide-react";
import Section from "./Section";

const skillCategories = [
  {
    title: "Infrastructure as code",
    icon: Server,
    skills: [
      "Terraform (import, modules, drift-free state)",
      "CloudFormation",
      "Ansible",
      "Docker / Docker Compose",
      "Kubernetes (EKS)",
      "ECS Fargate",
      "Helm",
      "ArgoCD",
    ],
  },
  {
    title: "Cloud platforms",
    icon: Cloud,
    skills: [
      "AWS EC2 / ECS Fargate / EKS / Lambda",
      "AWS ALB / API Gateway / S3 / RDS MySQL",
      "AWS ElastiCache Redis / SQS / Bedrock",
      "Azure App Services / Container Apps",
      "Azure Databricks / ADLS Gen2 / PostgreSQL",
      "GCP (Vertex AI / Cloud SQL / IAM / GCS)",
    ],
  },
  {
    title: "AI/ML and LLMOps",
    icon: Brain,
    skills: [
      "AWS Bedrock (Claude)",
      "vLLM / Ollama",
      "FastAPI inference",
      "MLflow / Model Registry",
      "Unity Catalog (Databricks)",
      "LangGraph agents",
      "RAG / pgvector",
      "Celery + Redis",
    ],
  },
  {
    title: "AI dev tools",
    icon: Terminal,
    skills: [
      "Cursor IDE",
      "Claude Agents (agentic workflows)",
      "Prompt engineering",
      "LLM-assisted IaC",
      "Automated runbook generation",
    ],
  },
  {
    title: "CI/CD and MLOps",
    icon: GitBranch,
    skills: [
      "GitHub Actions (multi-env)",
      "Jenkins",
      "GitLab CI",
      "Azure Pipelines",
      "Databricks Workflows",
      "SonarQube / CodeQL",
      "Dependabot",
      "Nx",
    ],
  },
  {
    title: "Backend and frontend",
    icon: Code,
    skills: ["Python / FastAPI", "Java Spring Boot", "React", "Node.js / Next.js", "TypeScript", "Shell / Bash", "YAML / HCL"],
  },
  {
    title: "Security and networking",
    icon: Shield,
    skills: [
      "IAM / RBAC",
      "Zero Trust (Cloudflare Access + OTP)",
      "AWS WAF & Shield",
      "PCI-DSS",
      "VPC isolation",
      "KMS / TLS / ACM",
      "DNSSEC",
      "Trivy / AWS Inspector",
      "Caddy / Nginx",
    ],
  },
  {
    title: "Observability and cost",
    icon: Activity,
    skills: [
      "CloudWatch (logs, metrics, alarms, dashboards)",
      "Prometheus / Grafana",
      "ELK Stack / PagerDuty",
      "Distributed tracing",
      "AWS Cost Explorer / Budgets",
      "Azure Cost Management",
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="The stack I run in production">
      <dl className="divide-y divide-line border-y border-line">
        {skillCategories.map((category) => (
          <div key={category.title} className="grid gap-3 py-5 md:grid-cols-[280px_1fr] md:gap-8">
            <dt className="flex items-center gap-2.5 text-[15px] font-medium text-fg">
              <category.icon size={18} strokeWidth={1.5} className="shrink-0 text-fg-3" />
              {category.title}
            </dt>
            <dd className="flex flex-wrap gap-x-5 gap-y-1.5 text-[15px] text-fg-2">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
