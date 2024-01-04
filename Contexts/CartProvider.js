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
  const initialUser = "user-name-random1";
  const { user } = useAuthContext();

  const [cartList, setCartList] = useState([]);

  const getCart = async () => {
    const colRef = collection(db, "users");
    const docRef = doc(colRef, user?.uid);
    const data = await getDoc(docRef).then((doc) => doc.data());
    setCartList(data?.cart);
    return data;
  };
  const addToCartItem = async (item) => {
    //agregar item a lista
    // const getCartList = await getCartListApi(initialUser);
    // let docRef = db.collection("users").doc(initialUser);
    // await updateDoc(docRef, { cart: [...cartList] });
    console.log("item", item);
    const colRef = collection(db, "users");
    const docRef = doc(colRef, user?.uid);
    const data = await getCart();
    console.log("data add item", data);
    const newList = data.cart;
    console.log("new", newList);
    const indexOfItem = newList.findIndex((element) => element.id === item.id);
    if (indexOfItem !== -1) {
      const newSum =
        parseInt(newList[indexOfItem].amount) + parseInt(item.amount);
      newList[indexOfItem].amount = newSum > item.stock ? item.stock : newSum;
    } else {
      newList.push(item);
    }
    console.log("doc ref", newList);
    return await updateDoc(docRef, { cart: newList });
  };
  ///

  //obtener listado

  const deleteCartItem = async (itemId) => {
    //delete item
    //await updateDoc(docsRef, { [listName]: [] });
    console.log("item id", user?.uid);
    const colRef = collection(db, "users");
    console.log("col ref", colRef);
    const docRef = doc(colRef, user?.uid);
    const data = await getCart();
    console.log("list", data);
    console.log("docref", docRef);
    //console.log(data.cart);
    const newList = data.cart.filter((element) => element.id !== itemId);
    //console.log(newList);
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
    //console.log(data.cart);
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
    //console.log(data.cart);
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
