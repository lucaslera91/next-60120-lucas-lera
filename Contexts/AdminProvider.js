"use client";
import React, { createContext, useContext, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../service/firebaseConfig";
import CartItem from "@/Components/ui/CartItem/CartItem";
import { getCartListApi } from "@/service/cartService";
import { useRouter } from "next/navigation";
import { useAuthContext } from "./AuthProvider";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const { user } = useAuthContext();

  const [adminList, setAdminList] = useState([]);

  const getAdminList = async () => {
    const colRef = collection(db, "lista-productos-admin");
    console.log(colRef);
    let data = [];

    getDocs(colRef)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Push each document's data into the array
          data.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setAdminList(data);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  };
  const addItem = async (item) => {
    try {
      console.log("first");
    } catch (error) {
      console.log(error);
    }
  };
  ///

  //obtener listado

  const deleteItem = async (itemId) => {
    try {
      await deleteDoc(doc(db, "lista-productos-admin", itemId));
      const newList = adminList.filter((item) => item.id !== itemId);
      setAdminList(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = async (itemId, data) => {
    try {
      await setDoc(doc(db, "lista-productos-admin", itemId), data);
      const newList = adminList.map((item) => {
        return item.id === itemId ? data : item;
      });
      setAdminList(newList);
      console.log("success");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <AdminContext.Provider
      value={{
        addItem,
        getAdminList,
        deleteItem,
        editItem,
        setAdminList,
        adminList,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export function useAdminContext() {
  return useContext(AdminContext);
}
