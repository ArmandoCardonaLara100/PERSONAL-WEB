import Image from "next/image";
import { ArrowDown, Code2, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import armandoImg from "../../public/images/armando.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center gap-12 overflow-hidden px-[5vw] pb-16 pt-28">
      {/* soft radial wash */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-100 dark:opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, var(--color-green-50) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, var(--color-green-100) 0%, transparent 60%)",
        }}
      />
      {/* morphing blobs */}
      <div className="animate-blob pointer-events-none absolute -right-16 -top-20 h-[380px] w-[420px] bg-green-200 opacity-30 dark:opacity-10" />
      <div className="animate-blob pointer-events-none absolute -left-10 bottom-10 h-[220px] w-[260px] bg-green-200 opacity-30 [animation-delay:-4s] dark:opacity-10" />

      {/* content */}
      <Reveal className="relative z-10 max-w-xl flex-1">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-container px-4 py-2 text-xs font-bold uppercase tracking-wide text-on-container">
          <span className="pulse-dot h-2 w-2 rounded-full bg-green-500" />
          Available for projects
        </div>

        <h1 className="mb-3 font-display text-[clamp(2.4rem,5vw,3.6rem)] font-black leading-[1.1] text-green-900 dark:text-green-200">
          I&apos;m Armando
          <br />
          Cardona Lara.
        </h1>
        <h2 className="mb-9 text-[clamp(1.2rem,2.5vw,1.8rem)] font-normal text-muted">
          a future <span className="gradient-text font-bold">pro</span>grammer.
        </h2>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-green-800/30 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            <Mail className="h-[18px] w-[18px]" />
            Get In Touch
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-full bg-primary-container px-7 py-3.5 text-sm font-bold text-on-container transition-all hover:-translate-y-0.5 hover:bg-green-200"
          >
            See My Work
            <ArrowDown className="h-[18px] w-[18px]" />
          </a>
        </div>
      </Reveal>

      {/* portrait */}
      <div className="relative z-10 hidden shrink-0 md:block">
        <div className="animate-spin-slow h-[320px] w-[320px] rounded-full bg-gradient-to-br from-green-300 to-green-600 p-1.5">
          <div className="animate-spin-slow-reverse relative h-full w-full overflow-hidden rounded-full bg-green-100">
            <Image
              src={armandoImg}
              alt="Armando Cardona Lara"
              fill
              priority
              sizes="320px"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="absolute -right-3 bottom-4 flex items-center gap-2 rounded-2xl bg-card px-4 py-2.5 text-sm font-bold text-on-container shadow-xl">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-surface-soft text-primary">
            <Code2 className="h-[18px] w-[18px]" />
          </span>
          Web Developer
        </div>
      </div>
    </section>
  );
}
