import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { adjacentWorks, getWork, works } from "@/lib/works";

type Params = { slug: string };

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Not found" };
  return {
    title: work.title,
    description: `${work.medium}${work.dimensions ? `, ${work.dimensions}` : ""}, ${work.year}.`,
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const { prev, next } = adjacentWorks(slug);

  return (
    <article className="mx-auto max-w-[1400px] px-8 sm:px-14 pb-24">
      <div className="flex items-baseline justify-between mb-8 tracked text-[11px]">
        <Link href="/work" className="text-muted hover:text-foreground">
          ← Work
        </Link>
        <span className="text-muted">{work.year}</span>
      </div>

      <figure>
        <div
          className="relative w-full bg-[#f4f4f0]"
          style={{ aspectRatio: `${work.width} / ${work.height}` }}
        >
          <Image
            src={work.image}
            alt={work.title}
            fill
            priority
            sizes="(min-width:1400px) 1400px, 100vw"
            className="object-contain"
          />
        </div>

        <figcaption className="mt-8 max-w-2xl space-y-2">
          <p className="caption-title text-[14px]">{work.title}</p>
          <p className="caption-meta text-[14px]">
            {work.medium}
            {work.dimensions && `, ${work.dimensions}`}, {work.year}.
          </p>
        </figcaption>

        {work.description && (
          <p className="mt-6 max-w-2xl text-[14px] leading-relaxed text-foreground/80">
            {work.description}
          </p>
        )}
      </figure>

      <nav className="mt-24 grid grid-cols-2 gap-8 border-t border-rule pt-8 tracked text-[11px]">
        <div>
          {prev && (
            <Link
              href={`/work/${prev.slug}`}
              className="group inline-flex flex-col gap-1.5"
            >
              <span className="text-muted">← Previous</span>
              <span className="group-hover:text-foreground">{prev.title}</span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group inline-flex flex-col gap-1.5 items-end"
            >
              <span className="text-muted">Next →</span>
              <span className="group-hover:text-foreground">{next.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
