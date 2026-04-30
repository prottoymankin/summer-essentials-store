"use client"

import useProducts from "@/hooks/useProducts";
import ProductCard from "../shared/ProductCard";

const PopularProducts = () => {
  const {products, isLoading} = useProducts();

  return (
    <section className="space-y-6 mb-15">
      <div className="text-neutral-800 text-center">
        <h2 className="font-bold text-3xl">Populer Products</h2>
        <p>Our most loved summer picks, chosen by customers.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          products.slice(0, 3).map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </section>
  );
};

export default PopularProducts;