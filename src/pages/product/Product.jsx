import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductView from "./ProductView";

const Products = () => {
  const [product, setProduct] = useState();
  const [hasilCari, setHasilCari] = useState(null);
  const ambilProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = await response.data;
    setProduct(data);
  };

  useEffect(() => {
      ambilProduct();
  }, []);

  return (
    <ProductView 
    product={product}
    />
  )
};

export default Products;

