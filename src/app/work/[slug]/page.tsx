import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWork, works } from "@/lib/works";

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
  return { title: work.title, description: work.description };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const idx = works.findIndex((w) => w.slug === work.slug);
  const prev = works[idx - 1];
  const next = works[idx + 1];

  return (
    <article className="mx-auto max-w-[1600px] px-6 sm:px-10 py-12 sm:py-16">
      <Link
        href="/work"
        className="text-xs uppercase tracking-[0.22em] text-muted hover:text-foreground transition-colors"
      >
        ← Archive
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <div
            className="relative w-full overflow-hidden bg-rule/30"
            style={{ aspectRatio: work.ratio }}
          >
            {work.image ? (
              <Image
                src={work.image}
                alt={work.title}
                fill
                priority
                sizes="(min-width:1024px) 66vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: work.tint }}
              />
            )}
          </div>
        </div>

        <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              {work.year}
              {work.series ? ` · ${work.series}` : ""}
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
              <span className="italic">{work.title}</span>
            </h1>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm border-t border-rule/60 pt-6">
            <dt className="uppercase tracking-[0.22em] text-xs text-muted">
              Medium
            </dt>
            <dd>{work.medium}</dd>
            {work.dimensions && (
              <>
                <dt className="uppercase tracking-[0.22em] text-xs text-muted">
                  Size
                </dt>
                <dd>{work.dimensions}</dd>
              </>
            )}
            {work.series && (
              <>
                <dt className="uppercase tracking-[0.22em] text-xs text-muted">
                  Series
                </dt>
                <dd>{work.series}</dd>
              </>
            )}
            <dt className="uppercase tracking-[0.22em] text-xs text-muted">
              Year
            </dt>
            <dd>{work.year}</dd>
          </dl>

          {work.description && (
            <p className="text-base leading-relaxed text-foreground/80">
              {work.description}
            </p>
          )}

          <Link
            href="/contact"
            className="inline-block text-sm underline decoration-rule hover:decoration-foreground transition-colors"
          >
            Inquire about this work
          </Link>
        </aside>
      </div>

      <nav className="mt-24 grid grid-cols-2 gap-8 border-t border-rule/60 pt-8 text-sm">
        <div>
          {prev && (
            <Link
              href={`/work/${prev.slug}`}
              className="group inline-flex flex-col gap-1"
            >
              <span className="text-xs uppercase tracking-[0.22em] text-muted">
                ← Previous
              </span>
              <span className="font-display text-xl italic group-hover:text-accent transition-colors">
                {prev.title}
              </span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group inline-flex flex-col gap-1 items-end"
            >
              <span className="text-xs uppercase tracking-[0.22em] text-muted">
                Next →
              </span>
              <span className="font-display text-xl italic group-hover:text-accent transition-colors">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
