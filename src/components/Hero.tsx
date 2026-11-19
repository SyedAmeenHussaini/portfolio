"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const lines: { text: string; cmd?: boolean; ok?: boolean }[] = [
  { cmd: true, text: "terraform plan -var-file=env/prod.tfvars" },
  { ok: true, text: "No changes. Your infrastructure matches the configuration." },
  { cmd: true, text: "kubectl get pods -n platform" },
  { text: "NAME                          READY   STATUS    RESTARTS" },
  { text: "api-gateway-7d4f8b6c9-m8q2r   1/1     Running   0" },
  { text: "ai-analysis-6f9c8d7b5-k2x4p   1/1     Running   0" },
  { cmd: true, text: "gh run watch --exit-status" },
  { ok: true, text: "✓ deploy-prod completed in 3m 41s" },
];

export default function Hero() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown(shown + 1), shown === 0 ? 600 : 450);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <section id="home" className="flex min-h-svh items-center pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="flex items-center gap-4">
            <Image
              src="/profile.jpeg"
              alt="Syed Ameen Hussaini"
              width={56}
              height={56}
              priority
              className="size-14 rounded-full border border-line object-cover"
            />
            <div className="text-sm">
              <p className="flex items-center gap-2 text-fg">
                <span className="size-2 rounded-full bg-positive" />
                Available, remote worldwide
              </p>
              <p className="mt-0.5 text-fg-3">or on-site in Hyderabad, Pune, Bangalore</p>
            </div>
          </div>

          <h1 className="mt-10 text-[2.5rem] leading-[1.05] font-medium tracking-[-0.025em] text-fg sm:text-6xl">
            Syed Ameen Hussaini
          </h1>
          <p className="mt-4 font-mono text-base text-fg-2 sm:text-lg">
            Platform &amp; Cloud DevOps Engineer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-fg-2">
            I build and run cloud platforms on AWS, Azure and GCP, from Kubernetes and
            Terraform to CI/CD and LLM serving, for payment, AI and analytics teams.
            4 years in production.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-lg bg-fg px-5 text-[15px] font-medium text-bg shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] transition-[background-color,transform] duration-150 hover:bg-fg/90 active:scale-[0.98]"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center rounded-lg border border-line bg-card px-5 text-[15px] font-medium text-fg transition-[background-color,transform] duration-150 hover:bg-raised active:scale-[0.98]"
            >
              View projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease }}
          className="terminal min-w-0 overflow-hidden rounded-2xl"
        >
          <div className="flex h-10 items-center gap-2 border-b border-white/[0.06] px-4">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs">ameen@cloud: ~/infra</span>
          </div>
          <div className="overflow-x-auto p-5 font-mono text-xs leading-6 whitespace-pre sm:text-[13px]">
            {lines.map((line, i) => (
              <div key={i} className={i < shown ? undefined : "invisible"}>
                {line.cmd ? (
                  <>
                    <span className="prompt">$ </span>
                    <span className="cmd">{line.text}</span>
                  </>
                ) : (
                  <span className={line.ok ? "ok" : undefined}>
                    {line.text.split(/(Running)/).map((part, j) =>
                      part === "Running" ? (
                        <span key={j} className="ok">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </span>
                )}
              </div>
            ))}
            <div className={shown < lines.length ? "invisible" : undefined}>
              <span className="prompt">$ </span>
              <span className="cursor-blink inline-block h-4 w-2 translate-y-[3px] bg-[#eef0f5]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
