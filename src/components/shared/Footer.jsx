import Image from "next/image"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="bg-slate-800 text-white">
            <footer className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
                <aside>
                    <div className="flex gap-2 items-center">
                        <Image 
                            width={35} 
                            height={35} 
                            src="/logo.png" 
                            alt="logo">
                        </Image>

                        <h2 
                            className="bg-clip-text bg-linear-to-r from-amber-400 to-orange-600 font-bold text-transparent text-2xl"
                        >
                            SunEssentials
                        </h2>
                    </div>

                    <p className="max-w-xs">A modern summer eCommerce platform where users can explore and purchase seasonal products.</p>
                </aside>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a><AiFillInstagram /></a>
                        <a><FaYoutube /></a>
                        <a><FaFacebook /></a>
                    </div>
                </nav>
            </footer>

            <footer 
                className="border-t border-t-white pb-4 pt-4 text-center text-sm"
            >
                Copyright © 2026 - All right reserved by SunEssentials 
            </footer>
        </div>
    )
}

export default Footer
