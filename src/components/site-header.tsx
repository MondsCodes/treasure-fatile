import Link from "next/link";

const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-rule/60">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl sm:text-2xl tracking-tight leading-none"
        >
          Treasure <span className="italic">Fatile</span>
        </Link>
        <nav className="flex items-center gap-6 sm:gap-9 text-[13px] uppercase tracking-[0.2em]">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
