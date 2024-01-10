"use client";
import LogIn from "@/app/LogIn/page";
import { EMAIL_EXISTS, EMAIL_INVALID } from "@/app/utils/constants";
import { useAuthContext } from "@/Contexts/AuthProvider";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAdminListService } from "@/service/authServices";
import { createDocument } from "@/app/utils/utils";
import { ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from "../../../service/firebaseConfig";

const Form = ({ type }) => {
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
    createDocument(res.id);
  };

  let [file, setFile] = useState([]);
  const [error, setError] = useState(false);

  const handleUpload = (res) => {
    if (file.length === 0) {
      setError(true);
    } else {
      for (const path of file) {
        const refPath = "user/";
        // console.log(file)
        console.log(storage);
        console.log("path", path);
        const imgRef = ref(storage, refPath + res.id);
        console.log(imgRef);
        uploadBytes(imgRef, path)
          .then((snapshot) => {
            console.log("Uploaded", snapshot, "bytes.");
            console.log("File metadata:", snapshot.metadata);
          })
          // .then(() => alert("Foto subida correctamente"))
          .catch((err) => {
            alert("Error al subir la foto");
            console.log(err);
          });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "Register") {
      registerUser(formData.email, formData.password)
        .then((res) => {
          res.status === 200 && handleLogIn(res);
          console.log("res", res);
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
          return res;
        })
        .then((res) => {
          res.status === 200 && handleUpload(res);
          return res;
        })
        .then((res) => res.status === 200 && router.push("/LogIn"))
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
        const isAdmin = await getAdminListService(isLogIn?.uid);
        setUser({ ...user, isAdmin: isAdmin?.role ? true : false });

        router.push("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form className="bg-white p-8 rounded shadow-md">
          {type === "Register" && (
            <>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Choose an image:
                </label>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(e) => setFile([...e.target.files])}
                  multiple
                  id="photo"
                />
              </div>
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
                  role="alert"
                >
                  <span className="block">
                    Por favor elija una imagen antes de cargar.
                  </span>
                </div>
              )}
            </>
          )}

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
          {type === "Register" ? (
            <button
              type="button"
              className="w-full bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => router.push("/LogIn")}
            >
              Regresar a Log in
            </button>
          ) : (
            <button
              type="button"
              className="w-full bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => router.push("/Register")}
            >
              Registra tu usuario
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
