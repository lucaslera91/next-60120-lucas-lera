import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";

//GET CART

//Firebase service
export const getCartListservice = async (id) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  const data = await getDoc(docRef).then((doc) => doc.data());
  return data;
};

//Api service

export const getCartListApi = async (initialuser) => {
  const data = await fetch(`http:localhost:3000/api/cart/${initialuser}`, {
    cache: "no-cache",
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
  return data;
};

//POST - Add Cart Item

export const addCartItemService = async (id, item) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  const data = await getCartListservice(id);
  console.log(data);
  const newList = [...data.cart, item];
  console.log(newList);
  await updateDoc(docRef, { cart: newList });
  return data;
};

//Api service

export const addCartItemApi = async (initialuser, item) => {
  const data = await fetch(
    `http:localhost:3000/Carrito/api/cart/${initialuser}`,
    {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        id: initialuser,
        item: item,
      }),
    }
  ).catch((error) => console.log(error));
  return data;
};

// export const getCartListService = async () => {
//   const { id } = params;
//   const colRef = collection(db, "users");
//   const docRef = doc(colRef, id);
//   const data = await getDoc(docRef).then((doc) => doc.data());
//   return data;
// };
