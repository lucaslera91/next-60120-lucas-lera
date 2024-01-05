"use client";
import LogIn from "@/app/LogIn/page";
import { EMAIL_EXISTS, EMAIL_INVALID } from "@/app/utils/constants";
import { useAuthContext } from "@/Contexts/AuthProvider";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAdminListService } from "@/service/authServices";
import { createDocument } from "@/app/utils/utils";

const Form = ({ type }) => {
  const error = "error msg";
  const router = useRouter();
  const { registerUser, logIn, user, setUser } = useAuthContext() || {};

  // const [error, setError] = useState()
  const [formData, setFormData] = useState({
    error: { status: false, message: "" },
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogIn = (res) => {
    console.log("register res", res.id);
    createDocument(res.id);
  };
  const handleSubmit = async (e) => {
    console.log("heck this doesnt work");
    e.preventDefault();
    if (type === "Register") {
      registerUser(formData.email, formData.password)
        .then((res) => {
          res.status === 200 && handleLogIn(res);
          const isEmailValid =
            res.errorMessage === EMAIL_EXISTS ||
            res.errorMessage === EMAIL_INVALID;
          isEmailValid &&
            setFormData({
              ...formData,
              error: {
                status: true,
                message: "El correo ya existente o invalido",
              },
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      const isLogIn = await logIn(formData.email, formData.password);
      if (isLogIn?.status === 500) {
        setFormData({
          ...formData,
          error: {
            status: true,
            message: "Por favor validar correo y contraseña",
          },
        });
      } else {
        //check if admin
        const isAdmin = await getAdminListService(isLogIn?.uid);
        console.log(isAdmin?.role ? true : false);
        setUser({ ...user, isAdmin: isAdmin?.role ? true : false });
        //   ...user,
        //   isAdmin: isAdmin?.role ? true : false,
        //   isLoggedIn: true,
        // });
        //here i should set cookie if necesaryy
        router.push("/");
      }
      //submit to log in if log in
      //submit to register if register
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{type}</h2>
          {formData?.error?.status && (
            <p className="text-red-500 mb-4">{formData?.error?.message}</p>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your email"
              value={formData?.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleSubmit}
          >
            {type === "Register" ? "Crear nuevo usuario" : "Log in"}
          </button>
          {type !== "Register" && (
            <button
              type="button"
              className="w-full bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => router.push("/Register")}
            >
              Register
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
