import Image from "next/image"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="footer sm:footer-horizontal p-10 text-white max-w-7xl mx-auto">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer text-white border-base-300 border-t px-10 py-4 max-w-7xl mx-auto">
                <aside className="grid-flow-col items-center">
                    <Image 
                        width={35} 
                        height={35} 
                        src="/logo.png" 
                        alt="logo">
                    </Image>
                    <h2 className="font-bold text-2xl">SunEssentials</h2>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a><AiFillInstagram /></a>
                        <a><FaYoutube /></a>
                        <a><FaFacebook /></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
