"use client";
//import { useProductListAdminContext } from "@/Contexts/ProductListAdminProvider";
import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
  const { id } = params || false;
  //const { getList } = useProductListAdminContext();
  const itemRef = collection(db, "lista-productos-admin");
  const data = await getDocs(itemRef).then((snapshot) =>
    snapshot.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }))
  );
  //const result = data.find((item) => item.id === id);data;
  return NextResponse.json(data);
};
