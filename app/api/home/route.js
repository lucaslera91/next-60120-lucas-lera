import { NextResponse } from "next/server";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../service/firebaseConfig";
import { getProductsListservice } from "@/service/productService";
export const GET = async () => {
  const data = await getProductsListservice()
  return NextResponse.json(data);
};

export const POST = async (request) => {
  const data = await request.json();
  return NextResponse.json(data);
};
