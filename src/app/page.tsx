import { HomeSlideshow } from "@/components/home-slideshow";
import { works } from "@/lib/works";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1800px] px-8 sm:px-14 pb-12">
      <HomeSlideshow works={works} />
    </div>
  );
}
