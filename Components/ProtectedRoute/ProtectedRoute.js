"use client";
import { useAuthContext } from "@/Contexts/AuthProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter()
  const { user } = useAuthContext();

  useEffect(() => {
    if (user?.isLoggedIn) {
      if (user?.isAdmin) {
        return { children };
      }
      console.log("logged in");
    } else {
      router.push('/Login')
    }
  }, []);
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

  return <></>; // Render the children only if authenticated
};

export default ProtectedRoute;
