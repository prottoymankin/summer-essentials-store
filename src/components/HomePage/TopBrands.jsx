import Image from "next/image";
import hmLogo from "../../assets/hm-logo.png";
import niveaLogo from "../../assets/nivea-logo.png";
import raybanLogo from "../../assets/ray-ban-logo.png";
import zaraLogo from "../../assets/zara-logo.png";

const TopBrands = () => {
  return (
    <section className="space-y-6 mb-15">
      <div className="text-center text-slate-800">
        <h2 className="font-bold text-3xl">Top Brands</h2>
        <p className="max-w-lg mx-auto">Explore top brands that keep you cool, stylish, and protected all summer long.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          className="border border-gray-300 h-50 shadow-lg rounded-xl flex items-center justify-center transition duration-300 hover:-translate-y-2 bg-base-100"
        >
          <Image src={hmLogo} alt="h&m brand logo" height={150} width={150} />
        </div>

        <div 
          className="border border-gray-300 h-50 shadow-lg rounded-xl flex items-center justify-center transition duration-300 hover:-translate-y-2 bg-base-100"
        >
          <Image src={zaraLogo} alt="h&m brand logo" height={150} width={150} />
        </div>

        <div 
          className="border border-gray-300 h-50 shadow-lg rounded-xl flex items-center justify-center transition duration-300 hover:-translate-y-2 bg-base-100"
        >
          <Image src={niveaLogo} alt="h&m brand logo" height={150} width={150} />
        </div>

        <div 
          className="border border-gray-300 h-50 shadow-lg rounded-xl flex items-center justify-center transition duration-300 hover:-translate-y-2 bg-base-100"
        >
          <Image src={raybanLogo} alt="h&m brand logo" height={150} width={150} />
        </div>
      </div>
    </section>
  );
};

export default TopBrands;