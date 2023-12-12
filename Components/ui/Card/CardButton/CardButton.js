"use client";
import React, { useState } from "react";
import AddToCartButton from "../../Button/AddToCartButton";
import OperationButton from "../../Button/OperationButton";

const CardButton = ({ item, user, bg = "dark" }) => {
  const [amount, setAmount] = useState(0);
  //console.log('car item', item)
  const buttonHandler = {
    substract: () => setAmount((prev) => prev - 1),
    add: () => setAmount((prev) => prev + 1),
  };
  const handleClick = (operation) => {
    buttonHandler[operation]();
  };

  return (
    <div className="flex w-100 justify-around relative bottom00 z-10">
      <OperationButton
        handleClick={() => handleClick("substract")}
        operation="substract"
        side="left"
        disabled={amount < 1}
      />
      <AddToCartButton
        disabled={amount < 1}
        item={item}
        user={user}
        amount={amount}
      />
      <span
        className={`${
          bg === "dark" ? "text-white" : "text-black"
        } flex justify-center items-center w-1/10`}
      >
        {amount}
      </span>
      <OperationButton
        handleClick={() => handleClick("add")}
        operation="add"
        side="right"
      />
    </div>
  );
};

export default CardButton;
