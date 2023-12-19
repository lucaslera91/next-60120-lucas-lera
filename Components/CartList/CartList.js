// "use client";
import { H2_CLEAR, H3_DARK, H4_CLEAR } from "@/app/utils/constants";
import { getCartListApi } from "@/service/cartService";
import React from "react";
import CartItem from "../ui/CartItem/CartItem";
import styles from "./CartList.module.css";

const CartList = async () => {
  const initialUser = "user-name-random1";
  // const [cartList, setCartList] = useState([]);
  //console.log("cart list", cartList);
  // const getList = async () => setCartList(await getCartListApi(initialUser));
  const cartList = await getCartListApi(initialUser);
  //const data = await getCartListApi(initialUser);

  //useEffect(() => {
  //   const getList = async () => {
  //     const data = await getCartListApi(initialUser);
  //     setCartList(data);
  //   };
  //   getList();
  // }, []);
  // useEffect(() => {
  //   getList()
  // }, [])

  const total = cartList?.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.price * currentObject.amount;
  }, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={H2_CLEAR}>Confirma tu carrito!</h2>
      <div className={styles.titleContainer}>
        <h2 className={H3_DARK}>Total: $ {total}</h2>
        <p className={H4_CLEAR}>Items: {cartList.length}</p>
        <button className={`${styles.confirmPurchase} rounded`}>
          Confirmar
        </button>
      </div>

      <div className={styles.cartListContainer}>
        {!cartList && <div>Loading...</div>}
        {!!cartList &&
          cartList.map((element) => (
            <CartItem item={element} />
            // <CartItem item={element} getList={getList} />
          ))}
      </div>
    </div>
  );
};

export default CartList;
