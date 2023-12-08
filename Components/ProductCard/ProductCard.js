import Link from "next/link";
import React from "react";
import AddToCartButton from "../ui/Button/AddToCartButton";
import OperationButton from "../ui/Button/OperationButton";
import Card from "../ui/Card/Card";

const ProductCard = ({ item }) => {
  console.log(item)
  return <Card item={item} />;
};

export default ProductCard;
