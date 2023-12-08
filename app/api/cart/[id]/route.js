import { NextResponse } from "next/server";
import { addCartItemService, getCartListservice } from "@/service/cartService";

export const GET = async (_, { params }) => {
  const { id } = params;
  console.log('test', _)
  const data = await getCartListservice(id);
  return NextResponse.json(data?.cart);
};

export const POST = async (_, { req }) => {
console.log('second test', _)
  const { id, item } = req.body;
  const data = await addCartItemService(id, item);
  return NextResponse.json(data);
};
