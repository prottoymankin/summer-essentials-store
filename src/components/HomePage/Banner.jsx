import Image from "next/image";
import Link from "next/link";
import heroImg from "../../assets/hero.png";
import delivery from "../../assets/delivery.png";
import time from "../../assets/time.png";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section 
      className=" bg-linear-to-r from-[#FFF7CC] to-[#FFE8A3] min-h-[60vh] flex flex-col lg:flex-row gap-5 items-center justify-around max-w-7xl mx-auto my-10 p-6 rounded-2xl"
    >
      <div className="flex flex-col gap-6 items-center lg:items-start">
        <div className="space-y-2">
          <h1 className="font-semibold text-5xl">SUMMER SALE ☀️</h1>
          <h2 className="font-medium text-2xl">Up to 50% OFF on Summer Essentials🔥</h2>
        </div>

        <Link 
          href="/products" 
          className="btn  bg-orange-600 text-white"
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

      <Image src={heroImg} alt="hero image"/>
    </section>
  );
};

export default Banner;