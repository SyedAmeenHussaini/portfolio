"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, BadgeCheck, ShieldCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "AWS Databricks Platform Architect",
    issuer: "Databricks",
    year: "2025",
    color: "#f43f5e",
    credentialId: "170392764",
    image: "/cert-databricks-aws.png",
  },
  {
    name: "Databricks Fundamentals",
    issuer: "Databricks",
    year: "2025",
    color: "#f43f5e",
    credentialId: null,
    image: "/cert-databricks.png",
  },
  {
    name: "Certified Agile Scrum Master",
    issuer: "Washington University EDU",
    year: "2025",
    color: "#3b82f6",
    credentialId: null,
    image: "/cert-scrum.png",
  },
  {
    name: "Microsoft Azure AZ-400 DevOps Professional",
    issuer: "Microsoft",
    year: "2023",
    color: "#00e5ff",
    credentialId: null,
    image: "/cert-azure.jpg",
  },
  {
    name: "Oracle Cloud Infrastructure DevOps Professional",
    issuer: "Oracle",
    year: "2023",
    color: "#f59e0b",
    credentialId: null,
    image: "/cert-oracle.png",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    score: "7.8 CGPA",
    institution: "Dr. Babasaheb Ambedkar Technological University, Lonere",
    year: "2023",
  },
  {
    degree: "Diploma in Engineering",
    score: "77%",
    institution: "MSBTE",
    year: "2020",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

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
              Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Certifications & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Certifications column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <ShieldCheck className="text-sky-400 dark:text-[#00e5ff]" size={20} />
              <h3 className="text-lg font-semibold text-white font-mono">
                Verified Certifications
              </h3>
              <span className="text-xs text-gray-500 font-mono ml-auto">{certifications.length} badges</span>
            </motion.div>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                  className="terminal-card p-4 group"
                >
                  <div className="flex items-center gap-4">
                    {/* Cert image */}
                    <div
                      className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center"
                    >
                      {cert.image ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={cert.image}
                          alt={cert.name}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full p-1"
                        />
                      ) : (
                        <BadgeCheck className="w-5 h-5" style={{ color: cert.color }} />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-white text-sm truncate">
                          {cert.name}
                        </h4>
                        <ExternalLink size={10} className="text-gray-600 group-hover:text-sky-400 dark:group-hover:text-[#00e5ff] transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-xs text-gray-500 font-mono mt-0.5">
                        {cert.issuer} &middot; {cert.year}
                      </p>
                      {cert.credentialId && (
                        <p className="text-[10px] text-gray-600 font-mono mt-0.5">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>

                    {/* Verified badge */}
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 rounded-full bg-[#00ff88]/10 flex items-center justify-center">
                        <BadgeCheck size={14} className="text-[#00ff88]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <GraduationCap className="text-[#7c3aed]" size={20} />
              <h3 className="text-lg font-semibold text-white font-mono">
                Education
              </h3>
            </motion.div>

            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
                  className="terminal-card p-5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20 font-mono flex-shrink-0 ml-2">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{edu.institution}</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/10 dark:bg-[#00ff88]/10 border border-emerald-400/20 dark:border-[#00ff88]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-[#00ff88]" />
                    <span className="text-[11px] text-emerald-400 dark:text-[#00ff88] font-mono font-medium">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="terminal-card p-5 mt-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award size={16} className="text-[#ffb800]" />
                <span className="text-sm font-semibold text-white">Continuous Learning</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Actively pursuing advanced certifications in cloud architecture, security,
                and ML engineering. Committed to staying at the forefront of DevOps and
                platform engineering best practices.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
