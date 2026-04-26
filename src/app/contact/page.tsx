import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Inquiries, studio visits, and press for Treasure Fatile.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-16 sm:py-24">
      <header className="grid gap-6 lg:grid-cols-12 mb-20">
        <p className="lg:col-span-3 text-xs uppercase tracking-[0.28em] text-muted">
          Contact
        </p>
        <h1 className="lg:col-span-9 font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight">
          For inquiries, studio visits,
          <br />
          <span className="italic">and slow correspondence.</span>
        </h1>
      </header>

      <section className="grid gap-12 lg:grid-cols-12 border-t border-rule/60 pt-12">
        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Direct
          </p>
        </div>
        <div className="lg:col-span-9 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              General & sales
            </p>
            <a
              href="mailto:hello@treasurefatile.com"
              className="font-display text-3xl sm:text-4xl italic hover:text-accent transition-colors"
            >
              hello@treasurefatile.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              Press & exhibitions
            </p>
            <a
              href="mailto:press@treasurefatile.com"
              className="font-display text-3xl sm:text-4xl italic hover:text-accent transition-colors"
            >
              press@treasurefatile.com
            </a>
          </div>
          <div className="grid gap-2">
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              Studio
            </p>
            <p className="text-base leading-relaxed">
              By appointment.
              <br />
              Lagos, Nigeria.
            </p>
          </div>
          <div className="grid gap-2">
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              Elsewhere
            </p>
            <ul className="text-base space-y-1">
              <li>
                <a
                  href="https://instagram.com"
                  className="underline decoration-rule hover:decoration-foreground transition-colors"
                >
                  Instagram — @treasure.fatile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
