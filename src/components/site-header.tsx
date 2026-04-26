"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Work", href: "/work" },
  { label: "Digital", href: "/work/category/digital" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-rule">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 h-14 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="text-[13px] tracking-[0.04em] font-medium leading-none whitespace-nowrap"
        >
          Treasure Fatile
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7 text-[12px] tracking-[0.04em]">
          {nav.map((item) => {
            const active =
              item.href === "/work"
                ? pathname === "/work" || pathname.startsWith("/work/")
                : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground transition-colors"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
