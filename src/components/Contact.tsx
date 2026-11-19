import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Section from "./Section";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "syedameenhussaini3@gmail.com",
    href: "mailto:syedameenhussaini3@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 7020648402", href: "tel:+917020648402" },
  {
    icon: Github,
    label: "GitHub",
    value: "@SyedAmeenHussaini",
    href: "https://github.com/SyedAmeenHussaini",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Syed Ameen Hussaini",
    href: "https://linkedin.com/in/syed-ameen-hussaini-6b2b08215",
  },
  { icon: MapPin, label: "Location", value: "Remote · Hyderabad · Pune · Bangalore" },
];

const field =
  "mt-2 w-full rounded-lg border border-line bg-bg px-3.5 text-[15px] text-fg transition-colors duration-150 hover:border-fg/20";
const label = "text-[13px] text-fg-2";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      intro="Open to platform, cloud and DevOps roles and interesting projects, remote worldwide or on-site in Hyderabad, Pune and Bangalore."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <ul className="divide-y divide-line self-start border-y border-line">
          {links.map((item) => {
            const external = item.href?.startsWith("http");
            const body = (
              <>
                <item.icon size={18} strokeWidth={1.5} className="shrink-0 text-fg-3" />
                <div className="min-w-0">
                  <p className="text-[13px] text-fg-3">{item.label}</p>
                  <p className="truncate text-[15px] text-fg transition-colors duration-150 group-hover:text-accent">
                    {item.value}
                  </p>
                </div>
                {external && <ArrowUpRight size={16} strokeWidth={1.5} className="ml-auto shrink-0 text-fg-3" />}
              </>
            );
            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 py-4"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 py-4">{body}</div>
                )}
              </li>
            );
          })}
        </ul>

        <form
          action="https://formsubmit.co/syedameenhussaini3@gmail.com"
          method="POST"
          className="space-y-5 rounded-2xl border border-line bg-card p-6 sm:p-8"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <div>
            <label htmlFor="name" className={label}>
              Name
            </label>
            <input type="text" id="name" name="name" required autoComplete="name" className={`${field} h-11`} />
          </div>
          <div>
            <label htmlFor="email" className={label}>
              Email
            </label>
            <input type="email" id="email" name="email" required autoComplete="email" className={`${field} h-11`} />
          </div>
          <div>
            <label htmlFor="message" className={label}>
              Message
            </label>
            <textarea id="message" name="message" required rows={5} className={`${field} resize-none py-2.5`} />
          </div>
          <button
            type="submit"
            className="inline-flex h-11 items-center rounded-lg bg-fg px-5 text-[15px] font-medium text-bg transition-[background-color,transform] duration-150 hover:bg-fg/90 active:scale-[0.98]"
          >
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
