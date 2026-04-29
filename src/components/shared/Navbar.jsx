import Link from "next/link"
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
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
        <div className="shadow-sm">
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
                    <a className="font-bold text-2xl text-blue-500">SunEssentials</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium text-neutral-700">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link 
                        className="btn bg-black text-white" 
                        href="/login"
                    >
                        <FaUserCircle />
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
