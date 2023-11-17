"use client";
import React, { useState } from "react";
import AddToCartButton from "../../Button/AddToCartButton";
import OperationButton from "../../Button/OperationButton";

const CardButton = () => {
  const [amount, setAmount] = useState(0);
//   const buttonHandler = {
//     substract: setAmount((prev) => prev - 1),
//     add: setAmount((prev) => prev + 1),
//   };
  const handleClick = (operation) => {
      //buttonHandler[operation];
    }

  return (
    <div className="flex w-100 justify-around relative bottom00 z-10">
      <OperationButton
        handleClick={handleClick}
        operation="substract"
        side="left"
      />
      <AddToCartButton />
      <span className="text-white flex justify-center items-center w-1/10">
        {amount}
      </span>
      <OperationButton handleClick={handleClick} operation="add" side="right" />
    </div>
  );
};

export default CardButton;
