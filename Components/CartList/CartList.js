import { getCartListApi } from "@/service/cartService";
import React from "react";
import CartItem from "../ui/CartItem/CartItem";

const CartList = async () => {
  const initialUser = "user-name-random1";
  const cartList = await getCartListApi(initialUser);

  return (
    <div className="">
      {!!cartList && <div>Loading...</div>}
      {!!cartList && cartList.map((element) => <CartItem item={element} />)}
    </div>
  );
};

export default CartList;
