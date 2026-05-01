import ProductCard from '@/components/shared/ProductCard';

const ProductsPage = async () => {
  const response = await fetch("https://summer-essentials-store-red.vercel.app/products.json");
  const products = await response.json();

  return (
    <section className='max-w-7xl mx-auto py-10 space-y-10'>
      <h2 className='font-bold text-3xl text-slate-800'>
        All Products
      </h2>

      <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-3 ">
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

export default ProductsPage;