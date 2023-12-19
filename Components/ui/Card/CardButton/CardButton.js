"use client";
import React, { useState } from "react";
import AddToCartButton from "../../Button/AddToCartButton";
import OperationButton from "../../Button/OperationButton";
import styles from './CardButton.module.css'
import Swal from "sweetalert2";

const CardButton = ({ item, user, bg = "dark" }) => {
  const [amount, setAmount] = useState(0);
  //console.log('car item', item)
  const buttonHandler = {
    substract: () => setAmount((prev) => prev - 1),
    add: () => setAmount((prev) => prev + 1),
  };
  const handleClick = (operation) => {
    if ((amount === item?.stock)) {
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

  const handleAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error en la pagina, por favor intenta luego",
      timer: 400,
      toast: true,
      position: "top-end",
    });
  };

  return (
    // <div className="flex w-100 justify-around relative bottom00 z-10">
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
        user={user}
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
      <button onClick={handleAlert}>Sweet Alert</button>
    </div>
  );
};

export default CardButton;
