"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
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
  // false on the server, true on the client: theme icon renders only after hydration
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");
  const iconButton =
    "grid size-9 place-items-center rounded-lg text-fg-2 transition-colors duration-150 hover:bg-raised hover:text-fg";

  const themeButton = mounted && (
    <button onClick={toggleTheme} className={iconButton} aria-label="Toggle theme">
      {isDark ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
    </button>
  );

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || mobileOpen ? "border-line bg-bg/95" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
        <a href="#home" className="text-[15px] font-medium text-fg">
          Syed Ameen Hussaini
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={active ? "true" : undefined}
                className={`rounded-lg px-3 py-1.5 text-sm transition-colors duration-150 ${
                  active ? "bg-raised text-fg" : "text-fg-2 hover:text-fg"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="ml-2">{themeButton}</div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {themeButton}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={iconButton}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-line md:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-[15px] transition-colors duration-150 ${
                  activeSection === link.href.slice(1) ? "bg-raised text-fg" : "text-fg-2 hover:text-fg"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
