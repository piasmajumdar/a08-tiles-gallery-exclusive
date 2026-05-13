import Link from "next/link";

const Navbar = () => {
    const links = <>
        <Link className="font-bold btn border-0" href={'/'}>Home</Link>
        <Link className="font-bold btn border-0" href={'/all-tiles'}>All Tiles</Link>
        <Link className="font-bold btn border-0" href={'/profile'}>My Profile</Link>
    </>
    return (
        <div className="shadow-sm backdrop-blur-xl bg-white/20 backdrop-saturate-150">
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
                    <Link href={'/'} className="btn-ghost text-xl font-bold cursor-pointer">TilesGallery</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white bg-black rounded-lg">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;