import type { Metadata } from "next";
import { WorkCard } from "@/components/work-card";
import { worksByYear } from "@/lib/works";

export const metadata: Metadata = {
  title: "Work",
  description: "Archive of paintings, drawings and studies — chronological.",
};

export default function WorkIndex() {
  const grouped = worksByYear();
  return (
    <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-16 sm:py-24">
      <header className="grid gap-6 lg:grid-cols-12 mb-16 sm:mb-24">
        <p className="lg:col-span-3 text-xs uppercase tracking-[0.28em] text-muted">
          Index — Work
        </p>
        <div className="lg:col-span-9">
          <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight">
            <span className="italic">Archive</span>, by year
          </h1>
          <p className="mt-6 max-w-xl text-muted">
            A chronological record of paintings, drawings, and studies. Click
            any work for full notes, dimensions, and provenance.
          </p>
        </div>
      </header>

      <div className="space-y-24 sm:space-y-32">
        {grouped.map(([year, items]) => (
          <section key={year} className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <p className="font-display text-4xl sm:text-5xl sticky top-24 leading-none">
                {year}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted">
                {items.length} {items.length === 1 ? "work" : "works"}
              </p>
            </div>
            <div className="lg:col-span-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((work) => (
                <WorkCard key={work.slug} work={work} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
