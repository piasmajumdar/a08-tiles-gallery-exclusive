import Link from "next/link";
import tileIcon from "../../../public/icons8-tiles-66.png"
import { format } from "date-fns";


import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterestP,
    FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    const year = format(new Date(), 'yyyy')
    return (
        <footer className="bg-[#191919] text-white mt-24">
            <div className="w-11/12 mx-auto px-6 py-16">

                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <Link href={'/'} className="text-3xl font-bold font-serif flex items-center gap-1">
                            <Image src={tileIcon} alt="fav" height={40} width={40}></Image>
                            TilesGallery
                        </Link>

                        <p className="mt-5 text-gray-400 leading-7 text-sm">
                            Discover premium aesthetic tiles crafted for modern interiors,
                            luxury spaces, and timeless architecture.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-6">

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                            >
                                <FaTwitter />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                            >
                                <FaPinterestP />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition duration-300"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/all-tiles"
                                    className="hover:text-white transition duration-300"
                                >
                                    All Tiles
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/profile"
                                    className="hover:text-white transition duration-300"
                                >
                                    My Profile
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/auth/login"
                                    className="hover:text-white transition duration-300"
                                >
                                    Login
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Categories
                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li className="hover:text-white transition duration-300 cursor-pointer">
                                Ceramic Tiles
                            </li>

                            <li className="hover:text-white transition duration-300 cursor-pointer">
                                Marble Finish
                            </li>

                            <li className="hover:text-white transition duration-300 cursor-pointer">
                                Geometric Style
                            </li>

                            <li className="hover:text-white transition duration-300 cursor-pointer">
                                Minimalist Design
                            </li>

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-gray-400 text-sm leading-7">

                            <p>
                                Dhaka, Bangladesh
                            </p>

                            <p>
                                support@tilesgallery.com
                            </p>


                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-gray-500">
                        © {year} TilesGallery. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">

                        <Link
                            href="#"
                            className="hover:text-white transition duration-300"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="hover:text-white transition duration-300"
                        >
                            Terms & Conditions
                        </Link>

                    </div>

                </div>
            </div>
        </footer>
    );
}