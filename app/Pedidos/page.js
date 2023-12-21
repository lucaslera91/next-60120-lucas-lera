import AddProductButton from "@/Components/AdminList/AddProductButton";
import OrderList from "@/Components/OrderList/OrderList";
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

const Pedidos = () => {
  return (
    <div className="space-y-4 p-2 rounded">
      <Header data={headerData} />
      <OrderList />
      <Footer data={footerList} />
    </div>
  );
};

export default Pedidos;
