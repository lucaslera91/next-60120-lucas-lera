import { NextResponse } from "next/server";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../../service/firebaseConfig";

export const GET = async ({ id }) => {
  const itemRef = collection(db, "lista-productos-admin");
  const data = await getDocs(itemRef).then((snapshot) =>
    snapshot.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }))
  );
  return NextResponse.json(data.filter((item) => item !== id));
};
