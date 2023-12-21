"use client";
import {
  deleteCartItemApi,
  deleteCartItemService,
} from "@/service/cartService";
import React from "react";
import styles from "./Button.module.css";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const DeleteButton = ({ user, item }) => {
  const router = useRouter();
  const handleDeleteItem = async () => {
    deleteCartItemApi(user, item)
      .then((res) => {
        // Swal.fire({
        //   title: "Exito!",
        //   text: "Item eliminado correctamente",
        //   icon: "success",
        //   timer: 1200,
        //   toast: true,
        //   position: "top-end",
        // });
        router.refresh();
      })
      .catch((error) =>
        Swal.fire({
          title: "Error",
          text: "Ocurrio un error, intente nuevamente",
          icon: "error",
          timer: 1200,
          toast: true,
          position: "top-end",
        })
      );
  };
  return (
    <button
      onClick={handleDeleteItem}
      className={`rounded ${styles.deleteButton}`}
    >
      Eliminar
    </button>
  );
};

export default DeleteButton;
