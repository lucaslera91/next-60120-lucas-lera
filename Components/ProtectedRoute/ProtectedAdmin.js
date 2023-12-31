"use client";
import { useAuthContext } from "@/Contexts/AuthProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedAdmin = ({ children }) => {
  const router = useRouter();
  const { user } = useAuthContext();

  // useEffect(() => {
  //   console.log('user', user)
  //   !user?.isAdmin && router.push('/')
  //   !user?.isLoggedIn && router.push("/LogIn");
  // }, []);
  //   const handleAuthcheck = async () => {
  //     //const token = await authenticate();
  //     useEffect(() => {
  //       authCheck();
  //       console.log('checked')
  //     }, []);
  //   };
  //   useEffect(() => {
  //     if (!user) {
  //       router.push('/login'); // Redirect to login if not authenticated
  //     }
  //   }, [user, router]);

  return user?.isAdmin ? <>{children}</> : <></>;
};

export default ProtectedAdmin;
