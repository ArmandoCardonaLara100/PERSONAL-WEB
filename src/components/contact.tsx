import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { InstagramIcon } from "@/components/brand-icons";

const contactLinks = [
  {
    label: "Email",
    value: "armandocl100@gmail.com",
    href: "mailto:armandocl100@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "@armando.cardona.5876",
    href: "https://www.instagram.com/armando.cardona.5876/",
    icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    value: "Start a conversation",
    href: "https://wa.me/qr/5ETOVBV3H6QZK1",
    icon: MessageCircle,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-[#222831] py-20 text-[#EEEEEE] sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#DFD0B8]">
                Contact / New projects
              </p>
              <h2 className="mt-6 max-w-4xl text-balance text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                Let&apos;s build
                <span className="block font-display font-normal italic tracking-[-0.035em] text-[#DFD0B8]">
                  something great.
                </span>
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Have a website, digital platform, or software project in mind?
                I&apos;m open to thoughtful collaborations and practical ideas that
                deserve a clear, well-built digital experience.
              </p>
              <a
                href="mailto:armandocl100@gmail.com"
                className="group mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#DFD0B8] px-5 py-3 text-sm font-bold text-[#222831] transition-all hover:-translate-y-0.5 hover:bg-[#EEEEEE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Email me
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="self-end border-t border-white/15">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-white/15 py-5 transition-colors hover:text-[#DFD0B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFD0B8]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/15">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                        {link.label}
                      </span>
                      <span className="mt-1 block break-all text-sm font-semibold sm:text-base">
                        {link.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
