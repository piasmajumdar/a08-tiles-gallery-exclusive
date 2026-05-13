"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaUser } from "react-icons/fa";


const NavUserSection = () => {
    const { data: session, isPending } = authClient.useSession()
    console.log(session?.user)

    return (
        <div className="navbar-end">

            {isPending ?
                <span className="loading loading-dots loading-lg"></span>
                : session ?
                    <div className="flex items-center gap-1">
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><button onClick={async () => await authClient.signOut()}>Logout</button></li>
                                </ul>
                            </div>
                        </div>

                        <button onClick={async () => await authClient.signOut()} className="btn text-white bg-black rounded-lg hidden sm:flex"> <FaUser /> Logout</button>
                    </div>

                    : <div>
                        <Link href={'/auth/login'} className="btn text-white bg-black rounded-lg"><FaUser /> Login</Link>
                    </div>
            }

        </div>
    );
};

export default NavUserSection;