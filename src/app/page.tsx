import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/works";
import { WorkCaption } from "@/components/work-caption";

export default function Home() {
  const hero = works[0];
  const grid = works.slice(1);

  return (
    <div className="mx-auto max-w-[1800px] px-5 sm:px-8 pt-6 pb-24">
      <section>
        <Link href={`/work/${hero.slug}`} className="block group">
          <div
            className="relative w-full overflow-hidden bg-rule/40"
            style={{ aspectRatio: `${hero.width} / ${hero.height}` }}
          >
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-opacity duration-500 group-hover:opacity-95"
            />
          </div>
          <div className="mt-3">
            <WorkCaption work={hero} />
          </div>
        </Link>
      </section>

      <section className="mt-16 grid gap-x-6 sm:gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {grid.map((work, i) => (
          <div key={work.slug} style={{ marginTop: i % 3 === 1 ? "3rem" : 0 }}>
            <Link href={`/work/${work.slug}`} className="block group">
              <div
                className="relative w-full overflow-hidden bg-rule/40"
                style={{ aspectRatio: `${work.width} / ${work.height}` }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                />
              </div>
              <div className="mt-3">
                <WorkCaption work={work} />
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
