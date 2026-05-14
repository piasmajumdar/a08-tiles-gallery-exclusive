import { playFair } from '@/app/layout';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { BsDashLg } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { FaArrowRightArrowLeft, FaArrowRightLong, FaDiamond } from 'react-icons/fa6';
import { GoShieldCheck } from 'react-icons/go';
import { IoColorPaletteOutline, IoDiamondOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='h-screen flex justify-center sm:justify-start items-center bg-[url("/banner.png")] bg-cover bg-right'>
            <div className='w-11/12 mx-auto'>

                <div className='sm:p-30'>
                    <div className='max-w-md space-y-4'>
                        <div className='text-[#b08244] bg-white/40 p-1 rounded-md inline-flex items-center animate__animated animate__flash'><BsDashLg /> Premium Tiles for Beautiful Spaces</div>
                        <h2 className={`${playFair.className} text-5xl font-bold`}>Discover Your Perfect <span className='text-[#b08244]'>Aesthetic</span></h2>
                        <p>Explore our curated collection of premium tiles <br />crafted to transform every space beautifully.</p>
                        <div>
                            <Link href={'/all-tiles'}>
                                <button className="btn text-white bg-black rounded-full p-6 hover:scale-105 hover:backdrop-blur-xl hover:bg-black/80 ">Browse Now <FaArrowRightLong className='text-[#b08244]' /> </button>
                            </Link>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            <div className='flex items-center gap-2 text-[12px]'>
                                <IoDiamondOutline className='text-3xl text-[#b08244]'></IoDiamondOutline>
                                <div>
                                    <h4 className='font-bold'>Premium Quality</h4>
                                    <h4 className='text-black/30'>Finest materials</h4>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 text-[12px]'>
                                <GoShieldCheck className='text-3xl text-[#b08244]'></GoShieldCheck>
                                <div>
                                    <h4 className='font-bold'>Durable & Long Lasting</h4>
                                    <h4 className='text-black/30'>Built to perfection</h4>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 text-[12px]'>
                                <IoColorPaletteOutline className='text-3xl text-[#b08244]'></IoColorPaletteOutline>
                                <div>
                                    <h4 className='font-bold'>Modern Designs</h4>
                                    <h4 className='text-black/30'>Styles for every space</h4>
                                </div>
                            </div>
                        </div>
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