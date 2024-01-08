"use client";
import revalidate from "@/app/actions/revalidate";
import { successToast } from "@/app/utils/utils";
import { useCartContext } from "@/Contexts/CartProvider";
import { useOrdersContext } from "@/Contexts/OrdersProvider";
import { clearCartList } from "@/service/cartService";
import { addOrdersItemApi } from "@/service/ordersService";
import React, { useTransition, useState } from "react";
import Swal from "sweetalert2";
import Toast from "../Toast/Toast";

const ConfirmButton = ({ order }) => {
  const { addOrder } = useOrdersContext();
  const { clearCart } = useCartContext();

  const handleConfirmOrder = async () => {
    addOrder(order).then(() => {
      successToast();
      clearCart();
    });
  };
  return (
    <>
      <button onClick={handleConfirmOrder}>Confirmar</button>
    </>
  );
};

export default ConfirmButton;
