import { Cloud, Shield, Cpu, Rocket } from "lucide-react";
import Section from "./Section";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud architecture",
    description: "Multi-cloud platform design across AWS, Azure and GCP with high availability",
  },
  {
    icon: Shield,
    title: "Security and compliance",
    description: "Fintech-grade infrastructure security, IAM, encryption and WAF",
  },
  {
    icon: Cpu,
    title: "AI/ML platform ops",
    description: "AWS Bedrock (Claude), vLLM and Ollama serving, MLflow pipelines and Databricks Lakehouse",
  },
  {
    icon: Rocket,
    title: "CI/CD automation",
    description: "Zero-downtime deployments with Blue-Green and Canary strategies",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime on delivered platforms" },
  { value: "60%", label: "Faster model rollouts with staged CI/CD" },
  { value: "69", label: "Live AWS resources imported into Terraform" },
  { value: "~40%", label: "Less non-prod spend, about $350 a month" },
];

export default function About() {
  return (
    <Section
      id="about"
      title="Platforms that stay up, stay secure and stay on budget"
      intro="I'm a Platform and Cloud DevOps Engineer with 4 years of experience architecting, securing and scaling cloud-native platforms across AWS and Azure. I've migrated monolithic EC2 architectures to microservices on ECS, set up dev → staging → prod deployment strategies, enforced Zero Trust access and remediated supply-chain attacks, and I mentor junior cloud engineers through code and IaC reviews."
    >
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <ul className="divide-y divide-line border-y border-line">
          {highlights.map((item) => (
            <li key={item.title} className="flex gap-4 py-5">
              <item.icon size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-fg-3" />
              <div>
                <h3 className="text-[15px] font-medium text-fg">{item.title}</h3>
                <p className="mt-1 text-[15px] leading-6 text-fg-2">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-line bg-line">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col justify-between gap-3 bg-card p-6">
              <dt className="text-[13px] leading-5 text-fg-3">{stat.label}</dt>
              <dd className="text-3xl font-medium text-fg tabular-nums">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
