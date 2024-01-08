import AddProductButton from "@/Components/AdminList/AddProductButton";
import AddAdminItem from "@/Components/ui/AdminItem/AdminAddItem";
import React from "react";
import AdminList from "../../Components/AdminList/AdminList";

import Footer from "../../Components/ui/Footer/Footer";
import Header from "../../Components/ui/Header/Header";
import { footerList } from "../utils/footerUtlis";
import { headerData } from "../utils/headerUtils";

export const metadata = {
  title: "LibraryApp - Admin",
  description: "App de libreria",
};

const Admin = () => {
  return (
    <div className="space-y-4 p-2 rounded">
      <Header data={headerData} />

      <div className="p-2">
        <div className="flex items-center">
          <h2 className="text-3xl bg-red 500">Edita tus productos</h2>
        </div>
        <AddProductButton />
        <AdminList />
      </div>
      <Footer data={footerList} />
    </div>
  );
};

export default Admin;
