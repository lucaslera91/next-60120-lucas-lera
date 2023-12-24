"use client";
import { addOrdersItemApi } from "@/service/ordersService";
import React from "react";
import Swal from "sweetalert2";


const ConfirmButton = ({ order, initialUser }) => {
  const handleConfirmOrder = async () => {
    const confirm = async () => {
      addOrdersItemApi(initialUser, order)
        .then((res) => {
          console.log(res.json())
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
