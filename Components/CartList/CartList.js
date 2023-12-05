import React from "react";
import CartItem from "../ui/CartItem/CartItem";

const CartList = async () => {
  //get cart list

  const initialUser = "user-name-random1";
  //const cartList = [];
  const cartList = await fetch(`http:localhost:3000/api/cart/${initialUser}`, {
    cache: "no-cache",
  })
    .then((res) => {
      console.log("first");
      return res.json();
    })
    .catch((error) => console.log(error));
  console.log("first", cartList);

  return (
    <div className="">
      {!!cartList && <div>Loading...</div>}
      {!!cartList && cartList.map((element) => <CartItem item={element} />)}
    </div>
  );
};

export default CartList;
