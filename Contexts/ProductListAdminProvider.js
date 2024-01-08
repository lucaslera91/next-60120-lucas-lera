"use client";
import React, { createContext, useContext, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";

const ProductListAdminContext = createContext();

export const ProductListAdminProvider = ({ children }) => {
  const getList = async (id) => {
    const itemRef = collection(db, "lista-productos-admin");
    return await getDocs(itemRef).then((snapshot) => {
      const data = snapshot.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      return data;
    });
  };

  const addProduct = async (
    collectionName,
    documentName,
    newList,
    listName
  ) => {
    const itemRef = collection(db, collectionName);
    const docsRef = doc(itemRef, documentName);
    await updateDoc(docsRef, {
      [listName]: newList,
    });
  };

  const clearList = async (collectionName, documentName, listName) => {
    const itemRef = collection(db, collectionName);
    const docsRef = doc(itemRef, documentName);
    await updateDoc(docsRef, { [listName]: [] });
  };

  //   const deleteItem = async (
  //     collectionName,
  //     documentName,
  //     listName,
  //     updatedList
  //   ) => {
  //     const itemRef = collection(db, collectionName);
  //     const docsRef = doc(itemRef, documentName);
  //     await updateDoc(docsRef, { [listName]: updatedList });
  //   };

  return (
    <ProductListAdminContext.Provider
      value={{
        getList,
        addProduct,
        clearList,
      }}
    >
      {children}
    </ProductListAdminContext.Provider>
  );
};

export function useProductListAdminContext() {
  return useContext(ProductListAdminContext);
}
