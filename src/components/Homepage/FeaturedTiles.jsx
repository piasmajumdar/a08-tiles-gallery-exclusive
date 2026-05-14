import { playFair } from "@/app/layout";
import { getFeaturedTiles } from "@/lib/data";
import Link from "next/link";
import TilesCard from "../shared/TilesCard/TilesCard";

const FeaturedTiles = async() => {
    const tiles = await getFeaturedTiles();
    // console.log(tiles)
    return (
        <div className="max-w-11/12 mx-auto py-6">
            <div className="flex justify-between items-center my-2">
                <h2 className={`text-3xl font-bold ${playFair.className}`}>Featured Tiles</h2>
                <button className="text-[#b08244] border p-2 border-[#b08244] rounded-md">
                    <Link href={'/all-tiles'}>View all</Link>
                </button>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-4">
                {
                    tiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;