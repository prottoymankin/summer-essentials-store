import Image from "next/image";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  
  const response = await fetch("https://summer-essentials-store-red.vercel.app/products.json");
  const data = await response.json();
  const selectedProduct = data.find(p => p.id === parseInt(id));

  return (
    <section className="max-w-7xl mx-auto my-10 text-neutral-800">
      <div className="flex gap-6 flex-col lg:flex-row">
        <div 
          className="min-h-[60vh] relative w-full lg:w-1/2 rounded-2xl overflow-hidden"
        >
          <Image 
            alt={selectedProduct.name} 
            className="object-cover w-full h-full" 
            fill 
            src={selectedProduct.image} 
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <div className="space-y-2">
            <h2 className="font-bold text-3xl">{selectedProduct.name}</h2>
            
            <div className="flex gap-4">
              <p>
                <span className="font-semibold">Brand: </span>
                <span>{selectedProduct.brand}</span>
              </p>

              <div 
                className="badge bg-amber-400 font-semibold rounded-full text-sm text-slate-800"
              >
                {selectedProduct.category}
              </div>
            </div>
          </div>

          <p>⭐{selectedProduct.rating}</p>

          <p>
            <span className="font-semibold">Description: </span>
            <span>{selectedProduct.description}</span>
          </p>

          <div>
            {
              selectedProduct.stock > 0 ? (
                <p>
                  <span className="text-green-600">In stock </span>
                  <span>(Only {selectedProduct.stock} left)</span>
                </p>
              ) : (
                <span className="text-red-600">
                  Out of stock
                </span>
              )
            }
          </div>

          <p className="font-semibold text-3xl text-orange-600">
            ${selectedProduct.price}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsPage
