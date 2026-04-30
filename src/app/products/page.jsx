import ProductCard from '@/components/shared/ProductCard';

const ProductsPage = async () => {
  const response = await fetch("https://summer-essentials-store-red.vercel.app/products.json");
  const products = await response.json();

  return (
    <section className='max-w-7xl mx-auto space-y-10 py-10'>
      <h2 className='font-bold text-3xl text-neutral-800'>All Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ProductsPage
