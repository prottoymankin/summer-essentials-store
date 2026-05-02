"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
    const router = useRouter();
    const userData = authClient.useSession();
    const user = userData.data?.user
    
    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/");
        router.refresh();
    }

    const links = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>

            <li>
                <Link href="/products">Products</Link>
            </li>

            <li>
                <Link href="/my-profile">My Profile</Link>
            </li>
        </>
    )

    return (
        <div className="shadow-sm animate__animated animate__fadeInDown">
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image 
                            width={35} 
                            height={35} 
                            src="/logo.png" 
                            alt="logo">
                        </Image>
                        <Link 
                            className="bg-clip-text bg-linear-to-r from-amber-400 to-orange-600 font-bold text-transparent text-2xl"
                            href="/"
                        >
                            SunEssentials
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul 
                        className="font-medium menu menu-horizontal px-1 text-slate-800"
                    >
                        {links}
                    </ul>
                </div>

                { !user && (
                    <div className="navbar-end space-x-2">
                        <Link 
                            className="bg-amber-400 btn rounded-full text-slate-900" 
                            href="/login"
                        >
                            Login
                        </Link>

                        <Link 
                            className="bg-orange-600 btn rounded-full text-white"
                            href="/signup"
                        >
                            Signup
                        </Link>
                    </div>
                )}

                {
                    user && (
                        <div className="navbar-end space-x-2">
                            <Link 
                                className="relative h-10 w-10 rounded-full overflow-hidden"
                                href="/my-profile"
                            >
                                <Image 
                                    src={user?.image}
                                    alt={user?.name}
                                    referrerPolicy="no-referrer"
                                    fill
                                    className="object-cover"
                                />
                            </Link>

                            <button 
                                onClick={handleSignOut}
                                className="btn bg-amber-400 rounded-full text-slate-900"
                            >
                                <FaSignOutAlt />
                                Sign out
                            </button>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default Navbar;
