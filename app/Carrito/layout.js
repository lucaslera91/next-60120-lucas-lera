'use client'
import { useAuthContext } from "@/Contexts/AuthProvider";
import React, { Suspense } from "react";
import Footer from "../../Components/ui/Footer/Footer";
import Header from "../../Components/ui/Header/Header";
import Loading from "../Loading";
import { footerList } from "../utils/footerUtlis";
import { headerData } from "../utils/headerUtils";

// export const metadata = {
//   title: "LibraryApp - Carrito",
//   description: "App de libreria",
// };

const CarritoLayout = ({ children, login }) => {
  const { user } = useAuthContext();
  return (
    <>
      {user.isLoggedIn ? (
        <div className="p-2">
          <Header data={headerData} />
          <div className="p-2">
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer data={footerList} />
          </div>
        </div>
      ) : (
        login
      )}
    </>
  );
};

export default CarritoLayout;
