"use client"
import { deleteCartItemApi, deleteCartItemService } from "@/service/cartService";
import React from "react";
import styles from './Button.module.css';

const DeleteButton = ({user, item}) => {
  const handleDeleteItem = () => {
    // deleteCartItemService(user, item);
    ////console.log('this', user, item)
    //console.log('click')
    console.log(user, item)
    deleteCartItemApi(user, item)
  };
  return (
    <button
      onClick={handleDeleteItem}
      className={`rounded ${styles.deleteButton}`}
    >
      Eliminar
    </button>
  );
};

export default DeleteButton;
