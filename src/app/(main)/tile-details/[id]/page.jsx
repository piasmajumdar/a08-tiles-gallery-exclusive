import TilesImageScroll from "@/components/TilesDetails/TilesImageScroll";
import { getTileDetails } from "@/lib/data";
import Image from "next/image";
import { FaRegSquare, FaVectorSquare, FaRegCopy } from "react-icons/fa";


const TileDetailsPage = async ({ params }) => {
    const { id } = await params;
    const tile = await getTileDetails(id);
    return (
        <div className="bg-[#f8f7f4] min-h-screen p-4 md:p-8 mt-20">
            <div className="max-w-7xl mx-auto bg-white rounded-[30px] p-5 md:p-8 shadow-sm">

                <div className="breadcrumbs text-sm text-gray-400 mb-6">
                    <ul>
                        <li>Home</li>
                        <li>All Tiles</li>
                        <li className="text-black">{tile.title}</li>
                    </ul>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left */}
                    <div>
                        <div className="rounded-[24px] overflow-hidden">
                            <TilesImageScroll tile={tile}></TilesImageScroll>
                        </div>
                    </div>



                    <div>
                        <div>
                            <h1 className="text-5xl font-bold text-black">{tile.title}</h1>
                            <p className="text-2xl font-semibold mt-4 text-black">${tile.price}</p>
                        </div>
                        <div className="mt-4">
                            <div className="badge badge-success text-white px-4 py-3">
                                {tile.inStock ? "In Stock" : "Stock Out"}
                            </div>
                        </div>
                        <p className="text-gray-600 leading-7 mt-5 max-w-lg">{tile.description}</p>
                        <div className="mt-8 space-y-5">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                <div className="flex items-center gap-3">
                                    <FaRegSquare className="text-[#b08244]" />
                                    <span className="font-semibold">Category</span>
                                </div>

                                <span className="text-gray-600">{tile.category}</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                <div className="flex items-center gap-3">
                                    <FaRegCopy className="text-[#b08244]" />
                                    <span className="font-semibold">Material</span>
                                </div>

                                <span className="text-gray-600">{tile.material}</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                <div className="flex items-center gap-3">
                                    <FaVectorSquare className="text-[#b08244]" />
                                    <span className="font-semibold">Dimensions</span>
                                </div>
                                <span className="text-gray-600">{tile.dimensions}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TileDetailsPage;