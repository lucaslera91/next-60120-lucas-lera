"use client";
import { useAuthContext } from "@/Contexts/AuthProvider";
import React from "react";

const PedidosLayout = ({ children, login }) => {
  const { user } = useAuthContext();

  return <div>{user?.isLoggedIn ? children : login}</div>;
};

export default PedidosLayout;
