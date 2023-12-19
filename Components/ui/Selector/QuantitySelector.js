'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./QuantitySelector.module.css";
import Swal from "sweetalert2";
import { updateCartItemApi } from "@/service/cartService";
import { SIX_OR_MORE } from "@/app/utils/constants";
// import { revalidatePath } from "next/cache";

const QuantitySelector = ({ item, initialUser }) => {
  const router = useRouter();
  const [newItem, setNewItem] = useState(item);

  // Array of items for the select dropdown
  const items = [1, 2, 3, 4, 5, "6 o mas"];
  // Event handler for changing the selected option
  const handleSelectChange = async (event) => {
    const value = event.target.value;
    if (value === SIX_OR_MORE) {
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
      setNewItem({ ...item, amount: event.target.value });
    }
  };

  useEffect(() => {
    console.log(Object.keys(newItem).length !== 0);
    if (Object.keys(newItem).length !== 0) {
      updateCartItemApi(initialUser, newItem);
      router.refresh();
      //revalidatePath(`cart/[id]`)
    }
  }, [newItem]);

  return (
    <div className={styles.selectorContainer}>
      <select
        id="selectItem"
        value={newItem.amount}
        onChange={handleSelectChange}
      >
        <option value="un.">un.</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Display the selected option */}
    </div>
  );
};

export default QuantitySelector;
