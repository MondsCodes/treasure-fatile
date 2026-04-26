import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const exhibitions = [
  { year: "2026", title: "Three", venue: "Solo, Lagos" },
  { year: "2025", title: "Interior", venue: "Group, Online" },
  { year: "2024", title: "Halo", venue: "Solo, Lagos" },
  { year: "2023", title: "Whisper", venue: "Two-person, Open Studios" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-10 pb-24">
      <header className="mb-12">
        <h1 className="text-[13px] tracking-[0.04em]">About</h1>
      </header>

      <section className="grid gap-10 lg:grid-cols-12 mb-20">
        <div className="lg:col-span-2">
          <p className="text-[12px] tracking-[0.04em] text-muted">Bio</p>
        </div>
        <div className="lg:col-span-7 space-y-5 text-[15px] leading-[1.7]">
          <p>
            Treasure Fatile is a painter and image-maker working between Lagos
            and online. Her practice moves between oil on canvas, acrylic on
            two-canvas diptychs, mixed media on textile, and digital portraits
            — circling figures, gatherings, and the colours of memory.
          </p>
          <p>
            Recent paintings consider inheritance and the weight of the body,
            often through close cropped portraits in saturated reds, oranges,
            and ultramarines. She studied painting in Lagos and continues to
            work from a small studio there.
          </p>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-12 border-t border-rule pt-10">
        <div className="lg:col-span-2">
          <p className="text-[12px] tracking-[0.04em] text-muted">
            Selected exhibitions
          </p>
        </div>
        <ul className="lg:col-span-10 divide-y divide-rule text-[14px]">
          {exhibitions.map((e) => (
            <li
              key={`${e.year}-${e.title}`}
              className="grid grid-cols-[60px_1fr_auto] gap-6 py-3"
            >
              <span className="text-muted tabular-nums">{e.year}</span>
              <span className="italic">{e.title}</span>
              <span className="text-muted text-right">{e.venue}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
