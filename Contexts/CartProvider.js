"use client";
import React, { createContext, useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../service/firebaseConfig";
import CartItem from "@/Components/ui/CartItem/CartItem";
import { getCartListApi } from "@/service/cartService";
import { useRouter } from "next/navigation";
import { useAuthContext } from "./AuthProvider";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, authCheck } = useAuthContext();
  const [cartList, setCartList] = useState([]);

  const getCart = async () => {
    const colRef = collection(db, "users");
    const docRef = doc(colRef, user?.uid);
    const data = await getDoc(docRef).then((doc) => doc.data());
    setCartList(data?.cart);
    return data;
  };
  const addToCartItem = async (item) => {
    const colRef = collection(db, "users");
    const docRef = doc(colRef, user?.uid);
    const data = await getCart();
    const newList = data.cart;
    const indexOfItem = newList.findIndex((element) => element.id === item.id);
    if (indexOfItem !== -1) {
      const newSum =
        parseInt(newList[indexOfItem].amount) + parseInt(item.amount);
      newList[indexOfItem].amount = newSum > item.stock ? item.stock : newSum;
    } else {
      newList.push(item);
    }

    return await updateDoc(docRef, { cart: newList });
  };
  ///

  //obtener listado

  const deleteCartItem = async (itemId) => {
    const colRef = collection(db, "users");

    const docRef = doc(colRef, user?.uid);
    const data = await getCart();

    const newList = data.cart.filter((element) => element.id !== itemId);

    try {
      await updateDoc(docRef, { cart: newList });
      setCartList(newList);
      return console.log("success");
    } catch (error) {
      return console.log("error");
    }
  };

  const editCart = async (item) => {
    const colRef = collection(db, "users");
    const docRef = doc(colRef, user?.uid);
    const data = await getCart();
    let newList = data.cart;
    const indexOfItem = newList.findIndex((element) => element.id === item.id);
    newList[indexOfItem].amount = item.amount;
    try {
      await updateDoc(docRef, { cart: newList });
      setCartList(newList);
      console.log("success");
    } catch (error) {
      console.log("error");
    }
  };
  const clearCart = async () => {
    const colRef = collection(db, "users");
    const docRef = doc(colRef, user?.uid);
    try {
      await updateDoc(docRef, { cart: [] });
      setCartList([]);
      console.log("success");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCartItem,
        getCart,
        deleteCartItem,
        editCart,
        setCartList,
        clearCart,
        cartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
