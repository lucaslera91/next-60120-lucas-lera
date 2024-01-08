import { NextResponse } from "next/server";
import {
  addCartItemService,
  deleteCartItemService,
  getCartListservice,
  updateCartItemService,
} from "@/service/cartService";
import { getAdminListApi, getAdminListService } from "@/service/authServices";

export const GET = async (_, { params }) => {
    const { id } = params;
    try {
      const data = await getAdminListService(id);
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ status: 500 });
    }
  };