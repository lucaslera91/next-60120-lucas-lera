import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import Swal from "sweetalert2";

//GET CART

//Firebase service
export const getProductsListservice = async () => {
  const itemRef = collection(db, "lista-productos-admin");
  const data = await getDocs(itemRef).then((snapshot) =>
    snapshot.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }))
  );
  console.log('service', data)
  return data;
};

//Api service
export const getProductsListApi = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/home`, {
    cache: "no-store",
  })
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
