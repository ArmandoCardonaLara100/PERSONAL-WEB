import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import armandoImage from "../../public/images/armando.jpg";

const focusAreas = ["Web applications", "Software platforms", "Responsive interfaces"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden bg-[#222831] text-[#EEEEEE]"
    >
      <div className="hero-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="section-shell relative flex min-h-svh flex-col justify-end pb-12 pt-32 sm:pb-16 lg:pb-20">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
            <span>Armando Cardona Lara</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Mexico
            </span>
            <span className="inline-flex items-center gap-2 text-[#DFD0B8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFD0B8]" />
              Available for selected projects
            </span>
          </div>
        </Reveal>

        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.38fr)] lg:gap-14">
          <div>
            <Reveal delay={0.05}>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#DFD0B8]">
                Web Developer &amp; Software Developer
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-5xl text-balance font-sans text-[clamp(3.25rem,8.4vw,8.4rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                Digital products,
                <span className="block font-display font-normal italic tracking-[-0.035em] text-[#DFD0B8]">
                  built with intent.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 grid gap-7 border-t border-white/15 pt-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <p className="max-w-2xl text-base leading-7 text-white/67 sm:text-lg sm:leading-8">
                  I design and develop modern websites, web applications, and
                  software-focused solutions with an emphasis on function,
                  performance, and a clear user experience.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#DFD0B8] px-5 py-3 text-sm font-bold text-[#222831] transition-all hover:-translate-y-0.5 hover:bg-[#EEEEEE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Explore my projects
                    <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex min-h-12 items-center gap-3 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-[#EEEEEE] transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFD0B8]"
                  >
                    Get in touch
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:pb-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-[#2c333d] p-2">
                <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={armandoImage}
                    alt="Portrait of Armando Cardona Lara"
                    fill
                    priority
                    sizes="(max-width: 1024px) 448px, 360px"
                    className="object-cover object-top saturate-[0.85]"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222831]/70 via-transparent to-transparent" />
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#222831]/75 p-4 backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#DFD0B8]">
                    Current focus
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/78">
                    {focusAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="h-px w-4 bg-[#948979]" /> {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 grid h-16 w-16 place-items-center rounded-2xl border border-[#948979]/40 bg-[#DFD0B8] font-mono text-[10px] font-bold uppercase tracking-wider text-[#222831] shadow-xl sm:-right-5 sm:-top-5">
                Build
                <br /> / Ship
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
