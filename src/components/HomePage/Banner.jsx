import Image from "next/image";
import Link from "next/link";
import heroImg from "../../assets/hero.png";
import delivery from "../../assets/delivery.png";
import time from "../../assets/time.png";
import { FaArrowRight } from "react-icons/fa";
import 'animate.css';

const Banner = () => {
  return (
    <section 
      className="bg-linear-to-r from-amber-200 to-orange-300 min-h-[60vh] flex flex-col lg:flex-row gap-5 items-center justify-around my-15 p-6 rounded-2xl text-slate-800"
    >
      <div className="flex flex-col gap-6 items-center lg:items-start animate__animated animate__fadeInLeft">
        <div className="space-y-2 text-center lg:text-left">
          <h1 className="font-semibold text-5xl">SUMMER SALE ☀️</h1>
          <h2 className="font-medium text-2xl">
            Up to 50% OFF on Summer Essentials🔥
          </h2>
        </div>

        <Link 
          href="/products" 
          className="bg-orange-600 border-none btn rounded-full text-white shadow-none animate__animated animate__pulse animate__infinite"
        >
          Shop now
          <FaArrowRight />
        </Link>

        <div className="flex gap-4 font-medium">
          <div className="flex items-center gap-2">
            <Image src={time} alt="delivery icon" />
            <span>Limited time</span>
          </div>

          <div className="flex items-center gap-2">
            <Image src={delivery} alt="delivery icon" />
            <span>Free Delivery</span>
          </div>
        </div>
      </div>

      <Image src={heroImg} alt="hero image" className="animate__animated animate__fadeInRight"/>
    </section>
  );
};

export default Banner;