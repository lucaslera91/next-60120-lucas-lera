"use client";
import revalidate from "@/app/actions/revalidate";
import { clearCartList } from "@/service/cartService";
import { addOrdersItemApi } from "@/service/ordersService";
import React, { useTransition } from "react";
import Swal from "sweetalert2";

const ConfirmButton = ({ order, initialUser }) => {
  let [isPending, startTransition] = useTransition();
  const handleConfirmOrder = async () => {
    const confirm = async () => {
      addOrdersItemApi(initialUser, order)
        .then((res) => {
          Swal.fire({
            title: "Genial!",
            text: "Tu pedido se creo correctamente",
            icon: "success",
            timer: 1200,
          });
          startTransition(() => {
            clearCartList(initialUser);
          });
        })
        .then(() => {
          revalidate("orders");
          revalidate("cartList");
        })
        .catch((error) => console.log(error));
    };
    confirm();
  };
  return (
    <>
      <button onClick={handleConfirmOrder}>Confirmar</button>
      {/* <button
        onClick={() =>
          startTransition(() => {
            revalidate();
          })
        }
      >
        Test action
      </button> */}
      ;
    </>
  );
};

export default ConfirmButton;
