"use client";
import productList from "@/data/productList";
import React, { useState, useEffect } from "react";
import AdminItem from "../ui/AdminItem/AdminItem";
import { useProductListAdminContext } from "@/Contexts/ProductListAdminProvider";

const AdminList = async () => {
  const { getList, deleteProduct} = useProductListAdminContext();

  const products = await getList();

  return (
    <div>
      {products.length > 0 && products.map((element) => (
        <AdminItem key={element.id} item={element} />
      ))}
    </div>
  );
};

export default AdminList;
