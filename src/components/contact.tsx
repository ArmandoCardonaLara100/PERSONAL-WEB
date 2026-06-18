import { Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-[5vw] py-20 text-center">
      <Reveal>
        <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700 dark:bg-surface-soft">
          <Mail className="h-3.5 w-3.5" />
          Contact
        </div>
      </Reveal>

      <Reveal>
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[40px] bg-primary px-12 py-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[0.08]" />
          <div className="absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-white/[0.06]" />

          <h2 className="relative z-10 mb-3 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-black text-white">
            Let&apos;s Build Something Together.
          </h2>
          <p className="relative z-10 mx-auto mb-8 max-w-md leading-relaxed text-white/75">
            If you are interested in developing a professional website for your
            business, feel free to get in touch. Email me to discuss how I can
            help bring your ideas to life.
          </p>
          <a
            href="mailto:armandocl100@gmail.com"
            className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-extrabold text-green-800 shadow-xl transition-transform hover:scale-105"
          >
            <Mail className="h-[18px] w-[18px] text-green-800" />
            Contact Me
          </a>
        </div>
      </Reveal>
    </section>
  );
}
