import Link from "next/link";
import tileIcon from "../../../public/icons8-tiles-66.png"
import Image from "next/image";
import { playFair } from "@/app/layout";
import NavLink from "./NavLink";
import NavUserSection from "./NavUserSection";

const Navbar = async () => {
    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/all-tiles'}>All Tiles</NavLink></li>
        <li><NavLink href={'/profile'}>My Profile</NavLink></li>
    </>

    return (
        <div className="sticky w-screen top-0 z-200 backdrop-blur-xl bg-white/20 backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 gap-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href={'/'} className={`${playFair.className} btn-ghost text-xl font-bold cursor-pointer flex items-center gap-1`}>
                        <Image src={tileIcon} alt="fav" height={40} width={40}></Image>
                        TilesGallery
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <NavUserSection></NavUserSection>
            </div>
        </div>
    );
};

export default Navbar;