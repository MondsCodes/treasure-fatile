export type Work = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions?: string;
  series?: string;
  description?: string;
  /** Aspect ratio (w/h). Used for placeholder framing. */
  ratio: number;
  /** Public path under /public, e.g. "/works/01.jpg". When omitted, a tinted placeholder renders. */
  image?: string;
  /** Placeholder gradient used when no image is provided. */
  tint: string;
  featured?: boolean;
};

export const works: Work[] = [
  {
    slug: "the-quiet-hour",
    title: "The Quiet Hour",
    year: 2026,
    medium: "Oil on linen",
    dimensions: "120 × 90 cm",
    series: "Nocturnes",
    description:
      "A study of light folding into itself at the edge of the room.",
    ratio: 4 / 5,
    tint: "linear-gradient(150deg,#2e1a14 0%,#5b3324 45%,#a96a3f 100%)",
    featured: true,
  },
  {
    slug: "saturday-mother",
    title: "Saturday, Mother",
    year: 2025,
    medium: "Acrylic and pastel on paper",
    dimensions: "76 × 56 cm",
    series: "Domestic",
    ratio: 3 / 4,
    tint: "linear-gradient(160deg,#f1d9b8 0%,#d2956a 50%,#7a3a23 100%)",
    featured: true,
  },
  {
    slug: "river-language",
    title: "River, Language",
    year: 2025,
    medium: "Oil on canvas",
    dimensions: "150 × 110 cm",
    series: "Nocturnes",
    ratio: 4 / 5,
    tint: "linear-gradient(180deg,#0e1e22 0%,#23484f 60%,#7da9a8 100%)",
    featured: true,
  },
  {
    slug: "carrying",
    title: "Carrying",
    year: 2025,
    medium: "Charcoal and chalk",
    dimensions: "42 × 30 cm",
    ratio: 1,
    tint: "linear-gradient(135deg,#1a1410 0%,#3d2c20 50%,#857260 100%)",
  },
  {
    slug: "okun-iii",
    title: "Okùn III",
    year: 2024,
    medium: "Oil on linen",
    dimensions: "200 × 140 cm",
    series: "Okùn",
    ratio: 5 / 7,
    tint: "linear-gradient(200deg,#3a1a1a 0%,#822f2a 60%,#e6c07a 100%)",
    featured: true,
  },
  {
    slug: "the-listening-tree",
    title: "The Listening Tree",
    year: 2024,
    medium: "Oil and wax on panel",
    dimensions: "60 × 60 cm",
    ratio: 1,
    tint: "linear-gradient(135deg,#0f1a10 0%,#2c4f2a 55%,#c4b86b 100%)",
  },
  {
    slug: "blue-grammar",
    title: "Blue Grammar",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: "100 × 80 cm",
    ratio: 4 / 5,
    tint: "linear-gradient(170deg,#0c1a36 0%,#2a4d7a 60%,#a8c0d8 100%)",
  },
  {
    slug: "study-no-7",
    title: "Study No. 7",
    year: 2023,
    medium: "Graphite on paper",
    dimensions: "30 × 24 cm",
    series: "Studies",
    ratio: 5 / 7,
    tint: "linear-gradient(180deg,#efe9dc 0%,#c8b89a 100%)",
  },
  {
    slug: "the-room-she-painted",
    title: "The Room She Painted",
    year: 2023,
    medium: "Oil on linen",
    dimensions: "180 × 130 cm",
    series: "Domestic",
    ratio: 4 / 5,
    tint: "linear-gradient(150deg,#3a2418 0%,#8c4a2b 60%,#f1cf9d 100%)",
  },
  {
    slug: "morning-iii",
    title: "Morning III",
    year: 2022,
    medium: "Acrylic on paper",
    dimensions: "50 × 40 cm",
    ratio: 4 / 5,
    tint: "linear-gradient(170deg,#fdf3e0 0%,#e2a778 60%,#894a2c 100%)",
  },
  {
    slug: "psalm",
    title: "Psalm",
    year: 2022,
    medium: "Oil on canvas",
    dimensions: "90 × 70 cm",
    ratio: 4 / 5,
    tint: "linear-gradient(180deg,#1c0e1c 0%,#4a2649 55%,#c89dc0 100%)",
  },
  {
    slug: "first-light",
    title: "First Light",
    year: 2021,
    medium: "Oil on linen",
    dimensions: "70 × 50 cm",
    ratio: 5 / 7,
    tint: "linear-gradient(150deg,#2a1c10 0%,#7e5230 60%,#f4d8a4 100%)",
  },
];

export function worksByYear() {
  const map = new Map<number, Work[]>();
  for (const w of works) {
    const list = map.get(w.year) ?? [];
    list.push(w);
    map.set(w.year, list);
  }
  return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
}

export function featuredWorks() {
  return works.filter((w) => w.featured);
}

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
