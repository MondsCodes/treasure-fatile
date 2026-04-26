import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/lib/works";

type Props = {
  work: Work;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

export function WorkCard({ work, priority, size = "md" }: Props) {
  const titleClass =
    size === "lg"
      ? "text-2xl sm:text-3xl"
      : size === "sm"
        ? "text-base"
        : "text-lg sm:text-xl";

  return (
    <Link href={`/work/${work.slug}`} className="group block">
      <div
        className="relative w-full overflow-hidden bg-rule/30"
        style={{ aspectRatio: work.ratio }}
      >
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
            style={{ background: work.tint }}
          />
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-6">
        <div>
          <h3 className={`font-display ${titleClass} leading-tight`}>
            <span className="italic">{work.title}</span>
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
            {work.medium}
            {work.dimensions ? ` · ${work.dimensions}` : ""}
          </p>
        </div>
        <span className="font-mono text-xs text-muted shrink-0">
          {work.year}
        </span>
      </div>
    </Link>
  );
}
