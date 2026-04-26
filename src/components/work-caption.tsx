import type { Work } from "@/lib/works";

type Props = {
  work: Work;
  className?: string;
};

/**
 * Caption rendered below an artwork in the James Jean style:
 *   *Title*, Medium, Dimensions, Year
 */
export function WorkCaption({ work, className }: Props) {
  return (
    <p className={`caption ${className ?? ""}`}>
      <span className="work-title">{work.title}</span>
      <span className="sep">,</span>
      {work.medium}
      {work.dimensions && (
        <>
          <span className="sep">,</span>
          {work.dimensions}
        </>
      )}
      <span className="sep">,</span>
      {work.year}
    </p>
  );
}
