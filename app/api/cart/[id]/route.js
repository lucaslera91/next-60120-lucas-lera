import { NextResponse } from "next/server";
import {
  addCartItemService,
  deleteCartItemService,
  getCartListservice,
  updateCartItemService,
} from "@/service/cartService";

export const GET = async (_, { params }) => {
  const { id } = params;
  const data = await getCartListservice(id);
  return NextResponse.json(data?.cart);
};

export const POST = async (req) => {
  const dataSent = await req.json();
  const { id, item } = dataSent;
  const data = await addCartItemService(id, item);
  return NextResponse.json(data);
};

export const DELETE = async (_, { params }) => {
  const { id } = params;
  const user = id.split("-").slice(0, -1).join("-");
  const itemId = id.split("-").pop();
  //console.log("id", user);
  //console.log("item id", itemId);
  //console.log(user, itemId)

  const data = await deleteCartItemService(user, itemId);
  return NextResponse.json(data);
};

export const PUT = async (req) => {
  const dataSent = await req.json();
  const { id, item } = dataSent;
  const data = await updateCartItemService(id, item);
  return NextResponse.json(data);
};
