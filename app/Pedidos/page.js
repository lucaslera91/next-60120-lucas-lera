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
      <div className={`max-w-2xl mx-auto bg-white shadow-md rounded my-8`}>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th colSpan="2" className="py-3 px-6 text-left">
                Total
              </th>
              <th colSpan="2" className="py-3 px-6 text-left">
                Id
              </th>
              <th colSpan="2" className="py-3 px-6 text-left">
                {" "}
                Status
              </th>
              <th colSpan="2" className="py-3 px-6 text-left">
                Items
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <OrderList />
          </tbody>
        </table>
      </div>
      <Footer data={footerList} />
    </div>
  );
};

export default Pedidos;
