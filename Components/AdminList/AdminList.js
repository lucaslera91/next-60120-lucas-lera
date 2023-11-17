import productList from "@/data/productList";
import React from "react";
import AdminItem from "../ui/AdminItem/AdminItem";

const AdminList = () => {
  return (
    <div>
      {productList.map((element) => (
        <AdminItem item={element} />
      ))}
    </div>
  );
};

export default AdminList;
