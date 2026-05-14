"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {

    const [searchInp, setSearchInp] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const params = new URLSearchParams(searchParams);
        searchInp? params.set('search', searchInp) : params.delete('search');
        router.push(`${pathName}?${params.toString()}`)

    }

    return (
        <section className="w-full bg-[#f8f7f4] pb-4 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className={`text-3xl sm:text-5xl font-bold text-[#1e1e1e]`}>
                        Discover Premium Tiles
                    </h1>

                    <p className="text-gray-500 mt-4 sm:text-lg">
                        Search tiles by title, material, style, or aesthetic.
                    </p>
                </div>

                {/* Search Box */}
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        defaultValue={''}
                        onChange={(e)=>setSearchInp(e.target.value)}
                        type="text"
                        name="searchInput"
                        placeholder="Search tiles by title..."
                        className="w-full h-12 sm:h-[72px] rounded-full bg-white pl-8 pr-36 text-lg text-black placeholder:text-gray-400 border border-gray-200 outline-none shadow-[0_10px_40px_rgba(0,0,0,0.06)] focus:border-black transition-all duration-300"
                    />

                    {/* Search Button */}
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 h-9 sm:h-[58px] px-2 sm:px-8 rounded-full bg-black hover:bg-[#b08244] text-white text-base font-semibold flex items-center gap-2 transition-all duration-300">
                        <IoSearch size={22} />
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
}