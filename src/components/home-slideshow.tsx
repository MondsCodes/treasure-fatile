"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/lib/works";

const INTERVAL_MS = 10_000;

type Props = { works: Work[] };

export function HomeSlideshow({ works }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(performance.now());
  const rafRef = useRef<number | null>(null);

  const total = works.length;
  const current = works[index];

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + total) % total);
      startRef.current = performance.now();
      setProgress(0);
    },
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const p = Math.min(elapsed / INTERVAL_MS, 1);
      setProgress(p);
      if (p >= 1) {
        setIndex((i) => (i + 1) % total);
        startRef.current = now;
        setProgress(0);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    startRef.current = performance.now() - progress * INTERVAL_MS;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === " ") {
        e.preventDefault();
        setPaused((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const secondsLeft = Math.max(0, Math.ceil((1 - progress) * (INTERVAL_MS / 1000)));

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Stage */}
      <div className="relative w-full h-[calc(100vh-180px)] min-h-[480px] flex items-center justify-center">
        {works.map((w, i) => (
          <Link
            key={w.slug}
            href={`/work/${w.slug}`}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="relative h-full max-h-full"
              style={{ aspectRatio: `${w.width} / ${w.height}` }}
            >
              <Image
                src={w.image}
                alt={w.title}
                fill
                priority={i === index}
                sizes="(min-width:1400px) 1100px, 90vw"
                className="object-contain"
              />
            </div>
          </Link>
        ))}

        {/* Prev / Next buttons */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous work"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 size-11 rounded-full border border-rule bg-background/80 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
        >
          <Arrow direction="left" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next work"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 size-11 rounded-full border border-rule bg-background/80 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
        >
          <Arrow direction="right" />
        </button>
      </div>

      {/* Caption + timer */}
      <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-end gap-6 sm:gap-10">
        <Link
          href={`/work/${current.slug}`}
          className="space-y-1.5 hover:opacity-80 transition-opacity"
        >
          <p className="caption-title">{current.title}</p>
          <p className="caption-meta">
            {current.medium}
            {current.dimensions && `, ${current.dimensions}`}, {current.year}.
          </p>
        </Link>

        <Timer
          seconds={secondsLeft}
          progress={progress}
          paused={paused}
          onToggle={() => setPaused((p) => !p)}
        />

        <p className="caption-meta tracked text-right tabular-nums">
          {String(index + 1).padStart(2, "0")}{" "}
          <span className="text-rule">/</span>{" "}
          {String(total).padStart(2, "0")}
        </p>
      </div>

      {/* Progress bar */}
      <div className="mt-5 h-px bg-rule overflow-hidden">
        <div
          className="h-full bg-foreground"
          style={{
            width: `${progress * 100}%`,
            transition: paused ? "none" : "width 80ms linear",
          }}
        />
      </div>
    </div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  const rotate = direction === "left" ? "rotate-180" : "";
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-4 ${rotate}`}
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Timer({
  seconds,
  progress,
  paused,
  onToggle,
}: {
  seconds: number;
  progress: number;
  paused: boolean;
  onToggle: () => void;
}) {
  const r = 14;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - progress);
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={paused ? "Resume" : "Pause"}
      className="relative size-9 grid place-items-center group"
    >
      <svg className="size-9 -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          stroke="var(--rule)"
          strokeWidth="1"
        />
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="1"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: paused ? "none" : "stroke-dashoffset 80ms linear" }}
        />
      </svg>
      <span className="absolute caption-meta tabular-nums text-[10px]">
        {paused ? "❚❚" : seconds}
      </span>
    </button>
  );
}
