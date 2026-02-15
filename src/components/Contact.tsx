"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  Wifi,
} from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "syedameenhussaini3@gmail.com",
    href: "mailto:syedameenhussaini3@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7020648402",
    href: "tel:+917020648402",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote · Hyderabad · Pune · Bangalore",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SyedAmeenHussaini",
    username: "@SyedAmeenHussaini",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/syed-ameen-hussaini-6b2b08215",
    username: "Syed Ameen Hussaini",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e5ff]/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/5 dark:bg-[#00e5ff]/5 border border-sky-400/10 dark:border-[#00e5ff]/10 mb-4">
            <Wifi size={12} className="text-sky-400 dark:text-[#00e5ff]" />
            <span className="text-xs text-sky-400 dark:text-[#00e5ff] font-mono uppercase tracking-wider">
              Open for Connections
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about cloud and DevOps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Contact details */}
            <div className="space-y-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="terminal-card p-4 flex items-center gap-4 group block"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-sky-400/5 dark:bg-[#00e5ff]/5"
                  >
                    <item.icon className="w-4 h-4 text-sky-400 dark:text-[#00e5ff]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                      {item.label}
                    </p>
                    <p className="text-sm text-white font-medium">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-card p-4 flex items-center justify-between group block"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    <div>
                      <p className="text-sm text-white font-medium">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-500 font-mono">{item.username}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-sky-400 dark:group-hover:text-[#00e5ff] transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal-card p-0">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[10px] text-gray-500 font-mono">send-message.sh</span>
                <div className="w-12" />
              </div>

              <form
                action="https://formspree.io/f/xpzvqvzl"
                method="POST"
                className="p-5 space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5"
                  >
                    <span className="text-[#7c3aed]">const</span> name =
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40 dark:focus:border-[#00e5ff]/40 focus:ring-1 focus:ring-sky-400/20 dark:focus:ring-[#00e5ff]/20 transition-all text-sm font-mono"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5"
                  >
                    <span className="text-[#7c3aed]">const</span> email =
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40 dark:focus:border-[#00e5ff]/40 focus:ring-1 focus:ring-sky-400/20 dark:focus:ring-[#00e5ff]/20 transition-all text-sm font-mono"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5"
                  >
                    <span className="text-[#7c3aed]">const</span> message =
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40 dark:focus:border-[#00e5ff]/40 focus:ring-1 focus:ring-sky-400/20 dark:focus:ring-[#00e5ff]/20 transition-all text-sm font-mono resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-sky-400 dark:from-[#00e5ff] to-[#7c3aed] text-white font-medium text-sm hover:shadow-xl hover:shadow-[#00e5ff]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send size={14} />
                  Deploy Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
