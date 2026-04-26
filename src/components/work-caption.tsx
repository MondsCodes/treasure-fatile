import type { Work } from "@/lib/works";

type Props = {
  work: Work;
  className?: string;
};

/**
 * Two-line caption in the JJ style:
 *   PEACOCK II
 *   Acrylic on Canvas, 80 × 60", 2025.
 */
export function WorkCaption({ work, className }: Props) {
  return (
    <div className={`space-y-1.5 ${className ?? ""}`}>
      <p className="caption-title">{work.title}</p>
      <p className="caption-meta">
        {work.medium}
        {work.dimensions && `, ${work.dimensions}`}, {work.year}.
      </p>
    </div>
  );
}
