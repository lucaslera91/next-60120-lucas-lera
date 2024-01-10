"use client";
import revalidate from "@/app/actions/revalidate";
import { errorToast, successToast } from "@/app/utils/utils";
import { useAdminContext } from "@/Contexts/AdminProvider";
import { useCartContext } from "@/Contexts/CartProvider";
import { useOrdersContext } from "@/Contexts/OrdersProvider";
import { getAdminListApi } from "@/service/authServices";
import { clearCartList } from "@/service/cartService";
import { addOrdersItemApi } from "@/service/ordersService";
import next from "next";
import React, { useTransition, useState, useEffect } from "react";
import Swal from "sweetalert2";
import Toast from "../Toast/Toast";

const ConfirmButton = ({ order }) => {
  const { addOrder } = useOrdersContext();
  const { clearCart } = useCartContext();
  const { getAdminList, editAfterConfirm } = useAdminContext();
  useEffect(() => {
    getAdminList();
  }, []);

  const handleStock = async (orderList) => {
    const edited = await editAfterConfirm(orderList);
    return edited;
  };

  const handleConfirmOrder = async () => {
    addOrder(order)
      .then(() => {
        handleStock(order.fullList);
        clearCart();
      })
      .then(() => {
        successToast();
      })
      .catch(() => {
        errorToast();
      });
  };
  return (
    <>
      <button onClick={handleConfirmOrder}>Confirmar</button>
    </>
  );
};

export default ConfirmButton;
