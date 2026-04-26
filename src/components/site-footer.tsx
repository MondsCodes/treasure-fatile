import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32">
      <div className="mx-auto max-w-[1800px] px-8 sm:px-14 py-12 flex flex-wrap gap-6 items-center justify-between tracked text-[10px]">
        <p className="text-muted">© {year} Treasure Fatile</p>
        <ul className="flex gap-7 text-muted">
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
