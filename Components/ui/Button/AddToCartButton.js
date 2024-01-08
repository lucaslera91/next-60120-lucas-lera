"use client";
import { errorToast, successToast } from "@/app/utils/utils";
import { useCartContext } from "@/Contexts/CartProvider";
import { addCartItemApi, addCartItemService } from "@/service/cartService";
import React from "react";

const AddToCartButton = ({
  item,
  user,
  amount,
  disabled,
  styles,
  setAmount,
}) => {
  const { addToCartItem } = useCartContext();
  const handleAddToCart = () => {
    const newItem = { ...item, amount: amount };
    addToCartItem(newItem)
      .then(() => {
        setAmount(0);
        successToast();
      })
      .catch((error) => errorToast());
  };
  return (
    <button
      onClick={handleAddToCart}
      className={`${styles.addToCartButton}`}
      disabled={disabled}
    >
      AddToCart
    </button>
  );
};

export default AddToCartButton;
