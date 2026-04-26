// NOTE FOR TREASURE: dimensions below are placeholders matching the visual aspect
// of each piece. Replace `dimensions` strings with the real measurements (inches),
// and edit `title` / `medium` as needed. The format follows the convention:
//   "Acrylic on Two Canvases, 150 x 98", 2024"
// which is rendered by the work detail page as: medium, dimensions, year.

export type Category = "traditional" | "digital";

export type Work = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  /** Inches, formatted exactly as it should appear, e.g. `60 x 48"`. Optional. */
  dimensions?: string;
  category: Category;
  series?: string;
  description?: string;
  image: string;
  /** Pixel width/height — used for next/image and to compute aspect ratio. */
  width: number;
  height: number;
  featured?: boolean;
};

export const works: Work[] = [
  {
    slug: "three",
    title: "Three",
    year: 2026,
    medium: "Mixed media on textile",
    dimensions: '72 x 39"',
    category: "traditional",
    image: "/works/three-2026.jpg",
    width: 2862,
    height: 1536,
    featured: true,
  },
  {
    slug: "interior",
    title: "Interior",
    year: 2025,
    medium: "Oil on raw canvas",
    dimensions: '48 x 40"',
    category: "traditional",
    image: "/works/interior-2025.jpg",
    width: 2029,
    height: 1728,
    featured: true,
  },
  {
    slug: "crowd",
    title: "Crowd",
    year: 2025,
    medium: "Oil on canvas",
    dimensions: '36 x 24"',
    category: "traditional",
    image: "/works/crowd-2025.jpg",
    width: 526,
    height: 360,
    featured: true,
  },
  {
    slug: "halo",
    title: "Halo",
    year: 2024,
    medium: "Acrylic on canvas",
    dimensions: '40 x 30"',
    category: "traditional",
    image: "/works/halo-2024.jpg",
    width: 360,
    height: 544,
    featured: true,
  },
  {
    slug: "gathering",
    title: "The Gathering",
    year: 2024,
    medium: "Acrylic on canvas",
    dimensions: '36 x 27"',
    category: "traditional",
    image: "/works/gathering-2024.jpg",
    width: 488,
    height: 360,
  },
  {
    slug: "twins",
    title: "Twins",
    year: 2024,
    medium: "Oil on Two Canvases",
    dimensions: '24 x 16"',
    category: "traditional",
    image: "/works/twins-2024.jpg",
    width: 558,
    height: 360,
    featured: true,
  },
  {
    slug: "reclining",
    title: "Reclining",
    year: 2024,
    medium: "Oil on linen",
    dimensions: '40 x 26"',
    category: "traditional",
    image: "/works/reclining-2024.jpg",
    width: 576,
    height: 360,
  },
  {
    slug: "two-figures",
    title: "Two Figures",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: '24 x 18"',
    category: "traditional",
    image: "/works/two-figures-2024.jpg",
    width: 360,
    height: 486,
  },
  {
    slug: "study-yellow",
    title: "Study (Yellow)",
    year: 2024,
    medium: "Acrylic on paper",
    dimensions: '12 x 9"',
    category: "traditional",
    image: "/works/study-yellow-2024.jpg",
    width: 360,
    height: 480,
  },
  {
    slug: "red-chair",
    title: "Red Chair",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: '30 x 24"',
    category: "traditional",
    image: "/works/red-chair-2023.jpg",
    width: 1121,
    height: 1445,
    featured: true,
  },
  {
    slug: "iya",
    title: "Ìyá",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: '20 x 16"',
    category: "traditional",
    image: "/works/iya-2023.jpg",
    width: 1624,
    height: 2048,
  },
  {
    slug: "whisper",
    title: "Whisper",
    year: 2023,
    medium: "Acrylic on Two Canvases",
    dimensions: '16 x 11"',
    category: "traditional",
    image: "/works/whisper-diptych-2023.jpg",
    width: 256,
    height: 376,
  },
  {
    slug: "bloom",
    title: "Bloom",
    year: 2023,
    medium: "Digital",
    category: "digital",
    image: "/works/bloom-2023.jpg",
    width: 2048,
    height: 2048,
  },
  {
    slug: "profile",
    title: "Profile",
    year: 2023,
    medium: "Digital",
    category: "digital",
    image: "/works/profile-blue-circle-2023.jpg",
    width: 1122,
    height: 1452,
  },
  {
    slug: "hibiscus",
    title: "Hibiscus",
    year: 2023,
    medium: "Digital",
    category: "digital",
    image: "/works/blue-hibiscus-2023.jpg",
    width: 360,
    height: 518,
  },
  {
    slug: "hieroglyph",
    title: "Untitled (Hieroglyph)",
    year: 2021,
    medium: "Digital",
    category: "digital",
    image: "/works/orange-hieroglyph-2021.jpg",
    width: 360,
    height: 486,
  },
];

export function ratio(w: Work) {
  return w.width / w.height;
}

export function worksByYear(category?: Category) {
  const filtered = category ? works.filter((w) => w.category === category) : works;
  const map = new Map<number, Work[]>();
  for (const w of filtered) {
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

export function adjacentWorks(slug: string) {
  const idx = works.findIndex((w) => w.slug === slug);
  return { prev: works[idx - 1], next: works[idx + 1] };
}
