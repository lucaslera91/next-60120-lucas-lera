"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../service/firebaseConfig";
import CartItem from "@/Components/ui/CartItem/CartItem";
import { useRouter } from "next/navigation";
import { useAuthContext } from "./AuthProvider";
import { useCartContext } from "./CartProvider";

const OrderContext = createContext();

export const OrdersProvider = ({ children }) => {
  const { user } = useAuthContext();
  useEffect(() => {
    console.log("user", user);
  }, []);


  const [ordersList, setOrdersList] = useState([false]);

  const getOrders = async () => {
    console.log(user)
    console.log("order id", user?.uid);
    const colRef = collection(db, "users");
    const docRef = doc(colRef, user?.uid);
    const data = await getDoc(docRef).then((doc) => doc.data());
    setOrdersList(data?.orders);
    return data;
  };
  const addOrder = async (order) => {
    const colRef = collection(db, "users");
    const docRef = doc(colRef, user.uid);
    const data = await getOrders(user.uid);
    const newList = data.orders;
    newList.push(order);
    try {
      await updateDoc(docRef, { orders: newList });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        ordersList,
        getOrders,
        addOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export function useOrdersContext() {
  return useContext(OrderContext);
}
