import { NextResponse } from "next/server";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../../service/firebaseConfig";

export const GET = async (_, { params }) => {
  const { id } = params;
  const colRef = collection(db, "lista-productos-admin");
  const docRef = doc(colRef, id);
  const data = await getDoc(docRef).then((doc) => doc.data());
  const dataWithId = { ...id, data };

  return NextResponse.json(data);
};
