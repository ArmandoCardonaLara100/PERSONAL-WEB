import { ArrowUpRight, BookOpen, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

const skillGroups = [
  {
    label: "Fundamentos",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    label: "Aplicación",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Plataforma",
    skills: ["Supabase", "PostgreSQL", "Git", "Vercel"],
  },
];

const education = [
  {
    platform: "Codecademy",
    description:
      "Formación en programación y desarrollo web enfocada en conceptos fundamentales y su implementación práctica.",
    url: "https://www.codecademy.com",
  },
  {
    platform: "Udemy",
    description:
      "Formación técnica independiente para continuar desarrollándome en programación y tecnologías web modernas.",
    url: "https://www.udemy.com",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell section-space">
      <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <p className="section-kicker">Sobre mí / Perfil</p>
            <h2 className="section-title mt-5">
              Código con propósito.
              <span className="block font-display font-normal italic text-accent-strong">
                Resultados útiles.
              </span>
            </h2>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="max-w-3xl text-pretty text-[clamp(1.4rem,2.5vw,2.25rem)] font-medium leading-[1.35] tracking-[-0.025em] text-foreground">
              Me especializo en desarrollo web y creo sitios responsivos,
              aplicaciones web y proyectos orientados al software que equilibran
              funcionalidad, claridad visual y rendimiento confiable.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 grid gap-6 border-t border-border pt-8 text-base leading-8 text-muted md:grid-cols-2">
              <p>
                Mi base técnica se construye sobre HTML, CSS y Python, y se ha
                ampliado mediante proyectos reales con JavaScript, TypeScript,
                React, Next.js y servicios respaldados por bases de datos.
              </p>
              <p>
                Abordo cada proyecto como un producto completo: la interfaz
                debe comunicar con claridad, adaptarse naturalmente a cada
                pantalla y ayudar a sus usuarios sin fricciones innecesarias.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div id="skills" className="scroll-mt-28 pt-24 sm:pt-32">
        <Reveal>
          <div className="flex flex-col gap-5 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Habilidades / Formación</p>
              <h2 className="mt-4 text-[clamp(2.25rem,5vw,4.75rem)] font-semibold leading-none tracking-[-0.055em]">
                Un conjunto de herramientas práctico y en evolución.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Las tecnologías listadas aquí están respaldadas por el trabajo en
              mis repositorios públicos y proyectos desplegados.
            </p>
          </div>
        </Reveal>

        <div className="mt-2 divide-y divide-border border-b border-border">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.05}>
              <div className="grid gap-5 py-7 md:grid-cols-[180px_1fr] md:items-center">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-accent-strong">
                    0{index + 1}
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em]">
                    {group.label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-x-7 gap-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="inline-flex items-center gap-2 text-base font-medium text-foreground sm:text-lg"
                    >
                      <Check className="h-4 w-4 text-accent-strong" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
          <Reveal>
            <div>
              <BookOpen className="h-7 w-7 text-accent-strong" strokeWidth={1.5} />
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                Formación continua
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                La formación continua respalda las habilidades que aplico en mi
                trabajo de desarrollo. No se incluyen credenciales ni fechas no verificadas.
              </p>
            </div>
          </Reveal>

          <div className="divide-y divide-border border-y border-border">
            {education.map((item, index) => (
              <Reveal key={item.platform} delay={index * 0.08}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-4 py-7 transition-colors hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:grid-cols-[180px_1fr_auto] md:items-center"
                >
                  <h4 className="text-xl font-semibold">{item.platform}</h4>
                  <p className="max-w-2xl text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
