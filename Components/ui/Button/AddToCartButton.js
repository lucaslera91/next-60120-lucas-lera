
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
  //console.log('test-', item)
  const handleAddToCart = async () => {
    const newItem = { ...item, amount: amount };
    //addCartItemService(user, newItem);
    await addCartItemApi(user, newItem) ? setAmount(0) : null;
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
