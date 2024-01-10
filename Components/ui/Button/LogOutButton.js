"use client";
import { buttonCerrarSesion } from "@/app/utils/constants";
import React from "react";
import { useAuthContext } from "@/Contexts/AuthProvider";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const { logOut } = useAuthContext() || {};

  const handleLogOut = async () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    // const router = useRouter();
  };
  return (
    <button onClick={handleLogOut} className={buttonCerrarSesion}>
      Cerrar sesion
    </button>
  );
};

export default LogOutButton;
