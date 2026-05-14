"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ className, children, href }) => {
    const pathName = usePathname();

    const isActive = pathName === href;

    return (
        <Link
            href={href}
            className={
                `btn
                ${isActive ? "text-[#af8e08] after:w-3/4" : ""} ${className} 
                transition-all duration-300 ease-in-out

            
            border border-white/10
            backdrop-blur-md

            hover:bg-black/20
            hover:border-black/30
            hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
            hover:scale-105

            after:absolute after:left-1/2 after:-bottom-1
            after:h-0.5 after:w-0
            after:bg-[#af8e08]
            after:transition-all after:duration-300
            after:-translate-x-1/2

            hover:after:w-3/4`}
        >
            {children}
        </Link>
    );
};

export default NavLink;