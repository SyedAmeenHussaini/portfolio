import Section from "./Section";

const certifications = [
  {
    name: "AWS Databricks Platform Architect",
    issuer: "Databricks",
    year: "2025",
    credentialId: "170392764",
    image: "/cert-databricks-aws.png",
  },
  { name: "Databricks Fundamentals", issuer: "Databricks", year: "2025", image: "/cert-databricks.png" },
  { name: "Certified Agile Scrum Master", issuer: "Washington University EDU", year: "2025", image: "/cert-scrum.png" },
  { name: "Microsoft Azure AZ-400 DevOps Professional", issuer: "Microsoft", year: "2023", image: "/cert-azure.jpg" },
  { name: "Oracle Cloud Infrastructure DevOps Professional", issuer: "Oracle", year: "2023", image: "/cert-oracle.png" },
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    score: "7.8 CGPA",
    institution: "Dr. Babasaheb Ambedkar Technological University, Lonere",
    year: "2023",
  },
  { degree: "Diploma in Engineering", score: "77%", institution: "MSBTE", year: "2020" },
];

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications and education">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="flex items-baseline justify-between text-[15px] font-medium text-fg">
            Certifications
            <span className="font-mono text-xs font-normal text-fg-3">{certifications.length} total</span>
          </h3>
          <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-card">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-center gap-4 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-lg border border-line bg-white object-contain"
                />
                <div className="min-w-0">
                  <p className="text-[15px] text-fg">{cert.name}</p>
                  <p className="mt-0.5 font-mono text-[13px] text-fg-3">
                    {cert.issuer} · {cert.year}
                    {cert.credentialId && ` · ID ${cert.credentialId}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[15px] font-medium text-fg">Education</h3>
          <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-card">
            {education.map((edu) => (
              <li key={edu.degree} className="p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[15px] font-medium text-fg">{edu.degree}</p>
                  <span className="font-mono text-[13px] text-fg-3">{edu.year}</span>
                </div>
                <p className="mt-1 text-sm text-fg-2">{edu.institution}</p>
                <p className="mt-3 font-mono text-[13px] text-fg-2 tabular-nums">{edu.score}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
