import type { Metadata } from "next";
import { WorkCard } from "@/components/work-card";
import { worksByYear } from "@/lib/works";

export const metadata: Metadata = {
  title: "Digital",
};

export default function DigitalIndex() {
  const grouped = worksByYear("digital");
  return (
    <div className="mx-auto max-w-[1800px] px-8 sm:px-14 pb-24">
      <div className="space-y-20">
        {grouped.map(([year, items]) => (
          <section key={year} className="space-y-10">
            <h2 className="tracked text-[12px] text-muted">Digital / {year}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-16 sm:gap-y-20">
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
