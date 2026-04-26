import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule/60 mt-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-12 grid gap-10 sm:grid-cols-3 text-sm">
        <div className="space-y-2">
          <p className="font-display text-2xl leading-none">
            Treasure <span className="italic">Fatile</span>
          </p>
          <p className="text-muted">Studio — Lagos / Online</p>
        </div>
        <div className="space-y-2">
          <p className="uppercase tracking-[0.22em] text-xs text-muted">
            Elsewhere
          </p>
          <ul className="space-y-1.5">
            <li>
              <a
                href="https://instagram.com"
                className="hover:text-accent transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@treasurefatile.com"
                className="hover:text-accent transition-colors"
              >
                hello@treasurefatile.com
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2 sm:text-right">
          <p className="uppercase tracking-[0.22em] text-xs text-muted">
            Index
          </p>
          <ul className="space-y-1.5">
            <li>
              <Link href="/work" className="hover:text-accent transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-accent transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule/60">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 py-5 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-muted">
          <p>© {year} Treasure Fatile. All works and images.</p>
          <p className="font-mono uppercase tracking-[0.2em]">
            Site v1.0 — handmade
          </p>
        </div>
      </div>
    </footer>
  );
}
