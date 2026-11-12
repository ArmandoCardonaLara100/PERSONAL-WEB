import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { GitHubIcon } from "@/components/brand-icons";
import { projects, type Project } from "@/lib/projects";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Visit website
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : null}
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <GitHubIcon className="h-4 w-4" />
          Source
        </a>
      ) : null}
    </div>
  );
}

function ProjectPreview({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-[#222831] p-2 shadow-[0_24px_80px_rgba(34,40,49,0.14)] sm:rounded-[2rem] sm:p-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] bg-[#222831] sm:rounded-[1.4rem]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes={
            project.layout === "featured"
              ? "(max-width: 1024px) 94vw, 70vw"
              : "(max-width: 768px) 94vw, 46vw"
          }
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          placeholder="blur"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
      <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#222831]/85 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-[#EEEEEE] backdrop-blur-md sm:left-7 sm:top-7">
        {project.number}
      </span>
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article className="border-t border-border py-12 sm:py-16">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:items-center lg:gap-14">
          <ProjectPreview project={project} priority={index === 0} />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-strong">
              {project.category}
            </p>
            <h3 className="mt-4 text-[clamp(2.25rem,4vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
              {project.name}
            </h3>
            <p className="mt-6 text-base leading-7 text-muted">{project.description}</p>
            <ul className="mt-7 space-y-2.5 border-y border-border py-5 text-sm text-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span key={technology} className="tech-tag">
                  {technology}
                </span>
              ))}
            </div>
            <div className="mt-7">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function StandardProject({ project }: { project: Project }) {
  return (
    <Reveal className="h-full">
      <article className="flex h-full flex-col border-t border-border py-10 sm:py-12">
        <ProjectPreview project={project} />
        <div className="flex flex-1 flex-col pt-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-strong">
            {project.category}
          </p>
          <h3 className="mt-3 text-[clamp(1.85rem,3vw,2.75rem)] font-semibold leading-tight tracking-[-0.045em]">
            {project.name}
          </h3>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-7">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span key={technology} className="tech-tag">
                {technology}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-7">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((project) => project.layout === "featured");
  const standard = projects.filter((project) => project.layout === "standard");

  return (
    <section id="projects" className="section-space bg-surface">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-7 pb-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-kicker">Selected work / 2026</p>
              <h2 className="section-title mt-5 max-w-4xl">
                Real products.
                <span className="block font-display font-normal italic text-accent-strong">
                  Different problems, considered solutions.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted md:text-right">
              Every preview is captured from the real project. Technology and
              feature details are verified against the source repositories.
            </p>
          </div>
        </Reveal>

        {featured.slice(0, 1).map((project, index) => (
          <FeaturedProject key={project.name} project={project} index={index} />
        ))}

        <div className="grid gap-x-8 md:grid-cols-2 xl:gap-x-12">
          {standard.slice(0, 2).map((project) => (
            <StandardProject key={project.name} project={project} />
          ))}
        </div>

        {featured.slice(1).map((project, index) => (
          <FeaturedProject key={project.name} project={project} index={index + 1} />
        ))}

        <div className="grid gap-x-8 md:grid-cols-2 xl:gap-x-12">
          {standard.slice(2).map((project) => (
            <StandardProject key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
