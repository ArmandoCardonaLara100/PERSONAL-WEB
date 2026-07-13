import { Heart, Lightbulb, Rocket, User } from "lucide-react";
import { Reveal } from "@/components/reveal";

const cards = [
  {
    icon: Rocket,
    title: "Quick to Adapt",
    body: "I have a proven ability to acquire new skills efficiently. Since beginning to code this year, I have applied that discipline directly to building functional, real-world projects.",
    accent: false,
    wide: false,
  },
  {
    icon: Heart,
    title: "Driven & Disciplined",
    body: "My interest in technology, strategy games, and competitive sports has shaped a focused, detail-oriented mindset. I bring that same consistency and commitment to every project I take on.",
    accent: true,
    wide: false,
  },
  {
    icon: Lightbulb,
    title: "Long-Term Vision",
    body: "My goal is to build a career as an independent web developer. I am pursuing this path deliberately, developing the technical and professional skills required to deliver reliable, high-quality work for clients and businesses.",
    accent: false,
    wide: true,
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-[5vw] py-20">
      <Reveal>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700 dark:bg-surface-soft">
          <User className="h-3.5 w-3.5" />
          About Me
        </div>
        <h2 className="mb-3 font-display text-[clamp(2rem,3.5vw,2.8rem)] font-black leading-tight text-green-900 dark:text-green-200">
          A Developer Committed to Continuous Growth
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          I began studying web development this year with a focus on building
          practical, professional-grade skills. My background in strategic
          gaming and competitive sports has instilled a disciplined,
          detail-oriented approach that I bring to every project. I am
          dedicated to creating clean, effective, and reliable solutions for
          the web.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <Reveal
              key={card.title}
              delay={0.1 * (i + 1)}
              className={card.wide ? "sm:col-span-2" : undefined}
            >
              <article
                className={`group h-full rounded-[28px] border p-7 transition-all hover:-translate-y-1 ${
                  card.accent
                    ? "border-green-700 bg-primary text-primary-foreground"
                    : "border-border bg-card hover:shadow-xl hover:shadow-green-800/10"
                }`}
              >
                <div
                  className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl ${
                    card.accent
                      ? "bg-white/20 text-white"
                      : "bg-surface-soft text-primary"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-xl font-extrabold">
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    card.accent ? "text-white/80" : "text-muted"
                  }`}
                >
                  {card.body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
