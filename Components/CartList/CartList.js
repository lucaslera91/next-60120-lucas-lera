import { getCartListApi } from "@/service/cartService";
import React from "react";
import CartItem from "../ui/CartItem/CartItem";

const CartList = async () => {
  const initialUser = "user-name-random1";
  const cartList = await getCartListApi(initialUser);
  const total = cartList.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.price;
  }, 0);

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-blue-500 mb-4">Total: $ {total}</h2>
      <p className="text-lg text-white-600">Items: {cartList.length}</p>

      {!cartList && <div>Loading...</div>}
      {!!cartList && cartList.map((element) => <CartItem item={element} />)}
    </div>
  );
};

export default CartList;
