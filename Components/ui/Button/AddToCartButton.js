"use client";
import { addCartItemApi, addCartItemService } from "@/service/cartService";
import React from "react";

const AddToCartButton = ({ item, user, amount, disabled }) => {
  const handleAddToCart = () => {
    console.log(item, user, amount);
    const newItem = { ...item, amount: amount };
    console.log(newItem);
    addCartItemService(user, newItem);
  };
  return (
    <button
      onClick={handleAddToCart}
      className="flex justify-center rounded-none px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 w-3/6"
      disabled={disabled}
    >
      AddToCart
    </button>
  );
};

export default AddToCartButton;
