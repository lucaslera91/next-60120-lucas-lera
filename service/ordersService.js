import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import Swal from "sweetalert2";

//GET CART

//Firebase service
export const getOrdersListservice = async (id) => {
  const colRef = collection(db, "users");
  const docRef = doc(colRef, id);
  return await getDoc(docRef).then((doc) => doc.data());
};

//Api service
export const getOrdersListApi = async (initialuser) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/pedidos/${initialuser}`,
    {
      // next: { validate: 1 }
      next: { tags: ["orders"] },
    }
  )
    .then((res) => res.json())
    .catch(
      (error) => console.log(error)
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Error en la pagina, por favor intenta luego",
      //   })
    );
};

//POST - Add Order

export const addOrdersItemService = async ( order) => {
  const colRef = collection(db, "users");
  console.log(id)

  const docRef = doc(colRef, id);
  const data = await getOrdersListservice(id);
  const newList = data.orders;
  newList.push(order);
  return await updateDoc(docRef, { orders: newList });
};

//Api service

export const addOrdersItemApi = async (initialuser, order) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/pedidos/${initialuser}`,
    {
      method: "POST",
      cache: "no-store",
      next: { revalidate: 2 },
      body: JSON.stringify({
        id: initialuser,
        order: order,
      }),
    }
  ).catch((error) =>
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
