
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { BiCategory } from "react-icons/bi";
import { FaRegSquare, FaVectorSquare, FaRegCopy, FaUser } from "react-icons/fa";
import { MdAddAPhoto, MdEmail, MdOutlineManageAccounts } from "react-icons/md";
import { RiColorFilterAiLine } from "react-icons/ri";


const MyProfilePage = async () => {

    const { user } = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(user)

    return (
        <div className="bg-[#f8f7f4] min-h-screen p-4 md:p-8 mt-20">
            <div className="max-w-lg mx-auto bg-white rounded-[30px] p-5 md:p-8 shadow-sm">

                <div className="breadcrumbs text-sm text-gray-400 mb-6">
                    <ul>
                        <li>Home</li>
                        <li className="text-black">My Profile</li>
                    </ul>
                </div>


                <div>

                    <div>
                        <div className="flex gap-6 flex-wrap justify-center sm:justify-start items-center">
                            <figure className=' w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center'>
                                <Image
                                    src={user?.image}
                                    alt={user?.name}
                                    height={400}
                                    width={400}
                                    className='h-full w-full' />
                            </figure>
                            <div className="text-center sm:text-start">
                                <h1 className="sm:text-xl font-bold text-black">{user?.name}</h1>
                                <p className="mt-4 text-black">{user?.email}</p>
                                <div className="mt-4 flex justify-center sm:justify-start">
                                    <div className="badge badge-success text-white px-4 py-3">
                                        Member
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-8 space-y-5">
                            
                            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 pb-3">
                                <div className="flex items-center gap-3">
                                    <MdOutlineManageAccounts className="text-[#b08244] text-2xl" />
                                    <span className="font-semibold">Name</span>
                                </div>
                                <span className="text-gray-600">{user?.name}</span>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 pb-3">
                                <div className="flex items-center gap-3">
                                    <MdEmail className="text-[#b08244] text-2xl" />
                                    <span className="font-semibold">Email</span>
                                </div>
                                <span className="text-gray-600">{user?.email}</span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 pb-3">
                                <div className="flex items-center gap-3">
                                    <MdAddAPhoto className="text-[#b08244] text-4xl" />
                                    <span className="font-semibold">Photo URL</span>
                                </div>
                                <span className="text-gray-600 line-clamp-1">{user?.image}</span>
                            </div>

                        </div>

                        <Link href={'/profile/update'} className="btn w-full text-white bg-black rounded-lg mt-6"><FaUser /> Update Profile</Link>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyProfilePage;