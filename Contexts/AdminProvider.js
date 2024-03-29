"use client";
import React, { createContext, useContext, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  get,
  writeBatch,
} from "firebase/firestore";
import { auth, db } from "../service/firebaseConfig";
import CartItem from "@/Components/ui/CartItem/CartItem";
import { getCartListApi } from "@/service/cartService";
import { useRouter } from "next/navigation";
import { useAuthContext } from "./AuthProvider";
import { errorToast, successToast } from "@/app/utils/utils";

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
    console.log("addd item", item);
    try {
      const colRef = collection(db, "lista-productos-admin");
      const docRef = doc(colRef, item.id);
      console.log(colRef);
      await setDoc(docRef, item);
      console.log("adminlist", adminList);
      //console.log(doc(db, "lista-productos-admin", item.itemId))
      //await setDoc(doc(db, "lista-productos-admin", item.itemId), item);

      setAdminList([...adminList, item]);
      console.log("success");
    } catch (error) {
      console.log("error");
    }
  };
  ///

  //obtener listado

  const deleteItem = async (itemId) => {
    console.log(itemId);
    try {
      const colRef = collection(db, "lista-productos-admin");
      const docRef = doc(colRef, itemId);
      // const docRef = doc(db, "lista-productos-admin", itemId);
      console.log(colRef);
      await deleteDoc(docRef);
      const newList = adminList.filter((item) => item.id !== itemId);
      setAdminList(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = async (itemId, data, isOrder = false) => {
    try {
      await setDoc(doc(db, "lista-productos-admin", itemId), data);
      const newList = adminList.map((item) => {
        return item.id === itemId ? data : item;
      });
      setAdminList(newList);
      console.log("success");
    } catch (error) {
      return { status: "no match" };
    }
  };

  const editAfterConfirm = async (newData) => {
    const colRef = collection(db, "lista-productos-admin");
    const batch = writeBatch(db);
    newData.forEach((element) => {
      const docRef = doc(colRef, element.id);
      batch.update(docRef, {
        ...element,
        stock: parseInt(element.stock) - parseInt(element.amount),
      });
    });
    try {
      await batch.commit();
    } catch {
      console.log("Por favor revise la orden y vuelva a intentar");
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
        editAfterConfirm,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export function useAdminContext() {
  return useContext(AdminContext);
}
