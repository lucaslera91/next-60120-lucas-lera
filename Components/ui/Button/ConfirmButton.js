"use client";
import revalidate from "@/app/actions/revalidate";
import { useCartContext } from "@/Contexts/CartProvider";
import { useOrdersContext } from "@/Contexts/OrdersProvider";
import { clearCartList } from "@/service/cartService";
import { addOrdersItemApi } from "@/service/ordersService";
import React, { useTransition } from "react";
import Swal from "sweetalert2";

const ConfirmButton = ({ order }) => {
  // let [isPending, startTransition] = useTransition();
  const { addOrder } = useOrdersContext();
  const { clearCart } = useCartContext();
  const handleConfirmOrder = async () => {
    addOrder(order).then(() => clearCart());
  };
  return (
    <>
      <button onClick={handleConfirmOrder}>Confirmar</button>
    </>
  );
};

export default ConfirmButton;
