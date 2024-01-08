"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../service/firebaseConfig";

import { useAuthContext } from "./AuthProvider";

const OrderContext = createContext();

export const OrdersProvider = ({ children }) => {
  const { user } = useAuthContext();

  const [ordersList, setOrdersList] = useState([false]);

  const getOrders = async () => {
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
