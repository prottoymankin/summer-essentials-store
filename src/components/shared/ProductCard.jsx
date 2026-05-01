import star from "../../assets/rating-star.png";

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) => {

  return (
    <div className="card bg-base-100 shadow-sm overflow-hidden text-neutral-800">
      <figure className="relative h-75 w-full">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{product.name}</h2>

        <p className="text-sm font-medium">⭐{product.rating}</p>

        <p className="font-bold text-orange-600 text-xl">Price: ${product.price}</p>

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