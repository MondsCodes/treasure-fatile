import { WorkCard } from "@/components/work-card";
import { works } from "@/lib/works";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1800px] px-8 sm:px-14 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-16 sm:gap-y-20">
        {works.map((work, i) => (
          <WorkCard key={work.slug} work={work} priority={i < 3} />
        ))}
      </div>
    </div>
  );
}
