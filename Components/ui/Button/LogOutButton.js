"use client";
import { buttonCerrarSesion } from "@/app/utils/constants";
import React from "react";

const LogOutButton = () => {
  return (
    <button className={buttonCerrarSesion}>
      Cerrar sesion
    </button>
  );
};

export default LogOutButton;
