import star from "../../assets/rating-star.png";

import Image from "next/image";
import Link from "next/link";

const ProductCard = (product) => {

  return (
    <div className="card bg-base-100 shadow-sm overflow-hidden text-neutral-800">
      <figure className="relative h-75 w-full">
        <Image src={product.product.image} alt={product.product.name} fill className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{product.product.name}</h2>

        <div className="text-sm font-semibold flex items-center gap-2">
          <Image src={star} alt="rating star" width={60} className="object-contain" />
          <span>{product.product.rating}</span>
        </div>

        <p className="font-medium text-lg">Price: ${product.product.price}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${product.product.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;