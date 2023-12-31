import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import Swal from "sweetalert2";
import { authCheckServerSide } from "@/app/utils/utils";

//GET CART

//Firebase service

//Api service

export const getCartListApi = async (initialuser) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/cart/${initialuser}`,
    {
      next: { tags: ["cartList"] },
    }
  )
    .then((res) => res.json())
    .catch((error) =>
      console.log(error)
    );
  return data;
};

//POST - Add Cart Item

export const addCartItemService = async (id, item) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  const data = await getCartListservice(id);
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

//Api service

export const addCartItemApi = async (initialuser, item) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/cart/${initialuser}`,
    {
      method: "POST",
      cache: "no-cache",
      //next: { tags: ["1000"] },
      next: { revalidate: 2 },
      body: JSON.stringify({
        id: initialuser,
        item: item,
      }),
    }
  )
    .then(() => {
      Swal.fire({
        title: "Genial!",
        text: "Item agregado correctamente",
        icon: "success",
        timer: 1200,
        toast: true,
        position: "top-end",
      });
      return true;
    })
    .catch((error) =>
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error en la pagina, por favor intenta luego",
        timer: 1200,
        toast: true,
        position: "top-end",
      })
    );
};

// export const getCartListService = async () => {
//   const { id } = params;
//   const colRef = collection(db, "users");
//   const docRef = doc(colRef, id);
//   const data = await getDoc(docRef).then((doc) => doc.data());
//   return data;
// };

// delete item

export const updateCartItemService = async (id, item) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  const data = await getCartListservice(id);

  let newList = data.cart;
  const indexOfItem = newList.findIndex((element) => element.id === item.id);
  newList[indexOfItem].amount = item.amount;
  return await updateDoc(docRef, { cart: newList });
};

export const updateCartItemApi = async (initialUser, item) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/cart/${initialUser}`,
    {
      method: "PUT",
      cache: "no-store",
      body: JSON.stringify({
        id: initialUser,
        item: item,
      }),
    }
  )
    .then((res) => console.log("not here", res))
    .catch((error) => console.log(error));
};

export const deleteCartItemService = async (id, itemId) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  const data = await getCartListservice(id);

  const newList = data.cart.filter((element) => element.id !== itemId);

  try {
    await updateDoc(docRef, { cart: newList });
    return console.log("success");
  } catch (error) {
    return console.log("error");
  }
};

export const deleteCartItemApi = async (user, item) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/cart/${user}-${item.id}`,
    {
      method: "DELETE",
      cache: "no-store",
    }
  ).catch((error) => console.log(error));
  return data;
};

export const clearCartList = async (id) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  return await updateDoc(docRef, { cart: [] });
};
