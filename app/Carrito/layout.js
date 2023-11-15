import React from "react";
import Footer from "../Components/ui/Footer/Footer";
import Header from "../Components/ui/Header/Header";
import { footerList } from "../utils/footerUtlis";
import { headerData } from "../utils/headerUtils";

export const metadata = {
  title: 'LibraryApp - Carrito',
  description: 'App de libreria'
}

const CarritoLayout = ({ children }) => {
  return (
    <div className="p-2">
      <Header data={headerData} />
      <div className="p-2">
        <h2 className="text-3xl pb-4">Confirma tu carrito!</h2>
        {children}
        <Footer data={footerList} />
      </div>
    </div>
  );
};

export default CarritoLayout;
