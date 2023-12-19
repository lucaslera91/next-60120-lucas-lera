"use client"
import React from "react";

const OperationButton = ({ operation, side, handleClick, disabled, styles }) => {
  const detail = { left: "l", right: "r", add: "+", substract: "-" };
  return (
    <button
      className={`${styles.operationButton} px-4 py-2 w-1/6`}
      onClick={() => handleClick(operation)}
      disabled={disabled}
    >
      {detail[operation]}
    </button>
  );
};

export default OperationButton;
