import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import Swal from "sweetalert2";

export const getAdminListService = async (id) => {
  const colRef = collection(db, "admin_users");
  const docRef = doc(colRef, id);

  try {
    const data = await getDoc(docRef).then((doc) => doc.data());
    return data;
  } catch (error) {
    return { isAdmin: false };
  }
};

//Api service

export const getAdminListApi = async (user) => {
  console.log("api", user);
  return await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/auth/${user}`, {
    next: { tags: ["isAdmin"] },
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
};
