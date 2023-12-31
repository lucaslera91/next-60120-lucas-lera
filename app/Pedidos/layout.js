"use client";
import { useAuthContext } from "@/Contexts/AuthProvider";
import React from "react";

const PedidosLayout = ({ children, login }) => {
  const { authCheck } = useAuthContext();
  const isLoggedIn = authCheck();

  return <div>{isLoggedIn ? children : login}</div>;
};

export default PedidosLayout;
