import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About the artist Treasure Fatile — biography, CV, and statement.",
};

const exhibitions = [
  { year: "2026", title: "The Quiet Hour", venue: "Solo · Studio Lagos" },
  { year: "2025", title: "Soft Geographies", venue: "Group · Rele Gallery" },
  { year: "2024", title: "Okùn", venue: "Solo · Project Space, Online" },
  { year: "2023", title: "Domestic", venue: "Two-person · Open Studios" },
  { year: "2022", title: "First Light", venue: "Group · The Annex" },
];

const press = [
  { year: "2025", title: "On Light and Linen", venue: "Contemporary &" },
  { year: "2024", title: "Painters to Watch", venue: "Atmos Magazine" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-16 sm:py-24">
      <header className="grid gap-6 lg:grid-cols-12 mb-16">
        <p className="lg:col-span-3 text-xs uppercase tracking-[0.28em] text-muted">
          About — Statement
        </p>
        <h1 className="lg:col-span-9 font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight">
          <span className="italic">Painting</span> as a way of paying
          attention.
        </h1>
      </header>

      <section className="grid gap-10 lg:grid-cols-12 mb-24">
        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Biography
          </p>
        </div>
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            Treasure Fatile is a painter working between Lagos and online. Her
            practice circles around the slow time of the domestic — the kettle,
            the worn rug, the way light arrives at a window in October — and
            asks what it means to record a room with care.
          </p>
          <p>
            Working primarily in oil on linen, with frequent returns to paper
            and pastel, her recent series{" "}
            <em className="font-display">Nocturnes</em> and{" "}
            <em className="font-display">Okùn</em> consider water, weather, and
            inheritance as forms of language. She studied painting in Lagos and
            continues to work from a small studio overlooking the lagoon.
          </p>
          <p>
            Her work has been shown in solo and group exhibitions across West
            Africa and online. Selected works are held in private collections
            in Lagos, London, and New York.
          </p>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-12 border-t border-rule/60 pt-12 mb-24">
        <p className="lg:col-span-3 text-xs uppercase tracking-[0.28em] text-muted">
          Selected exhibitions
        </p>
        <ul className="lg:col-span-9 divide-y divide-rule/60">
          {exhibitions.map((e) => (
            <li
              key={`${e.year}-${e.title}`}
              className="grid grid-cols-[60px_1fr_auto] gap-6 py-4 text-sm sm:text-base"
            >
              <span className="font-mono text-muted">{e.year}</span>
              <span className="font-display text-lg italic">{e.title}</span>
              <span className="text-muted text-right">{e.venue}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-10 lg:grid-cols-12 border-t border-rule/60 pt-12">
        <p className="lg:col-span-3 text-xs uppercase tracking-[0.28em] text-muted">
          Press
        </p>
        <ul className="lg:col-span-9 divide-y divide-rule/60">
          {press.map((p) => (
            <li
              key={`${p.year}-${p.title}`}
              className="grid grid-cols-[60px_1fr_auto] gap-6 py-4 text-sm sm:text-base"
            >
              <span className="font-mono text-muted">{p.year}</span>
              <span className="font-display text-lg italic">{p.title}</span>
              <span className="text-muted text-right">{p.venue}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
