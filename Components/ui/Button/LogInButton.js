"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LogInButton = () => {
  const router = useRouter();
  const handleGoToLogIn = () => {
    router.push("/LogIn");
  };
  //   return <button onClick={handleGoToLogIn}>Log In</button>;
  return (
    <button
      onClick={handleGoToLogIn}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Log in
    </button>
  );
};

export default LogInButton;
