import Banner from "@/components/HomePage/Banner";
import PopularProducts from "@/components/HomePage/PopularProducts";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Banner />
      <PopularProducts />
    </div>
  );
}
