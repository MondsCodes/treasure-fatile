import Link from "next/link";
import { WorkCard } from "@/components/work-card";
import { featuredWorks, works } from "@/lib/works";

export default function Home() {
  const featured = featuredWorks();
  const hero = featured[0];
  const rest = featured.slice(1);
  const latestYear = Math.max(...works.map((w) => w.year));

  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 pt-16 sm:pt-24 pb-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-5 space-y-8">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Selected works · {latestYear}
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Treasure
              <br />
              <span className="italic">Fatile</span>
            </h1>
            <p className="max-w-md text-base sm:text-lg leading-relaxed text-muted">
              Painter and image-maker. A practice across oil, paper, and
              fragment — concerned with memory, weather, and the slow time of
              the domestic.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/work"
                className="underline decoration-rule hover:decoration-foreground transition-colors"
              >
                Enter the archive
              </Link>
              <span className="text-muted">/</span>
              <Link
                href="/about"
                className="text-muted hover:text-foreground transition-colors"
              >
                About the artist
              </Link>
            </div>
          </div>
          {hero && (
            <div className="lg:col-span-7">
              <WorkCard work={hero} priority size="lg" />
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 pb-24">
        <div className="flex items-end justify-between gap-6 mb-10 border-t border-rule/60 pt-8">
          <h2 className="font-display text-3xl sm:text-4xl">
            <span className="italic">Selected</span> works
          </h2>
          <Link
            href="/work"
            className="text-xs uppercase tracking-[0.22em] text-muted hover:text-foreground transition-colors"
          >
            All works →
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 sm:px-10 pb-32">
        <div className="grid gap-10 lg:grid-cols-12 border-t border-rule/60 pt-12">
          <p className="lg:col-span-3 text-xs uppercase tracking-[0.28em] text-muted">
            On the practice
          </p>
          <blockquote className="lg:col-span-9 font-display text-2xl sm:text-4xl leading-snug">
            “I paint to make the room hold still — long enough to see who left
            the cup,{" "}
            <span className="italic">long enough to remember the light.</span>”
          </blockquote>
        </div>
      </section>
    </div>
  );
}
