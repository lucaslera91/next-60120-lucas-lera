"use client";
import React, { createContext, useContext, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import CartItem from "@/Components/ui/CartItem/CartItem";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
 
  const addToCart = (item) => {
    //agregar item a lista
  } 

  const cart = () => {
    //obtener listado
  }

  const deleteCartItem = () => {
    //delete item
  }

  const putCartItem = () => {
    //editar si ya existe
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        deleteCartItem,
        putCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
