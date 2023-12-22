// "use client";
// import React, { createContext, useContext, useState } from "react";
// import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
// import { db } from "../service/firebaseConfig";
// import CartItem from "@/Components/ui/CartItem/CartItem";
// import { getCartListApi } from "@/service/cartService";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const initialUser = 'user-name-random1'

//   const [cartList, setCartList] = useState([])
 
//   const addToCartItem = async (item) => {
//     //agregar item a lista
//     const getCartList = await getCartListApi(initialUser)
//     let docRef = db.collection('users').doc(initialUser);
//     await updateDoc(docRef, { cart: [...cartList] });
    
//   } 

//   const getCart = async (id) => {
//     let docRef = db.collection('users').doc(initialUser);
//       //const itemRef = collection(db, "users");
//       return await getDocs(docRef).then((snapshot) => {
//         const data = snapshot.docs.map(
//           (doc) => (doc = { id: doc.id, ...doc.data() })
//         );
//         //const result = data.find((item) => item.id === id);
//         return data;
//       });
//     //obtener listado
//   }

//   const deleteCartItem = () => {
//     //delete item
//     //await updateDoc(docsRef, { [listName]: [] });
//   }

//   const editCart = () => {
//     //editar si ya existe
//     //await updateDoc(docsRef, { [listName]: [] });
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         addToCartItem,
//         getCart,
//         deleteCartItem,
//         editCart,
//         setCartList
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export function useCartContext() {
//   return useContext(CartContext);
// }
