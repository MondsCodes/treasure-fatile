import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/lib/works";
import { WorkCaption } from "@/components/work-caption";

type Props = {
  work: Work;
  priority?: boolean;
  sizes?: string;
};

export function WorkCard({ work, priority, sizes }: Props) {
  return (
    <Link href={`/work/${work.slug}`} className="group block">
      <div
        className="relative w-full overflow-hidden bg-rule/40"
        style={{ aspectRatio: `${work.width} / ${work.height}` }}
      >
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes={sizes ?? "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"}
          priority={priority}
          className="object-cover transition-opacity duration-500 group-hover:opacity-90"
        />
      </div>
      <div className="mt-3">
        <WorkCaption work={work} />
      </div>
    </Link>
  );
}
