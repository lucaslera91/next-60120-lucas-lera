"use client"
import { deleteCartItemApi, deleteCartItemService } from "@/service/cartService";
import React from "react";

const DeleteButton = ({user, item}) => {
  const handleDeleteItem = () => {
    // deleteCartItemService(user, item);
    //console.log('this', user, item)
    console.log('click')
    deleteCartItemApi(user, item)
  };
  return (
    <button
      onClick={handleDeleteItem}
      className="text-red-200 p-2 m-2 bg-red-600 rounded"
    >
      Eliminar
    </button>
  );
};

export default DeleteButton;
