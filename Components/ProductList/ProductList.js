import productList from "@/data/productList";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ productList = [] }) => {
  return (
    <div className="display flex w-100 overflow-hidden flex-wrap justify-center">
      {productList?.length > 0 &&
        productList?.map((element) => (
          <ProductCard key={element.id} item={element} />
        ))}
    </div>
  );
};

export default ProductList;
