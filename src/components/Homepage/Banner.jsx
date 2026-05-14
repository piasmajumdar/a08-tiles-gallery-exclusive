import { playFair } from '@/app/layout';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { BsDashLg } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { FaArrowRightArrowLeft, FaArrowRightLong } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='h-[90vh] flex justify-center sm:justify-start items-center bg-[url("/banner.png")] bg-cover bg-right'>
            <div className='w-11/12 mx-auto'>

                <div className='sm:p-30'>
                    <div className='max-w-md space-y-4'>
                        <div className='text-[#b08244] bg-white/40 p-1 rounded-md inline-flex items-center animate__animated animate__flash'><BsDashLg /> Premium Tiles for Beautiful Spaces</div>
                        <h2 className={`${playFair.className} text-5xl font-bold`}>Discover Your Perfect <span className='text-[#b08244]'>Aesthetic</span></h2>
                        <p>Explore our curated collection of premium tiles <br />crafted to transform every space beautifully.</p>
                        <Link href={'/all-tiles'}>
                            <button className="btn text-white bg-black rounded-full p-6 hover:scale-105 hover:backdrop-blur-xl hover:bg-black/80 ">Browse Now <FaArrowRightLong className='text-[#b08244]' /> </button>
                        </Link>
                    </div>
                </div>

                {/* Marquee */}
                <Marquee speed={100} pauseOnHover={true} className='bg-black text-white py-2 rounded-md'>
                    New Arrivals: Ceramic Premiere || Trending: Global Marbel 
                </Marquee>

            </div>
        </div>
    );
};

export default Banner;