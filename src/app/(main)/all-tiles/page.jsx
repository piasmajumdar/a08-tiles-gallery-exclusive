import { playFair } from "@/app/layout";
import TilesCard from "@/components/shared/TilesCard/TilesCard";
import { getAllTiles } from "@/lib/data";
import Link from "next/link";

const AllTilesPage = async() => {
    const tiles = await getAllTiles();
    // console.log(tiles)
    return (
        <div className="max-w-11/12 mx-auto py-6 mt-20">
            <div className="my-2">
                <h2 className={`text-3xl font-bold ${playFair.className}`}>All Tiles</h2>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    tiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default AllTilesPage;