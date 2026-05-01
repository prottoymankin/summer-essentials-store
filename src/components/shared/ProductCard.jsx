import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) => {

  return (
    <div 
      className="bg-white border border-gray-300 card overflow-hidden rounded-2xl shadow-lg text-slate-800"
    >
      <figure className="h-75 relative w-full">
        <Image 
          alt={product.name} 
          className="object-cover" 
          fill 
          src={product.image} 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">
          {product.name}
        </h2>

        <p className="font-medium text-sm">
          ⭐{product.rating}
        </p>

        <p className="font-bold text-orange-600 text-xl">
          Price: ${product.price}
        </p>

        <div className="card-actions justify-end">
          <Link 
            className="bg-amber-400 btn rounded-full text-slate-900"
            href={`/products/${product.id}`} 
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;