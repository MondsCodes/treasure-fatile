import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/lib/works";
import { WorkCaption } from "@/components/work-caption";

type Props = {
  work: Work;
  priority?: boolean;
  sizes?: string;
};

/**
 * Uniform-height card. Every artwork is rendered inside a 4:5 frame and
 * cropped to fill (object-cover) so the grid is visually consistent.
 * The detail page shows the artwork uncropped.
 */
export function WorkCard({ work, priority, sizes }: Props) {
  return (
    <Link href={`/work/${work.slug}`} className="group block">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f4f4f0]">
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes={sizes ?? "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"}
          priority={priority}
          className="object-cover transition-opacity duration-500 group-hover:opacity-90"
        />
      </div>
      <div className="mt-5">
        <WorkCaption work={work} />
      </div>
    </Link>
  );
}
