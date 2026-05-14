import SearchBar from "@/components/shared/SearchBar/SearchBar";
import TilesCard from "@/components/shared/TilesCard/TilesCard";
import { getAllTiles } from "@/lib/data";


const AllTilesPage = async ({ searchParams }) => {
    const { search } = await searchParams;
    // console.log(search);

    const tiles = await getAllTiles();
    // console.log(tiles)
    let filtered_tiles = [...tiles]

    if (search) {
        const searchText = search.toLowerCase().trim();

        filtered_tiles = tiles.filter(tile =>
            tile.title?.toLowerCase().includes(searchText) ||
            tile.category?.toLowerCase().includes(searchText) ||
            tile.description?.toLowerCase().includes(searchText) ||
            tile.material?.toLowerCase().includes(searchText)
        );

    } else {

    }
    // console.log(filtered_tiles);


    return (
        <div className="max-w-11/12 mx-auto py-6 mt-20">
            <div className="my-2">
                {/* <h2 className={`text-3xl font-bold ${playFair.className}`}>All Tiles</h2> */}
                <SearchBar></SearchBar>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    filtered_tiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default AllTilesPage;