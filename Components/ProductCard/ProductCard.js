import Link from "next/link";
import React from "react";
import AddToCartButton from "../ui/Button/AddToCartButton";
import OperationButton from "../ui/Button/OperationButton";
import Card from "../ui/Card/Card";

const ProductCard = ({ item }) => {
  const hanldePropagation = (e) => {
    e.stopPropagation()
    console.log('first')
    
  }
  return (
    <Link href={`/detail/${item.slug}`} className="p-2">
      <Card item={item} />
    </Link>
  );
};

export default ProductCard;
