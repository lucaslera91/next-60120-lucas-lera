"use client"
import React from "react";

const OperationButton = ({ operation, side, handleClick, disabled }) => {
  const detail = { left: "l", right: "r", add: "+", substract: "-" };
  return (
    <button
      className={`rounded-${detail[side]}-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 w-1/6`}
      onClick={() => handleClick(operation)}
      disabled={disabled}
    >
      {detail[operation]}
    </button>
  );
};

export default OperationButton;
