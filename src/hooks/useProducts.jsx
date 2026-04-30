"use client"

import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setIsLoading(false);
      setProducts(data);
    }

    getProducts();
  },[]);

  return { products, isLoading };
};

export default useProducts;