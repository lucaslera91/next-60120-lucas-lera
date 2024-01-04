"use client";
import productList from "@/data/productList";
import React, { useState, useEffect } from "react";
import AdminItem from "../ui/AdminItem/AdminItem";
import {} from "@/Contexts/ProductListAdminProvider";
import { useAdminContext } from "@/Contexts/AdminProvider";
import { getAdminListApi } from "@/service/authServices";
import Spinner from "../ui/Spinner/Spinner";

const AdminList = () => {
  const { adminList, getAdminList } = useAdminContext();
  useEffect(() => {
    getAdminList();
  }, []);

  return (
    <div>
      {adminList.length < 1 && <Spinner/>}
      {adminList.length > 0 &&
        adminList.map((element, idx) => (
          <AdminItem key={idx} item={element} />
        ))}
    </div>
  );
};

export default AdminList;
