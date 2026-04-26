import type { Metadata } from "next";
import { WorkCard } from "@/components/work-card";
import { worksByYear } from "@/lib/works";

export const metadata: Metadata = {
  title: "Digital",
};

export default function DigitalIndex() {
  const grouped = worksByYear("digital");
  return (
    <div className="mx-auto max-w-[1800px] px-5 sm:px-8 pt-10 pb-24">
      <header className="flex items-baseline justify-between mb-10">
        <h1 className="text-[13px] tracking-[0.04em]">Digital</h1>
      </header>

      <div className="space-y-20">
        {grouped.map(([year, items]) => (
          <section key={year} className="grid gap-6 sm:gap-8 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <p className="text-[13px] tracking-[0.04em] sticky top-20">
                {year}
              </p>
            </div>
            <div className="lg:col-span-10 grid gap-x-6 sm:gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
