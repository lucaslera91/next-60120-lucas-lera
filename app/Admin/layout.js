"use client";
import { auth } from "@/service/firebaseConfig";
import React from "react";
import { Suspense } from "react";
import { resolve } from "styled-jsx/css";
import Loading from "../Loading";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getAdminListApi } from "@/service/authServices";
import ProtectedAdmin from "@/Components/ProtectedRoute/ProtectedAdmin";
import { useAuthContext } from "@/Contexts/AuthProvider";

const AdminLayout = async ({ children, login }) => {
  // const { authCheck } = useAuthContext();
  // const isLoggedIn = authCheck();
  const isLoggedIn = true;
  console.log('admin')
  return <div>{isLoggedIn ? children : login}</div>;
};

export default AdminLayout;
