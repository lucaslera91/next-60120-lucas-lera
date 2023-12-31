import { H2_CLEAR, H3_DARK, H4_CLEAR } from "@/app/utils/constants";
import { generateId } from "@/app/utils/utils";
import { getCartListApi } from "@/service/cartService";
import { addOrdersItemApi } from "@/service/ordersService";
import React from "react";
import ConfirmButton from "../ui/Button/ConfirmButton";
import CartItem from "../ui/CartItem/CartItem";
import styles from "./CartList.module.css";

const CartList = async () => {
  const initialUser = "user-name-random1";
console.log('initial user', initialUser)
  const cartList = await getCartListApi(initialUser);
  const total = cartList?.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.price * currentObject.amount;
  }, 0);

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
  console.log('cart list', cartList);

  return cartList.length < 1 ? (
    noDataCart
  ) : (
    <div className={styles.cartContainer}>
      <h2 className={H2_CLEAR}>Confirma tu carrito!</h2>
      <div className={styles.titleContainer}>
        <h2 className={H3_DARK}>Total: $ {total}</h2>
        <p className={H4_CLEAR}>Items: {cartList?.length}</p>
        <ConfirmButton
          order={order}
          initialUser={initialUser}
          className={`${styles.confirmPurchase} rounded`}
        />
      </div>

      <div className={styles.cartListContainer}>
        {cartList?.map((element) => <CartItem item={element} />)}
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
