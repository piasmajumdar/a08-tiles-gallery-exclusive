import { getTilesForMarqueeBar } from '@/lib/data';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeBar = async () => {
    const tiles = await getTilesForMarqueeBar();
    // console.log(tiles)

    return (
        <div>

            {/* Marquee */}
            <Marquee speed={100} pauseOnHover={true} className='bg-black text-white py-2 rounded-md'>
                {tiles.map(tile => {
                    return <div key={tile.id} className='pl-10 space-x-6'>
                        <span><span className='font-bold'>New Arrivals: </span> {tile.title}</span>
                        <span> | </span>
                        <span><span className='font-bold'>Weekly Feature:</span> Modern Geometric Patterns </span>
                        <span> | </span>
                        <span>Join the Community...</span>
                        <span> | </span>
                    </div>
                })}
            </Marquee>
        </div>
    );
};

export default MarqueeBar;