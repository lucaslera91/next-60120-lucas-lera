"use client";
import productList from "@/data/productList";
import React, { useState, useEffect } from "react";
import AdminItem from "../ui/AdminItem/AdminItem";
import { useAdminContext } from "@/Contexts/AdminProvider";
import { getAdminListApi } from "@/service/authServices";
import Spinner from "../ui/Spinner/Spinner";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/Contexts/AuthProvider";

const AdminList = () => {
  const { adminList, getAdminList } = useAdminContext();
  const { authCheck, user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    getAdminList();
    authCheck();
  }, []);
  useEffect(() => {
    !user?.isAdmin && router.push('/')
  }, [user]);

  useEffect(() => {
    console.log("list in admin", adminList);
  }, [adminList]);

  return (
    <div>
      {adminList.length < 1 && <Spinner />}
      {adminList.length > 0 &&
        adminList.map((element, idx) => <AdminItem key={idx} item={element} />)}
    </div>
  );
};

export default AdminList;
