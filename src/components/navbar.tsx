import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-green-100/70 px-6 py-3 backdrop-blur-lg dark:border-border"
      style={{ background: "var(--nav-bg)" }}
    >
      <a
        href="#"
        className="font-display text-lg font-black tracking-tight text-primary"
      >
        ACL
      </a>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-on-container transition-all hover:scale-105 hover:bg-surface-soft"
            >
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
