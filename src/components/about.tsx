import { Heart, Lightbulb, Rocket, User } from "lucide-react";
import { Reveal } from "@/components/reveal";

const cards = [
  {
    icon: Rocket,
    title: "Fast Learner",
    body: "I learn fast and can do anything I set my mind to. Started coding this year and I'm already building real projects.",
    accent: false,
    wide: false,
  },
  {
    icon: Heart,
    title: "Passionate Creator",
    body: "I love videogames, sports, and building things. My passion for tech drives me to learn something new every single day.",
    accent: true,
    wide: false,
  },
  {
    icon: Lightbulb,
    title: "Big Goals",
    body: "One of my primary goals is to become an independent web developer. It has long been an area of interest for me, and I am now actively working toward becoming the developer I have always aspired to be.",
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
          Hello. Nice to meet you.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          I began studying web development this year. I have a strong interest
          in video games and sports, and I am deeply curious about technology
          and programming. I am particularly passionate about creating and
          building solutions for the web.
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
