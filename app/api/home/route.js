import { NextResponse } from "next/server";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../service/firebaseConfig";
export const GET = async () => {
  //const { getList } = useProductListAdminContext();
  const itemRef = collection(db, "lista-productos-admin");
  const data = await getDocs(itemRef).then((snapshot) =>
    snapshot.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }))
  );
  return NextResponse.json(data);
};

export const POST = async (request) => {
  const data = await request.json();
  //console.log(data);
  // crear registro, modificar algo, BD, etc.

  return NextResponse.json(data);
};
