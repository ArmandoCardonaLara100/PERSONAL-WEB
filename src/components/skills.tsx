import Image, { type StaticImageData } from "next/image";
import { Code2, Sparkles, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import materialImg from "../../public/images/materialExpressive.png";
import sparkyImg from "../../public/images/sparkyCL.png";

type Row = {
  tag: string;
  title: string;
  body: string;
  tags: string[];
  image?: StaticImageData;
};

const rows: Row[] = [
  {
    tag: "Design & Dev",
    title: "Design & Development",
    body: "I started learning to code this year. I want to learn everything about web development so I can build websites and apps for businesses. I'd also love to grow into UI & UX design.",
    tags: ["HTML", "CSS", "JavaScript", "UI Design", "Python"],
  },
  {
    tag: "Mindset",
    title: "My Skills",
    body: "I'm still learning how to code, but I learn fast and can do anything I set my mind to. Every project is an opportunity to grow and push my limits.",
    tags: ["Problem Solving", "Self-Learning", "Motivation"],
    image: materialImg,
  },
  {
    tag: "Project",
    title: "Sparky.CL",
    body: "Sparky.CL is a business management website. It's a simple yet effective solution that helps businesses manage their operations and transactions, and engage with their customers.",
    tags: ["Easy to Use", "Works on Any Device", "User-Friendly"],
    image: sparkyImg,
  },
];

function Visual({ row }: { row: Row }) {
  if (row.image) {
    return (
      <div className="relative">
        <Image
          src={row.image}
          alt={row.title}
          className="h-[300px] w-full rounded-[28px] object-cover"
          placeholder="blur"
          sizes="(max-width: 700px) 90vw, 45vw"
        />
        <span className="absolute right-4 top-4 rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground">
          {row.tag}
        </span>
      </div>
    );
  }

  // Decorative panel for the first row (replaces the old external image)
  return (
    <div className="relative grid h-[300px] place-items-center overflow-hidden rounded-[28px] bg-gradient-to-br from-green-400 to-green-700">
      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10" />
      <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-white/10" />
      <Code2 className="h-20 w-20 text-white/90" strokeWidth={1.5} />
      <span className="absolute right-4 top-4 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-green-800">
        {row.tag}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20">
      <Reveal className="mb-12 px-[5vw]">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700 dark:bg-surface-soft">
          <Star className="h-3.5 w-3.5" />
          Skills
        </div>
        <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-black leading-tight text-green-900 dark:text-green-200">
          What I Can Do.
        </h2>
      </Reveal>

      <div className="mx-[5vw] rounded-[40px] bg-green-50 px-[5vw] py-16 dark:bg-surface-soft">
        <div className="flex flex-col gap-14">
          {rows.map((row, i) => {
            const imageRight = i % 2 === 1;
            return (
              <Reveal key={row.title}>
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div className={imageRight ? "md:order-2" : undefined}>
                    <Visual row={row} />
                  </div>
                  <div className={imageRight ? "md:order-1" : undefined}>
                    <div className="mb-2 inline-flex items-center gap-1.5 text-primary md:hidden">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <h3 className="mb-3 font-display text-2xl font-black text-green-900 dark:text-green-200">
                      {row.title}
                    </h3>
                    <p className="mb-5 leading-relaxed text-muted">{row.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {row.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border-[1.5px] border-green-200 bg-card px-3.5 py-1.5 text-sm font-semibold text-green-700 dark:text-green-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
