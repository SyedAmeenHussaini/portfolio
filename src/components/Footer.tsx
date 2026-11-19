import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/SyedAmeenHussaini" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/syed-ameen-hussaini-6b2b08215" },
  { icon: Mail, label: "Email", href: "mailto:syedameenhussaini3@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-[15px] font-medium text-fg">Syed Ameen Hussaini</p>
          <p className="mt-1 text-[13px] text-fg-3">Platform &amp; Cloud DevOps Engineer · © 2026</p>
        </div>
        <div className="flex items-center gap-1">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="grid size-9 place-items-center rounded-lg text-fg-2 transition-colors duration-150 hover:bg-raised hover:text-fg"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
