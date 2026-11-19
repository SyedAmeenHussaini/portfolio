"use client";

import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-4 sm:px-8"
      >
        <p className="font-mono text-xs text-fg-3">~/{id}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.01em] text-fg sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-base leading-7 text-fg-2">{intro}</p>}
        <div className="mt-12">{children}</div>
      </motion.div>
    </section>
  );
}
