import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1400px] px-8 sm:px-14 pb-24">
      <h2 className="tracked text-[12px] text-muted mb-10">Contact</h2>

      <section className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <p className="tracked text-[11px] text-muted">Direct</p>
        </div>
        <div className="lg:col-span-10 space-y-8 text-[15px] leading-[1.7]">
          <div>
            <p className="tracked text-[11px] text-muted mb-1.5">
              General &amp; Sales
            </p>
            <a
              href="mailto:hello@treasurefatile.com"
              className="underline decoration-rule hover:decoration-foreground"
            >
              hello@treasurefatile.com
            </a>
          </div>
          <div>
            <p className="tracked text-[11px] text-muted mb-1.5">
              Press &amp; Exhibitions
            </p>
            <a
              href="mailto:press@treasurefatile.com"
              className="underline decoration-rule hover:decoration-foreground"
            >
              press@treasurefatile.com
            </a>
          </div>
          <div>
            <p className="tracked text-[11px] text-muted mb-1.5">Studio</p>
            <p>Lagos, Nigeria — by appointment.</p>
          </div>
          <div>
            <p className="tracked text-[11px] text-muted mb-1.5">Instagram</p>
            <a
              href="https://instagram.com"
              className="underline decoration-rule hover:decoration-foreground"
            >
              @treasure.fatile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
