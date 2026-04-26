import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-10 pb-24">
      <header className="mb-12">
        <h1 className="text-[13px] tracking-[0.04em]">Contact</h1>
      </header>

      <section className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <p className="text-[12px] tracking-[0.04em] text-muted">Direct</p>
        </div>
        <div className="lg:col-span-10 space-y-8 text-[15px] leading-[1.7]">
          <div>
            <p className="text-[12px] tracking-[0.04em] text-muted mb-1">
              General &amp; sales
            </p>
            <a
              href="mailto:hello@treasurefatile.com"
              className="italic underline decoration-rule hover:decoration-foreground"
            >
              hello@treasurefatile.com
            </a>
          </div>
          <div>
            <p className="text-[12px] tracking-[0.04em] text-muted mb-1">
              Press &amp; exhibitions
            </p>
            <a
              href="mailto:press@treasurefatile.com"
              className="italic underline decoration-rule hover:decoration-foreground"
            >
              press@treasurefatile.com
            </a>
          </div>
          <div>
            <p className="text-[12px] tracking-[0.04em] text-muted mb-1">
              Studio
            </p>
            <p>Lagos, Nigeria — by appointment.</p>
          </div>
          <div>
            <p className="text-[12px] tracking-[0.04em] text-muted mb-1">
              Instagram
            </p>
            <a
              href="https://instagram.com"
              className="italic underline decoration-rule hover:decoration-foreground"
            >
              @treasure.fatile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
