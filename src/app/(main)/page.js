import Banner from "@/components/Homepage/Banner";
import FeaturedTiles from "@/components/Homepage/FeaturedTiles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Banner></Banner>
      <FeaturedTiles></FeaturedTiles>
    </div>
  );
}
