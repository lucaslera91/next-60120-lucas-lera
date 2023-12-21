import { NextResponse } from "next/server";
import {
  addCartItemService,
  deleteCartItemService,
  getCartListservice,
  updateCartItemService,
} from "@/service/cartService";
import { getOrdersListservice } from "@/service/ordersService";

export const GET = async (_, { params }) => {
  console.log('test get')
  const { id } = params;
  const data = await getOrdersListservice(id);
  console.log('data', data?.orders)
  //return NextResponse.json({data: data?.orders});
  return NextResponse.json(data?.orders);
};

export const POST = async (req) => {
  const dataSent = await req.json();
  const { id, item } = dataSent;
  try {
    await addCartItemService(id, item);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
};

// export const DELETE = async (_, { params }) => {
//   const { id } = params;
//   const user = id.split("-").slice(0, -1).join("-");
//   const itemId = id.split("-").pop();
//   try {
//     await deleteCartItemService(user, itemId);
//     return NextResponse.json({ status: 200 });
//   } catch (error) {
//     return NextResponse.json({ status: 500 });
//   }
// };

// export const PUT = async (req, { params }) => {
//   const dataSent = await req.json();
//   const { id, item } = dataSent;
//   try {
//     await updateCartItemService(id, item);
//     return NextResponse.json({ status: 200 });
//   } catch (error) {
//     return NextResponse.json({ status: 500 });
//   }
// };
