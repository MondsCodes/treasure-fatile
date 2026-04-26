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
    <header className="bg-background">
      <div className="mx-auto max-w-[1800px] px-8 sm:px-14 pt-10 pb-12 flex items-start justify-between gap-6">
        <Link
          href="/"
          className="tracked text-[14px] sm:text-[15px] leading-none whitespace-nowrap"
        >
          Treasure Fatile
        </Link>
        <nav className="flex items-center gap-7 sm:gap-10 tracked text-[11px]">
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
