"use client";
import { addOrdersItemApi } from "@/service/ordersService";
import React from "react";

const ConfirmButton = ({ order, initialUser }) => {
  const handleConfirmOrder = async () => {
    console.log("order", order);
    const confirm = async () => {
      addOrdersItemApi(initialUser, order)
        .then((res) => {
          Swal.fire({
            title: "Genial!",
            text: "Tu pedido se creo correctamente",
            icon: "success",
            timer: 1200,
          });
        })
        .catch((error) => console.log(error));
    };
    confirm();
  };
  return <button onClick={handleConfirmOrder}>Confirmar</button>;
};

export default ConfirmButton;
