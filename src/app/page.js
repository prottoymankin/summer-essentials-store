import Banner from "@/components/HomePage/Banner";
import PopularProducts from "@/components/HomePage/PopularProducts";
import SummerCare from "@/components/HomePage/SummerCare";
import TopBrands from "@/components/HomePage/TopBrands";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Banner />
      <PopularProducts />
      <SummerCare />
      <TopBrands />
    </div>
  );
}
