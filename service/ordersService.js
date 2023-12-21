import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import Swal from "sweetalert2";

//GET CART

//Firebase service
export const getOrdersListservice = async (id) => {
    console.log('id', id)
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  return await getDoc(docRef).then((doc) => doc.data());
};

//Api service

export const getOrdersListApi = async (initialuser) => {
  return await fetch(`http://${process.env.VERCEL_URL}/api/pedidos/${initialuser}`, {
    cache: "no-store",
  }).then((res) => res.json())
  .catch((error) => console.log(error)
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Error en la pagina, por favor intenta luego",
    //   })
    );
};

//POST - Add Cart Item

export const addOrdersItemService = async (id, order) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  const data = await getOrdersListservice(id);
  const newList = data.orders.push(order);
  console.log(newList)
  return await updateDoc(docRef, { orders: newList });
};

//Api service

export const addOrdersItemApi = async (initialuser, item) => {
  return await fetch(`/api/pedidos/${initialuser}`, {
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
        text: "Orden creada correctamente",
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

// export const updateOrdersItemService = async (id, item) => {
//   console.log("item updated", item);
//   console.log("id updated", item);
//   const colRef = collection(db, "users");
//   const docRef = doc(colRef, id);
//   const data = await getCartListservice(id);
//   //console.log(data.cart);
//   let newList = data.cart;
//   const indexOfItem = newList.findIndex((element) => element.id === item.id);
//   newList[indexOfItem].amount = item.amount;
//   console.log(newList);
//   return await updateDoc(docRef, { cart: newList });
// };

// export const updateOrdersItemApi = async (initialUser, item) => {
//   return await fetch(`/api/cart/${initialUser}`, {
//     method: "PUT",
//     cache: "no-store",
//     body: JSON.stringify({
//       id: initialUser,
//       item: item,
//     }),
//   })
//     .then((res) => console.log("not here", res))
//     .catch((error) => console.log(error));
//   //return data;
// };

// export const deleteCartItemService = async (id, itemId) => {
//   const colRef = collection(db, "users");
//   const docRef = doc(colRef, id);
//   const data = await getCartListservice(id);
//   //console.log(data.cart);
//   const newList = data.cart.filter((element) => element.id !== itemId);
//   //console.log(newList);
//   return await updateDoc(docRef, { cart: newList });
//   //return data;
// };

// export const deleteCartItemApi = async (user, item) => {
//   const data = await fetch(`/api/cart/${user}-${item.id}`, {
//     method: "DELETE",
//     cache: "no-store",
//   }).catch((error) => console.log(error));
//   return data;
// };