"use client";
import { buttonCerrarSesion } from "@/app/utils/constants";
import React from "react";
import { useAuthContext } from "@/Contexts/AuthProvider";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const router = useRouter();
  const { logOut } = useAuthContext() || {};

  const handleLogOut = async () => {
    console.log("log out");
    console.log(logOut)
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
