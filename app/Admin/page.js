import React from "react";
import AdminList from "../Components/AdminList/AdminList";
import ProductList from "../Components/ProductList/ProductList";
import Card from "../Components/ui/Card/Card";
import Footer from "../Components/ui/Footer/Footer";
import Header from "../Components/ui/Header/Header";
import { footerList } from "../utils/footerList";
import { headerData } from "../utils/headerUtils";

const Admin = () => {
  return (
    <div className="space-y-4 p-2 rounded">
      <Header data={headerData} />
      <div className="p-2">
        <h2 className="text-3xl pb-4">Edita tus productos</h2>
        <AdminList />
      </div>
      <Footer data={footerList} />
    </div>
  );
};

export default Admin;
