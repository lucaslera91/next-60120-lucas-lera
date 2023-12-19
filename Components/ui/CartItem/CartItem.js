
import { H2_CLEAR, H3_DARK, H4_CLEAR, H6_CLEAR } from "@/app/utils/constants";
import { deleteCartItemService } from "@/service/cartService";
import React from "react";
import DeleteButton from "../Button/DeleteButton";
import OperationButton from "../Button/OperationButton";
import QuantitySelector from "../Selector/QuantitySelector";
import styles from "./CartItem.module.css";


const CartItem = ({ item, revalidate }) => {
  const { title, description, price, imageUrl } = item || {};

  const initialUser = "user-name-random1";

  return (
    <div className={`${styles.cartItemContainer} rounded`}>
      <img className={styles.cardImg} src={imageUrl} alt={title} />
      <div className="px-6 py-4 w-7/10">
        <div className="font-bold text-xl text-black mb-2">{title}</div>

        <p className={`${styles.cardProductDescription} text-base`}>
          {description.substring(0, 90)}
          {description < 35 ? "" : "..."}
        </p>
        <h4 className={H3_DARK}>$ {price}</h4>
      </div>
      <div className={styles.cartEditItem}>
        <h4 className={H4_CLEAR}>{item.amount}</h4>
        <QuantitySelector item={item}  initialUser={initialUser}/>
      </div>
    </div>
  );
};

export default CartItem;
