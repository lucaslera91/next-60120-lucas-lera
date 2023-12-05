"use client";
import React, { createContext, useContext, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import CartItem from "@/Components/ui/CartItem/CartItem";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialUser = 'user-name-random1'
 
  const addToCart = (item) => {
    //agregar item a lista
  } 

  const getCart = async (id) => {
    var docRef = db.collection('users').doc(initialUser);
      //const itemRef = collection(db, "users");
      return await getDocs(docRef).then((snapshot) => {
        const data = snapshot.docs.map(
          (doc) => (doc = { id: doc.id, ...doc.data() })
        );
        console.log(data);
        //const result = data.find((item) => item.id === id);
        return data;
      });
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
        getCart,
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
