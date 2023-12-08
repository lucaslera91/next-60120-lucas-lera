import { NextResponse } from "next/server";
import {
  addCartItemService,
  deleteCartItemService,
  getCartListservice,
} from "@/service/cartService";

export const GET = async (_, { params }) => {
  const { id } = params;
  console.log("test", _);
  const data = await getCartListservice(id);
  return NextResponse.json(data?.cart);
};

export const POST = async (_, { req }) => {
  const { id, item } = req.body;
  const data = await deleteCartItemService(id, item);
  return NextResponse.json(data);
};

export const DELETE = async (_, { params }) => {
  const { id } = params;
  const user = id.split("-").slice(0, -1).join("-");
  const itemId = id.split("-").pop();
  console.log("id", user);
  console.log("item id", itemId);
  const data = await deleteCartItemService(user, itemId);
  return NextResponse.json(data);
};
