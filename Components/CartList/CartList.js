"use client";
import { H2_CLEAR, H3_DARK, H4_CLEAR } from "@/app/utils/constants";
import { generateId } from "@/app/utils/utils";
import { useAuthContext } from "@/Contexts/AuthProvider";
import { useCartContext } from "@/Contexts/CartProvider";
import { getCartListApi } from "@/service/cartService";
import { addOrdersItemApi } from "@/service/ordersService";
import React, { useState, useEffect } from "react";
import ConfirmButton from "../ui/Button/ConfirmButton";
import CartItem from "../ui/CartItem/CartItem";
import styles from "./CartList.module.css";

const CartList = () => {
  //const initialUser = "user-name-random1";
  //const cartList = await getCartListApi();
  const { cartList, getCart } = useCartContext();
  const [total, setTotal] = useState(0);

  const handleTotal = (list) => {
    console.log("list", list);
    const total = list?.reduce((accumulator, currentObject) => {
      console.log("ac", currentObject.price);
      console.log(accumulator);
      console.log("sum", currentObject.price + accumulator);
      return accumulator + currentObject.price * currentObject.amount;
    }, 0);
    console.log(total);
    return total;
  };

  useEffect(() => {
    getCart();
    console.log("cart", cartList);
  }, []);
  useEffect(() => {
    const aux = handleTotal(cartList);
    setTotal(handleTotal(cartList));
    console.log("total", aux);
  }, [cartList]);

  // const total = cartList?.reduce((accumulator, currentObject) => {
  //   return accumulator + currentObject.price * currentObject.amount;
  // }, 0);

  const order = {
    total: total,
    id: generateId(),
    status: "En preparacio",
    items: cartList?.length,
  };

  const noDataCart = (
    <div>
      <h2 className={H2_CLEAR}>No tenes items en tu carrito!</h2>
      <p className={H4_CLEAR}>
        Podes ir al inicio para agregar productos a tu carrito!
      </p>
    </div>
  );

  return cartList?.length < 1 ? (
    noDataCart
  ) : (
    <div className={styles.cartContainer}>
      <h2 className={H2_CLEAR}>Confirma tu carrito!</h2>
      <div className={styles.titleContainer}>
        <h2 className={H3_DARK}>Total: $ {total}</h2>
        <p className={H4_CLEAR}>Items: {cartList?.length}</p>
        <ConfirmButton
          order={order}
          className={`${styles.confirmPurchase} rounded`}
        />
      </div>

      <div className={styles.cartListContainer}>
        {cartList?.map((element, idx) => (
          <CartItem key={idx} item={element} />
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className={styles.cartContainer}>
  //     <h2 className={H2_CLEAR}>Confirma tu carrito!</h2>
  //     <div className={styles.titleContainer}>
  //       <h2 className={H3_DARK}>Total: $ {total}</h2>
  //       <p className={H4_CLEAR}>Items: {cartList?.length}</p>
  //       <ConfirmButton
  //         order={order}
  //         initialUser={initialUser}
  //         className={`${styles.confirmPurchase} rounded`}
  //       />
  //     </div>

  //     <div className={styles.cartListContainer}>
  //       {!cartList && <div>Loading...</div>}
  //       {!!cartList && cartList.map((element) => <CartItem item={element} />)}
  //     </div>
  //   </div>
  //);
};

export default CartList;
