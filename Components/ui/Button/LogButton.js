"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/Contexts/AuthProvider";

const LogButton = ({ type = "login" }) => {
  const router = useRouter();
  const [text, setText] = useState("Log in");
  useEffect(() => {
    type === "login" ? setText("Log in") : setText("Log out");
  }, [type]);

  const { logOut, user } = useAuthContext() || {};

  const handleLogOut = async () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const handleGoToLogIn = () => {
    router.push("/LogIn");
  };

  return (
    <button
      onClick={type === "login" ? handleGoToLogIn : handleLogOut}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default LogButton;
