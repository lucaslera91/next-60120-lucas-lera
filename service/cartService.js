import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import Swal from "sweetalert2";

//GET CART

//Firebase service
export const getCartListservice = async (id) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  return await getDoc(docRef).then((doc) => doc.data());
};

//Api service

export const getCartListApi = async (initialuser) => {
  return await fetch(`${process.env.VERCEL_URL}/api/cart/${initialuser}`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch((error) =>
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Error en la pagina, por favor intenta luego",
      // })
      console.log(error)
    );
  return data;
};

//POST - Add Cart Item

export const addCartItemService = async (id, item) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  const data = await getCartListservice(id);
  console.log("data add item", data);
  const newList = data.cart;
  const indexOfItem = newList.findIndex((element) => element.id === item.id);
  indexOfItem !== -1
    ? (newList[indexOfItem].amount += item.amount)
    : newList.push(item);

  console.log("new list", newList);
  return await updateDoc(docRef, { cart: newList });
};

//Api service

export const addCartItemApi = async (initialuser, item) => {
  return await fetch(`${process.env.VERCEL_URL}/api/cart/${initialuser}`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({
      id: initialuser,
      item: item,
    }),
  })
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
  console.log("item updated", item);
  console.log("id updated", item);
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  const data = await getCartListservice(id);
  //console.log(data.cart);
  let newList = data.cart;
  const indexOfItem = newList.findIndex((element) => element.id === item.id);
  newList[indexOfItem].amount = item.amount;
  console.log(newList);
  return await updateDoc(docRef, { cart: newList });
};

export const updateCartItemApi = async (initialUser, item) => {
  return await fetch(`${process.env.VERCEL_URL}/api/cart/${initialUser}`, {
    method: "PUT",
    cache: "no-store",
    body: JSON.stringify({
      id: initialUser,
      item: item,
    }),
  })
    .then((res) => console.log("not here", res))
    .catch((error) => console.log(error));
  //return data;
};

export const deleteCartItemService = async (id, itemId) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  const data = await getCartListservice(id);
  //console.log(data.cart);
  const newList = data.cart.filter((element) => element.id !== itemId);
  //console.log(newList);
  return await updateDoc(docRef, { cart: newList });
  //return data;
};

export const deleteCartItemApi = async (user, item) => {
  const data = await fetch(`${process.env.VERCEL_URL}/api/cart/${user}-${item.id}`, {
    method: "DELETE",
    cache: "no-store",
  }).catch((error) => console.log(error));
  return data;
};
