import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 py-10 grid gap-8 sm:grid-cols-3 text-[12px] tracking-[0.04em]">
        <p className="text-muted">© {year} Treasure Fatile</p>
        <ul className="flex gap-5 sm:justify-center text-muted">
          <li>
            <Link href="/work" className="hover:text-foreground">
              Work
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex gap-5 sm:justify-end text-muted">
          <li>
            <a href="https://instagram.com" className="hover:text-foreground">
              Instagram
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@treasurefatile.com"
              className="hover:text-foreground"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
