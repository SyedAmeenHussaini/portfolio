"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  // Accent color: light=sky, dark=cyan
  const accentText = "text-sky-400 dark:text-[#00e5ff]";
  const accentBg = "bg-sky-400/10 dark:bg-[#00e5ff]/10";
  const accentBorder = "border-sky-400/20 dark:border-[#00e5ff]/20";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          scrolled
            ? "mt-3 rounded-2xl bg-[#0f172a]/80 dark:bg-[#0a0e1a]/80 backdrop-blur-2xl border border-white/[0.08] shadow-xl shadow-black/40"
            : "mt-0 rounded-none bg-transparent border border-transparent"
        }`}
      >
      <div className="px-4 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 dark:from-[#00e5ff] to-violet-500 dark:to-[#7c3aed] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-sky-500/20 dark:group-hover:shadow-[#00e5ff]/20 transition-shadow">
              <Terminal size={16} className="text-white" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm text-white leading-tight">
                Ameen<span className={accentText}>.</span>
              </span>
              <span className="text-[9px] text-gray-500 font-mono leading-tight">Platform & Cloud DevOps Engineer</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? `${accentText} ${accentBg} border ${accentBorder}`
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
{/* Resume link removed */}
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-1">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0f172a]/95 dark:bg-[#0a0e1a]/95 backdrop-blur-2xl border-t border-white/[0.06] rounded-b-2xl"
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-md text-sm font-mono transition-all ${
                    activeSection === link.href.slice(1)
                      ? `${accentText} ${accentBg}`
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-sky-400/40 dark:text-[#00e5ff]/40 mr-2">&gt;</span>
                  {link.name}
                </a>
              ))}
{/* Resume link removed */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.nav>
  );
}
