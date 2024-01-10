"use client";
import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import styles from "./QuantitySelector.module.css";
import Swal from "sweetalert2";
import { updateCartItemApi } from "@/service/cartService";
import { SIX_OR_MORE } from "@/app/utils/constants";
import revalidate from "@/app/actions/revalidate";
import { useAuthContext } from "@/Contexts/AuthProvider";
import { useCartContext } from "@/Contexts/CartProvider";
// import { revalidatePath } from "next/cache";

const QuantitySelector = ({ item }) => {
  //const uid = getCookie("libreriaAppCookie");
  const { authCheck } = useAuthContext();
  const { editCart } = useCartContext();
  //const uid = authCheck();
  const router = useRouter();
  const [newItem, setNewItem] = useState(item);
  let [isPending, startTransition] = useTransition();

  // Array of items for the select dropdown
  const items = [1, 2, 3, 4, 5, "6 o mas"];
  // Event handler for changing the selected option
  const handleSelectChange = async (event) => {
    const targetValue = event.target.value;
    if (targetValue === SIX_OR_MORE) {
      const { value } = await Swal.fire({
        title: "Cuantas unidades queres?",
        icon: "question",
        input: "range",
        inputLabel: "Unidades",
        inputAttributes: {
          min: "0",
          max: item.stock,
          step: "1",
        },
        inputValue: item.amount,
      });
      setNewItem({ ...item, amount: value });
    } else {
      setNewItem({ ...item, amount: targetValue });
    }
  };

  useEffect(() => {
    console.log(Object.keys(newItem).length !== 0);
    if (Object.keys(newItem).length !== 0 && item.amount !== newItem.amount) {
      const update = async () => {
        editCart(newItem)
          .then((res) => {
            Swal.fire({
              title: "Genial!",
              text: "Item agregado correctamente",
              icon: "success",
              timer: 1200,
              toast: true,
              position: "top-end",
            });
          })
          .catch((error) => console.log(error));
      };
      update();
    }
    console.log("too many", newItem);
  }, [newItem]);

  return (
    <div className={styles.selectorContainer}>
      <select
        id="selectItem"
        value={newItem.amount > 6 ? "6 o mas" : newItem.amount}
        onChange={handleSelectChange}
      >
        <option value="un."></option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuantitySelector;
