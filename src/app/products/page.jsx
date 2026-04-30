"use client"

import ProductCard from '@/components/shared/ProductCard';
import useProducts from '@/hooks/useProducts'
import React from 'react'

const ProductsPage = () => {
  const { products, isLoading } = useProducts(); 

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
