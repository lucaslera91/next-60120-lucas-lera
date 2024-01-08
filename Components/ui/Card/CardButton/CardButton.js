"use client";
import React, { useState } from "react";
import AddToCartButton from "../../Button/AddToCartButton";
import OperationButton from "../../Button/OperationButton";
import styles from "./CardButton.module.css";
import Swal from "sweetalert2";
import { createDocument, getCookie } from "@/app/utils/utils";
import { useAuthContext } from "@/Contexts/AuthProvider";

const CardButton = ({ item, bg = "dark" }) => {
  const [amount, setAmount] = useState(0);
  const buttonHandler = {
    substract: () => setAmount((prev) => prev - 1),
    add: () => setAmount((prev) => prev + 1),
  };
  const handleClick = (operation) => {
    if (amount === item?.stock) {
      Swal.fire({
        title: "Has llegado al limite!",
        text: "Te encuentras en el limite de stock disponible",
        icon: "info",
        timer: 1200,
        toast: true,
        position: "top-end",
      });
    } else {
      buttonHandler[operation]();
    }
  };

  return (
    <div className={styles.cardButtonContainer}>
      <OperationButton
        handleClick={() => handleClick("substract")}
        operation="substract"
        side="left"
        disabled={amount < 1}
        styles={styles}
      />
      <AddToCartButton
        disabled={amount < 1}
        item={item}
        amount={amount}
        setAmount={setAmount}
        styles={styles}
      />
      <span>{amount}</span>
      <OperationButton
        handleClick={() => handleClick("add")}
        operation="add"
        side="right"
        styles={styles}
      />
    </div>
  );
};

export default CardButton;
